import {test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage';
import data from '../../test-data/addEmployeeData.json'

test("Authenticate user", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToHomePage();
    await loginPage.login(data.admin.username, data.admin.password);
    await page.context().storageState({path: "test-data/auth.json"})
})