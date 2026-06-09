import {Page, Locator} from '@playwright/test'

export class EmployeeDetailPage {
    driverLicenseLocator: Locator
    licenseDateLocator: Locator
    nationalityLocator: Locator
    maritalStatusIconLocator: Locator
    maritalStatusLocator: Locator
    saveLocator: Locator

    constructor(public page:Page)
    {
        this.driverLicenseLocator = this.page.locator('div:nth-child(3) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.licenseDateLocator = this.page.getByPlaceholder('yyyy-dd-mm').first()
        this.nationalityLocator = this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first()
        this.maritalStatusIconLocator = this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        this.maritalStatusLocator = this.page.getByRole('option', { name: 'Married' })
        this.saveLocator = this.page.getByRole('button', { name: 'Save' })
    }

    async fillDriverLicense (licenseNumber:string)
    {
        await this.driverLicenseLocator.fill(licenseNumber);
    }

    async fillExpiryDate(date: string)
    {
        await this.licenseDateLocator.fill(date)
    }

    async selectNationality(nationality: string)
    {
        await this.nationalityLocator.click();
        await this.page.getByRole('option', { name: nationality }).click()
    }

    async selectMaritalStatus(maritalStatus: string)
    {
        await this.maritalStatusIconLocator.click()
        await this.page.getByRole('option', { name: maritalStatus }).click()
    }

    async selectGender(gender: 'Male' | 'Female'){
        if(gender === 'Male')
        {
           await this.page.locator('label').filter({ hasText: 'Male' }).click()
        }
        else
        {
            await this.page.locator('label').filter({ hasText: 'Female' }).click()
        }
    }
}