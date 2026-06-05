import { test, expect } from '@playwright/test';

test("Assertions", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");

    //Verify Page URl and Title
    await expect(page).toHaveURL("https://www.snapdeal.com/");
    await expect(page).toHaveTitle("Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");

    //Verify element visibility
    await expect(page.locator(".HeaderStyle__HeaderLeftContent-sc-dc90d7cb-2.bEskku")).toBeVisible();

    //Verify Text element
    await expect(page.locator(".HeaderStyle__SearchPlaceHolderTextsContainer-sc-dc90d7cb-9.cSsXLY")).toHaveText("Search for Brands & Products");
    await page.locator("#search-box-input").fill("Harry Potter");
    await expect(page.locator("#search-box-input")).toHaveValue("Harry Potter");

    //Verify element state
    await expect(page.locator("#search-box-input")).toBeEnabled();
    await expect(page.locator("#search-box-input")).toBeEditable();
    await page.keyboard.press("Enter");
    await page.waitForLoadState("networkidle");

    //Soft Assertions
    await expect.soft(page).toHaveURL("https://www.snapdeal.com/search?clickSrc=top_searches&keyword=Harry%20Potter&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy");

})