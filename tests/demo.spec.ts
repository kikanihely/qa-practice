import {test} from '@playwright/test';

test("Demo Test", async ({page}) => {
    
    await page.goto("https://www.snapdeal.com/");
});