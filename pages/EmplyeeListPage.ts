import {test, expect} from "@playwright/test";
import {Locator, Page} from "@playwright/test";

export class EmployeeListPage {
    addEmpBtnLocator: Locator

    constructor(public page: Page) {
        this.addEmpBtnLocator = this.page.locator(".oxd-button").nth(2);
    }

    async clickAddEmployee() {
        await this.addEmpBtnLocator.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
    }
}