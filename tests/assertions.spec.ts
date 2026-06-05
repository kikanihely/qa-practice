import { test, expect } from '@playwright/test';

test("Assertions", async ({ page }) => {
    await page.goto("https://eventhub.rahulshettyacademy.com");

    //Verify Page URl and Title
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/login");
    await expect(page).toHaveTitle("EventHub — Discover & Book Events");

    //Verify element visibility
    await expect(page.getByAltText("EventHub app preview")).toBeVisible();

    //Verify Text element
    await page.locator("#email").fill("hely@gmail.com");
    await expect(page.locator("#email")).toHaveValue("hely@gmail.com");

    //Verify element state
    await expect(page.locator("#password")).toBeEnabled();
    await expect(page.locator("#password")).toBeEditable();
    await page.keyboard.press("Tab");
    await page.keyboard.type("Hely@3014");
    await page.keyboard.press("Enter");
    await page.locator(".leading-snug").first().click()
    await page.waitForLoadState("networkidle");

    //Soft Assertions
    await expect.soft(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events/3");

})