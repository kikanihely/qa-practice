import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

test("Add Employee Flow", async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToHomePage();
    await loginPage.login("Admin", "admin123");
})
