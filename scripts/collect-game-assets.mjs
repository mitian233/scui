/** Collect only public UI sprites already loadable by the game's renderer. No game API calls. */
import { chromium } from '@playwright/test'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const cdp = process.argv[2]
const pageUrl = process.argv[3]
if (!cdp || !pageUrl) throw new Error('Usage: node scripts/collect-game-assets.mjs <CDP URL> <game page URL> (open the game in that browser first)')
const prior = JSON.parse(await readFile(new URL('../research/assets-manifest.json', import.meta.url), 'utf8'))
const browser = await chromium.connectOverCDP(cdp)
try {
  const page = browser.contexts().flatMap(context => context.pages()).find(page => page.url() === pageUrl)
  if (!page) throw new Error(`Open ${pageUrl} and wait for the title screen first.`)
  const script = await page.locator('script[src*="/app-"]').getAttribute('src')
  const source = await (await page.request.get(new URL(script, page.url()).href)).text()
  const chunkName = source.match(/n=self\.([\w$]+)=self\./)?.[1]
  const engineId = source.match(/(\d+):e=>\{var t=window\.ezg;window\.ezg=null,e\.exports=t\}/)?.[1]
  if (!chunkName || !engineId) throw new Error('The game bundle changed; review its public loader before updating the collector.')
  const packet = await page.evaluate(async ({ chunkName, engineId, names }) => {
    let engine
    window[chunkName].push([[Date.now()], {}, require => { engine = require(Number(engineId)) }])
    const paths = ['images/ui/common/parts.json', 'images/ui/common/parts_buttons.json', 'images/ui/common/parts_icons.json', 'images/ui/common/parts_filter.json', 'images/ui/option/parts.json']
    const missing = paths.filter(path => !engine.loader.resources[path])
    if (missing.length) await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('UI loading timeout')), 30000)
      engine.loader.add(missing).load(() => { clearTimeout(timer); resolve() })
    })
    return {
      capturedAt: new Date().toISOString(),
      atlases: Object.entries(engine.loader.resources).filter(([, resource]) => resource.data?.frames).map(([path, resource]) => ({ path, imageUrl: Object.values(resource.textures)[0]?.baseTexture.imageUrl })),
      assets: names.map(name => {
        const texture = engine.utils.TextureCache[name]
        if (!texture) throw new Error(`Sprite unavailable: ${name}`)
        const sprite = new engine.Sprite(texture)
        const canvas = engine.game.renderer.extract.canvas(sprite)
        const asset = { name, width: canvas.width, height: canvas.height, frame: texture.frame, orig: texture.orig, trim: texture.trim, rotated: texture.rotate, source: texture.baseTexture.imageUrl, data: canvas.toDataURL('image/png') }
        sprite.destroy()
        return asset
      }),
    }
  }, { chunkName, engineId, names: prior.assets.map(asset => asset.name) })
  const output = resolve('src/assets/game')
  await mkdir(output, { recursive: true })
  for (const asset of packet.assets) {
    if (!/^[a-zA-Z0-9_]+\.png$/.test(asset.name)) throw new Error(`Unexpected asset name: ${asset.name}`)
    await writeFile(resolve(output, asset.name), Buffer.from(asset.data.split(',')[1], 'base64'))
  }
  await writeFile(resolve('research/assets-manifest.json'), JSON.stringify({ ...packet, assets: packet.assets.map(({ data, ...asset }) => asset) }, null, 2))
  console.log(`Collected ${packet.assets.length} public UI sprites.`)
} finally {
  // Disconnect from the existing browser; do not close its pages.
  await browser.close()
}
