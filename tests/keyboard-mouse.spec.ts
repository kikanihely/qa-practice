import {test} from '@playwright/test';

test("Keyboard and Mouse", async ({page}) => {
    await page.goto("https://eventhub.rahulshettyacademy.com")
    await page.locator("#email").click();

    //Keyboard actions
    await page.keyboard.type("hely@gmail.com");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Hely@3014");
    await page.keyboard.press("Enter");

    //Mouse actions
    await page.getByRole("button", {name: "Admin", exact: true}).click();
    await page.getByRole("link",{name: "Manage Bookings"}).first().click();

})