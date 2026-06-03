import {test, expect} from '@playwright/test';

test("Assertions", async ({page}) => {
    await page.goto("https://www.bookswagon.com/")

    //Verify Page URl and Title
    await expect(page).toHaveURL("https://www.bookswagon.com/");
    await expect(page).toHaveTitle("Buy Books Online | India's Largest Online Bookstore | BooksWagon");

    //Verify element visibility
    await expect(page.locator("#ctl00_imglogo")).toBeVisible();
    await expect(page.locator("#ctl00_hdnAddedMeta")).toBeHidden();
    
    //Verify Text element
    await expect(page.locator(".tagline-main")).toContainText("Let's")
    await expect(page.locator("#ctl00_lblUser")).toHaveText("Bibiliophile");
    await page.locator("#inputbar").fill("Harry Potter");
    await expect(page.locator("#inputbar")).toHaveValue("Harry Potter");

    //Verify element state
    await expect(page.locator("#inputbar")).toBeEnabled();
    await expect(page.locator("#inputbar")).toBeEditable();
    await page.keyboard.press("Enter");

    //Soft Assertions
    await expect.soft(page.locator(".btn-red").first()).toBeEnabled();
    await page.locator(".btn-red").first().click();
    await expect.soft(page.locator(".alert.alert-success").first()).toHaveText("Product successsfully added to the cart");

})