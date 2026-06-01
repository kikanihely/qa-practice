import {test, expect} from '@playwright/test';

test("CSS Locators", async ({page}) => {

    await page.goto("https://eventhub.rahulshettyacademy.com")

    //Normal CSS locator    
    //By id
    await page.locator("#email").fill("johndoe@gmail.com")

    //By tag + attribute
    await page.locator("input[type='password']").fill("John@1234")

    //By class
    await page.locator(".login-submit-btn").click();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com");

    //By tag + attribute
    await page.locator("a[id='nav-events']").click();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events");

    //position locator
    await page.locator("a[id='book-now-btn']").nth(0).click();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events/3");

    //By attribute contains *
    await page.locator("input[placeholder*='name']").fill("John Doe");

    //By attribute starts with ^
    await page.locator("input[placeholder^='you']").fill("johndoe@gmail.com")

    //By attribute ends with $
    await page.locator("input[placeholder$='10']").fill("9876543210")

    //By id
    await page.locator("#confirm-booking").click();

    //By attribute
    await page.locator("text=Booking Confirmed!").isVisible();

})