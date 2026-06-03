import {test,expect} from '@playwright/test'

test("Auto waiting for elements", async ({page}) => {
    await page.goto("https://eventhub.rahulshettyacademy.com")

    //wait for selector 
    await page.waitForSelector("#email");
    await page.locator("#email").fill("hely@gmail.com")
    await page.locator("#password").fill("Hely@3014")
    await page.locator("#login-btn").click();
    await page.getByText("Events").first().click();

    //wait for URL
    await page.waitForURL("https://eventhub.rahulshettyacademy.com/events")
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events")

    //wait for load state
    await page.waitForLoadState('networkidle');   
    await page.waitForLoadState('domcontentloaded'); 
    await page.waitForLoadState('load');

    //Wait for timeout
    await page.waitForTimeout(2000);

    page.close();
})