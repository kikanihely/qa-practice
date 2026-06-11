import {test, expect} from "@playwright/test";
import {Locator, Page} from "@playwright/test";

export class DashboardPage {
    pimLocator: Locator;
    assignLeaveLocator: Locator;

    constructor(public page: Page) {
        this.pimLocator = this.page.getByRole("link", {name: "PIM"});
        this.assignLeaveLocator = this.page.getByRole('button', { name: 'Assign Leave' });
    }

    async gotoDashboard() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
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