import {test} from '@playwright/test';

test("Multiple Windows", async ({page}) => {
    await page.goto("https://www.fabindia.com/")
    await page.getByAltText("Men Kurtas").first().click();

    const page1Promise= page.waitForEvent("popup");
    await page.getByAltText("Grey Cotton Stripe Short Kurta").click();
    const page1 = await page1Promise;
    await page1.waitForLoadState();
    await page1.getByRole("button", {name: "Add to Cart"}).click();
})