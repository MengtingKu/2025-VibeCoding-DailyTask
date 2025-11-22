// tests/responsive.spec.js
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 320, height: 640 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1024 },
];

viewports.forEach(({ name, width, height }) => {
  test.describe(`Responsive test - ${name}`, () => {
    test(`no horizontal scroll at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('http://localhost:5173/'); // Vite dev server URL
      // 等待內容載入
      await page.waitForLoadState('networkidle');

      // 取得 body 寬度 & viewport 寬度
      const scrollWidth = await page.evaluate(
        () => document.documentElement.scrollWidth
      );
      const innerWidth = await page.evaluate(() => window.innerWidth);

      // 檢查沒有水平捲動
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
    });
  });
});
