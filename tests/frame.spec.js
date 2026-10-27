import { test } from '@playwright/test';

test('basic test', async ({ page }) => {
    //await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    const frame = await page.frameLocator('//iframe[@name="globalSqa"]');
    await frame.locator("//img[@alt='JMeter Training']").click();
    const frame1 = await page.frameLocator('//iframe[@name="globalSqa"]');
    await frame1.locator('//img[@data-image-title="LoadTraining"]').click();
    await page.locator('//div[@class="menu-interaction-container"]//span[text()="Drag And Drop"]').click();

})