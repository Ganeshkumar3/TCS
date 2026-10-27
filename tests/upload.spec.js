import { test } from '@playwright/test';

test('file upload test', async ({ page }) => {
    await page.goto('https://uploadnow.io/upload');
    await page.locator('//input[@type="file"]').setInputFiles('C:/Users/lenovo/Downloads/car image.jfif');
    
})