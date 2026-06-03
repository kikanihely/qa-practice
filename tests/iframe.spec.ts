import {test} from '@playwright/test';

test("IFrame Handling", async ({page}) => {
    await page.goto("https://checkout.stripe.dev/checkout");
    const frame = page.locator("iframe").nth(1).contentFrame();
    await frame.getByRole("textbox", {name: "Email"}).fill("hely@gmail.com");
    await frame.getByRole("textbox", {name: "Full Name"}).fill("Hely Kikani");
    await frame.locator("#shippingAddressLine1").fill("123 Main St");
    await frame.getByRole("textbox", {name: "Card Number"}).fill("4242 4242 4242 4242");
    await frame.locator("#cardExpiry").fill("12/32");
    await frame.locator("#cardCvc").fill("123");
    await page.keyboard.press("Enter");
})