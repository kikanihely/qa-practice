import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import { EmployeeListPage } from '../../pages/EmplyeeListPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';

test("Add Employee Flow", async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const employeeListPage = new EmployeeListPage(page);
    const employeeAddPage = new AddEmployeePage(page);
    await loginPage.navigateToHomePage();
    await loginPage.login("Admin", "admin123");
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails("demoo", "Nileshbhai", "demoo", "demoo2o");
    await employeeAddPage.fillLoginDetails("demo2.kikani", "Hely@3014");
    await employeeAddPage.validatePage();
})
