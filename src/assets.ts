const images = import.meta.glob<string>('./assets/game/*.png', { eager: true, query: '?url', import: 'default' })

/** Source sprites remain owned by the game rightsholders. See research/assets-manifest.json. */
export const gameAssets = Object.fromEntries(Object.entries(images).map(([path, url]) => [path.split('/').pop()!, url])) as Record<string, string>

export function gameAsset(name: string): string {
  const url = gameAssets[name]
  if (!url) throw new Error(`SCUI: unknown game asset "${name}"`)
  return url
}
