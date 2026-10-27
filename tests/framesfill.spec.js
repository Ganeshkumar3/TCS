import {test} from "@playwright/test";


//frame 2
test('basic test', async ({page}) => {
await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
const page2=await page.frameLocator('//iframe[@id="frm2"]');
await page2.locator('#firstName').fill('Ganesh kumar');
await page2.locator('#lastName').fill('SLS');
await page2.locator('#malerb').check();
await page2.locator('#englishchbx').check();
await page2.locator('#hindichbx').check();
await page2.locator('#spanishchbx').check();

//frame 3 inside frame 2
const page3=await page.frameLocator('#frm3');
const page3_2=await page3.frameLocator('#frm2');
await page3_2.locator('#firstName').fill('Ganesh kumar');
await page3_2.locator('#lastName').fill('SLS');
await page3_2.locator('#malerb').check();
await page3_2.locator('#englishchbx').check();
await page3_2.locator('#hindichbx').check();
await page3_2.locator('#spanishchbx').check();

})