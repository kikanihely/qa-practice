import {test} from "@playwright/test";

test("XPath Locators", async ({page}) => {

    await page.goto("https://eventhub.rahulshettyacademy.com")
    
    //basic xpath
    await page.locator("//input[@id='email']").fill("hely@gmail.com")
    
    //parent to child
    await page.locator("//form//div//input[@type='password']").fill("Hely@3014")

    //by position
    await page.locator("(//button)[1]").click();
})