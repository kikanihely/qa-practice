import {test, expect} from "@playwright/test";
import {Locator, Page} from "@playwright/test";

export class AddEmployeePage {
    firstNameLocator: Locator;
    middleNameLocator: Locator;
    lastNameLocator: Locator;
    createLoginDetailsLocator: Locator;
    usernameLocator: Locator;
    passwordLocator: Locator;
    confirmPasswordLocator: Locator;
    saveBtnLocator: Locator;

    constructor(public page: Page) {
        this.firstNameLocator = this.page.getByPlaceholder("First Name");
        this.middleNameLocator = this.page.getByPlaceholder("Middle Name");
        this.lastNameLocator = this.page.getByPlaceholder("Last Name");
        this.createLoginDetailsLocator = this.page.locator(".oxd-switch-input");
        this.usernameLocator = this.page.getByRole('textbox').nth(5)
        this.passwordLocator = this.page.locator('input[type="password"]').first()
        this.confirmPasswordLocator = this.page.locator('input[type="password"]').nth(1)
        this.saveBtnLocator = this.page.locator(".oxd-button").last()
    }

    async fillEmployeeDetails(firstName: string, middleName: string, lastName: string) {
        await this.firstNameLocator.fill(firstName);
        await this.middleNameLocator.fill(middleName);
        await this.lastNameLocator.fill(lastName);    
    }

    async fillLoginDetails(username: string, password: string) {
        await this.createLoginDetailsLocator.click();
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.confirmPasswordLocator.fill(password);
        await this.saveBtnLocator.click();
    }
}