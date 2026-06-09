import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import { EmployeeListPage } from '../../pages/EmplyeeListPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeDetailPage } from '../../pages/EmployeeDetailPage';



test("Add Employee Flow", async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const employeeListPage = new EmployeeListPage(page);
    const employeeAddPage = new AddEmployeePage(page);
    const employeeDetailPage = new EmployeeDetailPage(page);
    await loginPage.navigateToHomePage();
    await loginPage.login("Admin", "admin123");
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails("demoo", "Nileshbhai", "demoo", "demoo9o");
    await employeeAddPage.fillLoginDetails("demo9.kikani", "Hely@3014");
    await employeeAddPage.validatePage();
    await employeeDetailPage.fillDriverLicense('GJ01-2023-987654')
    await employeeDetailPage.fillExpiryDate('2028-06-15')
    await employeeDetailPage.selectNationality('India')
    await employeeDetailPage.selectMaritalStatus('Single')
    await employeeDetailPage.selectGender('Female')

})
