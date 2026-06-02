import {test, expect} from '@playwright/test';

test("Normal Alert", async ({page}) => {
    await page.goto("https://demoqa.com/alerts")

    //Alert
    //Normal Alert
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("You clicked a button");
        await dialog.accept();
    })

    await page.locator("#alertButton").click();
   
});

test("Confirmation Alert", async ({page}) => {
    await page.goto("https://demoqa.com/alerts")

    //Confirm Alert
    page.on("dialog",async (dialog) => {
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Do you confirm action?");
        await dialog.accept();
    })

    await page.locator("#confirmButton").click();
    await expect(page.locator("#confirmResult")).toContainText("You selected Ok");
});

test("Prompt Alert", async ({page}) => {
    await page.goto("https://demoqa.com/alerts")
    
    //Prompt Alert
    page.on("dialog",async (dialog) => {
        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toBe("Please enter your name");
        await dialog.accept("Hely");
    })

    await page.locator("#promtButton").click();
    await expect(page.locator("#promptResult")).toContainText("You entered Hely");
})