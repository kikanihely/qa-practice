import {test} from '@playwright/test';

test("Screenshot", async ({page}) => {
    await page.goto("https://eventhub.rahulshettyacademy.com")

    //full page screenshot
    await page.screenshot({
        path: "screenshot.png",
        fullPage: true
    })

    //viewport screenshot
    await page.screenshot({
        path: "viewport.png",
        fullPage: false
    })

    //screenshot of specific element
    await page.locator("#email").screenshot({  
        path: "emailelement.png"
    })
})