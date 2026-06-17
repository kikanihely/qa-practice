import {expect, Locator, Page} from '@playwright/test'

export class LoginPage {

    emailLocator: Locator;
    passwordLocator: Locator;
    loginBtnLocator: Locator;

    constructor (public page:Page) {
        this.emailLocator = this.page.locator("#email")
        this.passwordLocator = this.page.locator("#password")
        this.loginBtnLocator = this.page.locator("#login-btn")
    }

    async goToLoginPage () {
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login")
    }

    async enterEmail (email: string){
        await this.emailLocator.fill(email)
    }

    async enterPassword (password: string) {
        await this.passwordLocator.fill(password)
    }

    async performLogin() {
        await this.loginBtnLocator.click()
    }

    async validateDashboardPage() {
        await expect(this.page).toHaveURL("https://eventhub.rahulshettyacademy.com/")
    }

}