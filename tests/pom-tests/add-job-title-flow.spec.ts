import {test} from '@playwright/test'
import { DashboardPage } from '../../pages/DashboardPage'
import { AdminPage } from '../../pages/AdminPage';
import { JobListPage } from '../../pages/JobListPage';
import { AddJobTitlePage } from '../../pages/AddJobTitlePage';
import data from '../../test-data/jobData.json'

test("Ass Job Title", async({page}) => {
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page)
    const jobListPage = new JobListPage(page)
    const addJobTitlePage = new AddJobTitlePage(page)
    await dashboardPage.gotoDashboard();
    await dashboardPage.goToAdminPage();
    await adminPage.goToJobTitle();
    await jobListPage.goToAddJob();
    await addJobTitlePage.fillJobDetails(data.job[2].title,data.job[2].description,data.job[2].note);
    await addJobTitlePage.saveDetails();
    await jobListPage.verifyJob(data.job[2].title);
})