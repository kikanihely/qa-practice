import {test} from '@playwright/test'
import { DashboardPage } from '../../pages/DashboardPage'
import { AssignLeavePage } from '../../pages/AssignLeavePage';
import data from '../../test-data/addEmployeeData.json'

test('Assign Leave Flow', async ({page}) => {
    
    const dashboardPage = new DashboardPage(page);
    const assignLeavePage = new AssignLeavePage(page);
    await dashboardPage.gotoDashboard()
    await dashboardPage.verifyDashboardPageElements();
    await dashboardPage.goToAssignLeavePage();
    await assignLeavePage.fillName(data.employee.firstName[2]+ ' ' +data.employee.lastName[2])
    await assignLeavePage.fillLeaveType("CAN - Bereavement")
    await assignLeavePage.fillDate("06-2026-14","06-2026-22")
    await assignLeavePage.fillComments("Sick Leave")
    await assignLeavePage.assignLeave()

})