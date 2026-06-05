import {test} from '@playwright/test';

test("Demo Test", async ({page}) => {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");  
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator(".orangehrm-login-button").click();

});