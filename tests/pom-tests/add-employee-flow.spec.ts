import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';

test("Add Employee Flow", async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.navigateToHomePage();
    await loginPage.login("Admin", "admin123");
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToPIM();
})
