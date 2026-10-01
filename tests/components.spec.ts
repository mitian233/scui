import { test, expect } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

test.beforeEach(async ({ page }) => { await page.goto('/') })

test('catalog loads all local assets without console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Shiny Colors UI' })).toBeVisible()
  await page.waitForLoadState('networkidle')
  const broken = await page.locator('img').evaluateAll(images => images.filter(image => !(image as HTMLImageElement).naturalWidth).map(image => (image as HTMLImageElement).src))
  expect(broken).toEqual([])
  expect(errors).toEqual([])
})

test('buttons expose disabled and asynchronous loading states', async ({ page }) => {
  const buttons = page.locator('#buttons')
  await expect(buttons.getByRole('button', { name: '暂不可用' })).toBeDisabled()
  await buttons.getByRole('button', { name: '保存设置', exact: true }).click()
  await expect(buttons.getByRole('button', { name: '保存中', exact: true })).toBeDisabled()
  await expect(buttons.getByRole('status')).toHaveText('示例设置已保存。')
  await buttons.getByRole('button', { name: '決定', exact: true }).click()
  await expect(buttons.getByRole('status')).toContainText('原作「決定」')
})

test('form models update, validation is announced, and keyboard controls work', async ({ page }) => {
  const form = page.locator('#forms')
  await form.getByLabel('制作人名称', { exact: true }).fill('')
  await expect(form.getByRole('alert')).toHaveText('请输入制作人名称。')
  await form.getByLabel('制作人名称', { exact: true }).fill('SCUI producer')
  await expect(form.getByRole('alert')).toHaveCount(0)
  await form.getByRole('checkbox', { name: '选择这位偶像' }).uncheck()
  await expect(form.locator('.form-state')).toContainText('未选择')
  await form.getByRole('switch', { name: '播放语音' }).click()
  await expect(form.getByRole('switch', { name: '播放语音' })).not.toBeChecked()
  const slider = form.getByRole('slider', { name: '背景音乐音量' })
  await slider.focus()
  await slider.press('ArrowRight')
  await expect(slider).toHaveAttribute('aria-valuenow', '66')
  await form.getByRole('button', { name: '增加使用数量' }).click()
  await expect(form.locator('.form-state')).toContainText('数量 4')
  await form.getByRole('combobox', { name: '所属组合' }).click()
  await page.getByRole('option', { name: 'アンティーカ', exact: true }).click()
  await expect(form.getByRole('combobox', { name: '所属组合' })).toContainText('アンティーカ')
})

test('tabs support arrows, disabled items are skipped, and accordion opens', async ({ page }) => {
  const navigation = page.locator('#navigation')
  const produce = navigation.getByRole('tab', { name: 'プロデュース', exact: true })
  await produce.focus()
  await produce.press('ArrowRight')
  await expect(navigation.getByRole('tab', { name: 'サポート', exact: true })).toHaveAttribute('aria-selected', 'true')
  await expect(navigation.getByRole('tabpanel')).toContainText('サポートアイドル')
  await expect(navigation.getByRole('tab', { name: '未解锁' })).toBeDisabled()
  await navigation.getByRole('button', { name: '声音设置' }).click()
  await expect(navigation.getByText('分别调整背景音乐、语音和音效。', { exact: false })).toBeVisible()
})

test('dialog traps focus, closes on Escape, restores focus, and commits demo action', async ({ page }) => {
  const trigger = page.getByRole('button', { name: '打开弹窗', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: '确认设置' })
  await expect(dialog).toBeVisible()
  for (let n = 0; n < 5; n++) {
    await page.keyboard.press('Tab')
    expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true)
  }
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()
  await trigger.click()
  await dialog.getByRole('button', { name: '确认保存' }).click()
  await expect(dialog).not.toBeVisible()
  await expect(page.locator('#overlays')).toContainText('示例设置已保存')
})

test('progress completes and asset filter exposes all 47 original sprites', async ({ page }) => {
  const feedback = page.locator('#feedback')
  for (let i = 0; i < 4; i++) await feedback.getByRole('button', { name: '推进任务' }).click()
  await expect(feedback.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  await expect(feedback.getByRole('button', { name: '推进任务' })).toBeDisabled()
  await feedback.getByRole('button', { name: '重置' }).click()
  await expect(feedback.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  await page.locator('#assets').getByRole('combobox', { name: '素材分类' }).click()
  await page.getByRole('option', { name: '全部 47 份素材' }).click()
  await expect(page.locator('.asset-tile')).toHaveCount(47)
})

test('desktop and mobile layouts have no horizontal overflow', async ({ page }) => {
  await mkdir('test-results', { recursive: true })
  for (const [name, viewport] of [['desktop', { width: 1440, height: 1000 }], ['mobile', { width: 390, height: 844 }]] as const) {
    await page.setViewportSize(viewport)
    await page.waitForLoadState('networkidle')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.screenshot({ path: `test-results/${name}.png`, animations: 'disabled' })
    await page.locator('#forms').scrollIntoViewIfNeeded()
    await page.screenshot({ path: `test-results/${name}-forms.png`, animations: 'disabled' })
    await page.getByRole('button', { name: '打开弹窗', exact: true }).click()
    await page.screenshot({ path: `test-results/${name}-dialog.png`, animations: 'disabled' })
    await page.keyboard.press('Escape')
    await page.evaluate(() => scrollTo(0, 0))
  }
})
