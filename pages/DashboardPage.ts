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
        this.timeAtWorkLocator = this.page.locator(".oxd-sheet").nth(0);
        this.myActionsLocator = this.page.locator(".oxd-sheet").nth(1);
        this.quickLaunchLocator = this.page.locator(".oxd-sheet").nth(2);
        this.buzzLatestPostsLocator = this.page.locator(".oxd-sheet").nth(3);
        this.empOnLeaveLocator = this.page.locator(".oxd-sheet").nth(4);
        this.empDistrBySubLocator = this.page.locator(".oxd-sheet").nth(5);
        this.empDistrByLocLocator = this.page.locator(".oxd-sheet").last();
        this.pimLocator = this.page.getByRole("link", {name: "PIM"});
        this.assignLeaveLocator = this.page.getByRole('button', { name: 'Assign Leave' });
    }

    async gotoDashboard() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

    async verifyDashboardPageElements() {
        await expect(this.timeAtWorkLocator).toBeVisible();
        await expect(this.myActionsLocator).toBeVisible();
        await expect(this.quickLaunchLocator).toBeVisible();
        await expect(this.buzzLatestPostsLocator).toBeVisible();
        await expect(this.empOnLeaveLocator).toBeVisible();
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