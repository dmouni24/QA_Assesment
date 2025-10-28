import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page accessibility check', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
