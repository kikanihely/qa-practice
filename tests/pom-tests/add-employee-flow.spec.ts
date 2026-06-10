import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import { EmployeeListPage } from '../../pages/EmplyeeListPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeDetailPage } from '../../pages/EmployeeDetailPage';
import data from '../../test-data/addEmployeeData.json'


test("Add Employee Flow", async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const employeeListPage = new EmployeeListPage(page);
    const employeeAddPage = new AddEmployeePage(page);
    const employeeDetailPage = new EmployeeDetailPage(page);
    await loginPage.navigateToHomePage();
    await loginPage.login(data.admin.username, data.admin.password);
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails(data.employee.firstName[0], data.employee.middleName[0], data.employee.lastName[0], data.employee.employeeId[0]);
    await employeeAddPage.fillLoginDetails(data.employee.username[0], data.employee.password[0]);
    // await employeeAddPage.validatePage();
    await employeeDetailPage.fillDriverLicense(data.employee.driverLicenseNumber[0])
    await employeeDetailPage.fillExpiryDate(data.employee.licenseExpiryDate[0])
    await employeeDetailPage.selectNationality(data.employee.nationality[0])
    await employeeDetailPage.selectMaritalStatus(data.employee.maritalStatus[0])
    await employeeDetailPage.selectGender(data.employee.gender[0] as 'Male' | 'Female')
    await employeeListPage.searchEmployee("demoo")

})
