import {Locator, Page} from "@playwright/test";

export class LoginPage {
    usernameLocator: Locator;
    passwordLocator: Locator;
    loginBtnLocator: Locator;
    

    constructor(public page: Page) {
        this.usernameLocator = this.page.getByPlaceholder("Username");
        this.passwordLocator = this.page.getByPlaceholder("Password");
        this.loginBtnLocator = this.page.locator(".orangehrm-login-button");
    }

    async navigateToHomePage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(userName: string, password: string) {
        await this.usernameLocator.fill(userName);
        await this.passwordLocator.fill(password);
        await this.loginBtnLocator.click();
    }
}