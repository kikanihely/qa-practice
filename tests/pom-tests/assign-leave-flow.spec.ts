import {test} from '@playwright/test'
import { DashboardPage } from '../../pages/DashboardPage'
import { AssignLeavePage } from '../../pages/AssignLeavePage';
import data from '../../test-data/addEmployeeData.json'

test('Assign Leave Flow', async ({page}) => {
    
    const dashboardPage = new DashboardPage(page);
    const assignLeavePage = new AssignLeavePage(page);
    await dashboardPage.gotoDashboard()
    await dashboardPage.goToAssignLeavePage();
    await assignLeavePage.fillName(data.employee.firstName[0]+ ' ' +data.employee.lastName[0])
    await assignLeavePage.fillLeaveType("CAN - Bereavement")
    await assignLeavePage.fillDate("0016-11-06","1016-11-06")
    await assignLeavePage.fillComments("Sick Leave")
    await assignLeavePage.assignLeave()

})