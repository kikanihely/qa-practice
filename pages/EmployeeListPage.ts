import {expect} from "@playwright/test";
import {Locator, Page} from "@playwright/test";

export class EmployeeListPage {
    addEmpBtnLocator: Locator
    empListLocator: Locator
    empNameLocator: Locator
    searchBtnLocator: Locator

    constructor(public page: Page) {
        this.addEmpBtnLocator = this.page.locator(".oxd-button").nth(2);
        this.empListLocator = this.page.getByText("Employee List")
        this.empNameLocator = this.page.getByPlaceholder("Type for hints...").first()
        this.searchBtnLocator = this.page.locator(".oxd-button").first()
    }

    async clickAddEmployee() {
        await this.addEmpBtnLocator.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
    }

    async searchEmployee(name: string) {
        await this.empListLocator.click()
        await this.empNameLocator.fill(name)
        await this.searchBtnLocator.click()
        await expect(this.page.getByText("No Records Found")).not.toBeVisible()
    }
}