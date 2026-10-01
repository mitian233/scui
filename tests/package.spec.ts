import { test, expect } from '@playwright/test'
import { existsSync } from 'node:fs'

test('built library works with its own stylesheet and public exports', async ({ page }) => {
  test.skip(!existsSync('dist/shiny-colors-ui.js'), 'Run npm run build before checking the built package.')
  await page.goto('/tests/fixtures/consumer.html')
  await expect(page.getByRole('button', { name: '库内按钮' })).toBeVisible()
  await expect(page.getByRole('checkbox', { name: '库内复选框' })).not.toBeChecked()
  await page.getByRole('checkbox', { name: '库内复选框' }).check()
  await expect(page.getByRole('status', { name: '选择状态' })).toHaveText('已选择')
  await expect(page.getByRole('progressbar', { name: '库内进度' })).toHaveAttribute('aria-valuenow', '40')
  expect(await page.locator('img').evaluateAll(images => images.every(image => (image as HTMLImageElement).naturalWidth > 0))).toBe(true)
  await expect(page.locator('.sc-button')).toHaveCSS('height', '52px')
})
