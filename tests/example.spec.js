import { test } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });

  await page.getByPlaceholder('First Name').fill('Ganesh');
  await page.getByPlaceholder('Last Name').fill('Kumar');
  await page.getByPlaceholder('name@example.com').fill('ganesh.kumar@example.com');
  await page.locator('input[name="gender"][value="Male"]').check();
  await page.getByPlaceholder('Mobile Number').fill('9102938762');
  await page.getByRole('button', { name: 'Submit' }).click();
});