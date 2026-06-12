import {Page,Locator, expect} from '@playwright/test'

export class JobListPage {
    
    addBtnLocator: Locator

    constructor(public page: Page) {
        this.addBtnLocator = this.page.getByRole('button', { name: 'Add' })
    }

    async goToAddJob ()
    {
        await this.addBtnLocator.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
    }

    async verifyJob(name:string)
    {
        await expect(this.page.getByText(name, { exact: true })).toBeVisible()
    }
}