import {Page, Locator, expect} from '@playwright/test'

export class AdminPage {
    jobLocator: Locator;
    jobTitleLocator: Locator;

    constructor(public page: Page) {
        this.jobLocator = this.page.getByText('Job', { exact: true })
        this.jobTitleLocator = this.page.locator('ul.oxd-dropdown-menu li').first()

    }

    async goToJobTitle() {
        await this.jobLocator.click();
        await expect(this.page.locator('ul.oxd-dropdown-menu')).toBeVisible();
        await this.jobTitleLocator.click()
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
    }
}