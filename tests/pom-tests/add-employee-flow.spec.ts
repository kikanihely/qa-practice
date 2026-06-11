import {test} from '@playwright/test';
import {DashboardPage} from '../../pages/DashboardPage';
import { EmployeeListPage } from '../../pages/EmplyeeListPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeDetailPage } from '../../pages/EmployeeDetailPage';
import data from '../../test-data/addEmployeeData.json'
// import { LoginPage } from '../../pages/LoginPage';

// test("Authenticate user", async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.navigateToHomePage();
//     await loginPage.login(data.admin.username, data.admin.password);
//     await page.context().storageState({path: "test-data/auth.json"})
// })

test("Add Employee Flow", async ({page}) => {
    const dashboardPage = new DashboardPage(page);
    const employeeListPage = new EmployeeListPage(page);
    const employeeAddPage = new AddEmployeePage(page);
    const employeeDetailPage = new EmployeeDetailPage(page);
    await dashboardPage.gotoDashboard()
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails(data.employee.firstName[2], data.employee.middleName[2], data.employee.lastName[2], data.employee.employeeId[2]);
    await employeeAddPage.fillLoginDetails(data.employee.username[2], data.employee.password[2]);
    // await employeeAddPage.validatePage();
    await employeeDetailPage.fillDriverLicense(data.employee.driverLicenseNumber[2])
    await employeeDetailPage.fillExpiryDate(data.employee.licenseExpiryDate[2])
    await employeeDetailPage.selectNationality(data.employee.nationality[2])
    await employeeDetailPage.selectMaritalStatus(data.employee.maritalStatus[2])
    await employeeDetailPage.selectGender(data.employee.gender[2] as 'Male' | 'Female')
    await employeeListPage.searchEmployee("demoo")

})
