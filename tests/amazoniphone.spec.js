import { test } from '@playwright/test';

test('Amazon iPhone 17 Pro maximum reviews', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    // Search iPhone 17 Pro
    await page.locator('//input[@id="twotabsearchtextbox"]')
        .fill('iPhone 17 Pro');

    await page.locator('//input[@id="nav-search-submit-button"]').click();

    await page.waitForLoadState();
    // Locate review counts for iPhone 17 Pro, excluding Pro Max
    const reviewsLocator = await page.locator('//span[contains(text(), "iPhone 17 Pro") and not(contains(text(), "Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"size-small")]').allInnerTexts();
     const high = await reviewsLocator.map(total => Number(total));
    const highreview = Math.max(...high);
     console.log('highreview:',highreview ); 



    let addToCart = page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ") and not(contains(@aria-label,"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true" and normalize-space()="${highreview}"]/ancestor::div[@role="listitem"]/descendant::input[@aria-label="Add to cart"]`).first();

    await addToCart.click();
    //added a file test file
});