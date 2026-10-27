test.use({ ignoreHTTPSErrors: true });
import { test } from '@playwright/test';

test('myntra boys count and lowest price', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  //total count of products

  const products = page.locator('//li[@class="product-base"]');
  console.log(`Product count: ${await products.count()}`);

  const prices = page.locator(
    '//li[@class="product-base"]//span[@class="product-discountedPrice"]'
  );

  //min discounted price

  const values = (await prices.allTextContents())
    .map(text => Number(text.replace(/\D/g, '')));
  const minimumDiscountedPrice = Math.min(...values);

  console.log(`lowest discounted price: Rs. ${minimumDiscountedPrice}`);

  //brand of the product with lowest discounted price

  const productBrands = page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumDiscountedPrice}"]/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]`);

  console.log(await productBrands.first().textContent());


  //find lowest price of discounted products and regular products

  // const allPrices = page.locator(
  //   '//li[@class="product-base"]/descendant::div[@class="product-price"]/child::span/child::span[@class="product-discountedPrice"] | //li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[not(@class) and text()]'
  // );



});



test("All 50 products", async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  async function getProductBrandName(minPrice) {
    const productBrandName = await page.locator(
      `//li[@class="product-base"]//div[@class="product-price"]//span[(@class="product-discountedPrice" and normalize-space()="Rs. ${minPrice}") or (not(@class) and normalize-space()="Rs. ${minPrice}")]/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]`
    ).first().textContent();

    return productBrandName;
  }

  async function getMinimumPrice() {
    const pricesText = await page
      .locator(
        '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]'
      )
      .allTextContents();

    const prices = pricesText.map(text => Number(text.replace(/\D/g, '')));
    const minimumPrice = Math.min(...prices);

    console.log(
      `Lowest price of discounted products and regular products: Rs. ${minimumPrice}`
    );

    const productBrandName = await getProductBrandName(minimumPrice);
    console.log(`Brand name of the product with the lowest price: ${productBrandName}`);
  }

  await getMinimumPrice();
});
