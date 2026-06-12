import {test} from '@playwright/test'
import { DashboardPage } from '../../pages/DashboardPage'
import { AssignLeavePage } from '../../pages/AssignLeavePage';
import data from '../../test-data/addEmployeeData.json'

test('Assign Leave Flow', async ({page}) => {
    
    const dashboardPage = new DashboardPage(page);
    const assignLeavePage = new AssignLeavePage(page);
    await dashboardPage.gotoDashboard()
    await dashboardPage.goToAssignLeavePage();
    await assignLeavePage.fillName(data.employee.firstName[1])
    await assignLeavePage.fillLeaveType("CAN - Bereavement")
    await assignLeavePage.fillDate("2026-10-06","2026-22-06")
    await assignLeavePage.fillComments("Sick Leave")
    await assignLeavePage.assignLeave()

})