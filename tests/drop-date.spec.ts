import {test} from '@playwright/test'

test("Dropdown and Datepicker", async ({page}) => {
    await page.goto("https://eventhub.rahulshettyacademy.com")

    //Login
    await page.locator('#email').fill("hely@gmail.com");
    await page.locator('#password').fill("Hely@3014");
    await page.locator("#login-btn").click();   

    //Adding Event
    await page.getByRole("button", {name: "Admin", exact: true}).click();
    await page.getByRole("link",{name: "Manage Events"}).first().click();
    await page.getByPlaceholder("Event Title").fill("Tech Conference 2024");
    await page.getByPlaceholder("Describe the event…").fill("A conference about the latest in technology.");

    //Static dropdown
    await page.getByLabel("Category*").selectOption("Conference")
    await page.getByPlaceholder("e.g. Bangalore").fill("Ahmedabad");
    await page.getByPlaceholder("Venue name & address").fill("Ahmedabad Convention Center, Ahmedabad, India");

    //Datepicker
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).click();
    await page.keyboard.type("22");
    await page.keyboard.type("06")
    await page.keyboard.type("2026")
    await page.keyboard.press("Tab");
    await page.keyboard.type("10")
    await page.keyboard.type("20")


    await page.getByLabel("Price ($)").fill('2000');
    await page.getByLabel("Total Seats").fill('1000')
    await page.locator("#add-event-btn").click(); 


})
