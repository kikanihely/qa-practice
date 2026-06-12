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
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails(data.employee.firstName[1], data.employee.middleName[1], data.employee.lastName[1], data.employee.employeeId[1]);
    await employeeAddPage.fillLoginDetails(data.employee.username[1], data.employee.password[1]);
    // await employeeAddPage.validatePage();
    // await page.waitForURL('**/pim/viewPersonalDetails/empNumber/**')
    await employeeDetailPage.fillDriverLicense(data.employee.driverLicenseNumber[1])
    await employeeDetailPage.fillExpiryDate(data.employee.licenseExpiryDate[1])
    await employeeDetailPage.selectNationality(data.employee.nationality[1])
    await employeeDetailPage.selectMaritalStatus(data.employee.maritalStatus[1])
    await employeeDetailPage.selectGender(data.employee.gender[1] as 'Male' | 'Female')
    await employeeDetailPage.saveDetails()
    await page.waitForLoadState('networkidle')
    await dashboardPage.goToPIM()
    await employeeListPage.searchEmployee(data.employee.firstName[1])

})
