import {test, expect} from '@playwright/test';


test("Built in locators", async ({page}) => {

    await page.goto("https://eventhub.rahulshettyacademy.com")

    // Get by Text
    await page.getByText("Sign in to EventHub").isVisible();   
    
    //Get by Placeholder
    await page.getByPlaceholder("you@email.com").fill("johndoe@gmail.com")

    //Get by Label
    await page.getByLabel("Password").fill("John@1234")

    //Get by role (button)
    await page.getByRole("button", {name:"Sign In", exact: true}).click();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com");

    //Get by role (link)
    await page.getByRole("link", {name: "Events", exact: true}).click();

    // Get by alt text
    await page.getByAltText("Dilli Diwali Mela").isVisible()

    // Get by test id
    await page.getByTestId("book-now-btn").nth(0).click();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/events/3");

    //Get by label
    await page.getByLabel("Full Name").fill("John Doe");
    await page.getByLabel("Email").fill("johndoe@gmail.com");
    await page.getByLabel("Phone").fill("9876543210");

    //Get by role (button)
    await page.getByRole("button", {name: "Confirm Booking", exact: true}).click();

    //Get by text
    await page.getByText("Booking Confirmed!").isVisible();
})