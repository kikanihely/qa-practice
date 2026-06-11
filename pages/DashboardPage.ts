import {test, expect} from "@playwright/test";
import {Locator, Page} from "@playwright/test";

export class DashboardPage {
    timeAtWorkLocator: Locator;
    myActionsLocator: Locator;
    quickLaunchLocator: Locator;
    buzzLatestPostsLocator: Locator;
    empOnLeaveLocator: Locator;
    empDistrBySubLocator: Locator;
    empDistrByLocLocator: Locator;
    pimLocator: Locator;
    assignLeaveLocator: Locator;

    constructor(public page: Page) {
        this.timeAtWorkLocator      = this.page.getByText('Time at Work', { exact: true })
    this.myActionsLocator       = this.page.getByText('My Actions', { exact: true })
    this.quickLaunchLocator     = this.page.getByText('Quick Launch', { exact: true })
    this.buzzLatestPostsLocator = this.page.getByText('Buzz Latest Posts', { exact: true })
    this.empOnLeaveLocator      = this.page.getByText('Employees on Leave Today', { exact: true })
        this.empDistrBySubLocator = this.page.locator(".oxd-sheet").nth(5);
        this.empDistrByLocLocator = this.page.locator(".oxd-sheet").last();
        this.pimLocator = this.page.getByRole("link", {name: "PIM"});
        this.assignLeaveLocator = this.page.getByRole('button', { name: 'Assign Leave' });
    }

    async gotoDashboard() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

    async verifyDashboardPageElements() {
        await expect(this.timeAtWorkLocator).toBeVisible({ timeout: 10000 })
    await expect(this.myActionsLocator).toBeVisible({ timeout: 10000 })
    await expect(this.quickLaunchLocator).toBeVisible({ timeout: 10000 })
    await expect(this.buzzLatestPostsLocator).toBeVisible({ timeout: 10000 })
    await expect(this.empOnLeaveLocator).toBeVisible({ timeout: 10000 })
        await expect(this.empDistrBySubLocator).toBeVisible();
        await expect(this.empDistrByLocLocator).toBeVisible();
    }

    async goToPIM() {
        await this.pimLocator.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    }

    async goToAssignLeavePage () {
        await this.assignLeaveLocator.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave")
    }

}