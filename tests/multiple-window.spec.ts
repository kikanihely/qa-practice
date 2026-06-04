import { test } from '@playwright/test';

test("Multiple Windows using Browser Fixture", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.fabindia.com/");

    await page.locator('img[alt="Men Kurtas"][loading="lazy"]').first().click();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole("img", { name: "Grey Cotton Stripe Short Kurta" }).click()
    ]);

    await newPage.waitForLoadState();

    await newPage.getByRole("button", { name: "Add to Cart" }).click();

    await context.close();
});