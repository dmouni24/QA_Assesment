import { test, expect } from '@playwright/test';

test('add to cart and verify cart badge', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart', { timeout: 5000 });
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
