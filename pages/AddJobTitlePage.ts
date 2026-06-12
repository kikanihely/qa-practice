import {Page, Locator, expect} from '@playwright/test'

export class AddJobTitlePage {
    jobTitleLocator: Locator;
    jobDescriptionLocator: Locator;
    jobNoteLocator: Locator;
    saveBtnLocator: Locator;
    successLocator: Locator;

    constructor (public page: Page) {
        this.jobTitleLocator = this.page.locator('.oxd-input.oxd-input--active').nth(1)
        this.jobDescriptionLocator = this.page.getByPlaceholder('Type description here')
        this.jobNoteLocator = this.page.getByPlaceholder('Add note')
        this.saveBtnLocator = this.page.getByText('Save', { exact: true })
        this.successLocator = this.page.locator(`#oxd-toaster_1`)
    }

    async fillJobDetails (title: string, desc: string, note: string) {
        await this.jobTitleLocator.fill(title);
        await this.jobDescriptionLocator.fill(desc)
        await this.jobNoteLocator.fill(note)
    }
    async saveDetails () {
        await this.saveBtnLocator.click()
        await expect(this.successLocator).toBeVisible()
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
    }
}