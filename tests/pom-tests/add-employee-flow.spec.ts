import {test} from '@playwright/test';
import {DashboardPage} from '../../pages/DashboardPage';
import { EmployeeListPage } from '../../pages/EmployeeListPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeDetailPage } from '../../pages/EmployeeDetailPage';
import data from '../../test-data/addEmployeeData.json'

test("Add Employee Flow", async ({page}) => {
    const dashboardPage = new DashboardPage(page);
    const employeeListPage = new EmployeeListPage(page);
    const employeeAddPage = new AddEmployeePage(page);
    const employeeDetailPage = new EmployeeDetailPage(page);
    await dashboardPage.gotoDashboard()
    await dashboardPage.goToPIM();
    await employeeListPage.clickAddEmployee();
    await employeeAddPage.fillEmployeeDetails(data.employee.firstName[3], data.employee.middleName[4], data.employee.lastName[4], data.employee.employeeId[4]);
    await employeeAddPage.fillLoginDetails(data.employee.username[4], data.employee.password[4]);
    await employeeDetailPage.fillDriverLicense(data.employee.driverLicenseNumber[4])
    await employeeDetailPage.fillExpiryDate(data.employee.licenseExpiryDate[4])
    await employeeDetailPage.selectNationality(data.employee.nationality[4])
    await employeeDetailPage.selectMaritalStatus(data.employee.maritalStatus[4])
    await employeeDetailPage.selectGender(data.employee.gender[4] as 'Male' | 'Female')
    await employeeDetailPage.saveDetails()
    await page.waitForLoadState('networkidle')
    await dashboardPage.goToPIM()
    await employeeListPage.searchEmployee(data.employee.firstName[4])

})
