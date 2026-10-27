import { test } from '@playwright/test';

test('window handling', async ({ context }) => {
const page=await context.newPage();

    await page.goto('https://www.reliancedigital.in/');
    await page.locator('//a[@aria-label="open Tablets"]').click();
    //     await page.locator('//div[text()="Tablets"]').hover().click();
    // await page.locator('//div[@id="1menu-categories-section"]/descendant::div[text()="Tablets"]').click();
    const [newTab]= await Promise.all([
        context.waitForEvent('page'),
        page.locator('//h5[contains(text()," Asus Pad 30.98 cm (12.2 inch) Wi-Fi Tablet, 256 GB")]').click()
    ]);

})