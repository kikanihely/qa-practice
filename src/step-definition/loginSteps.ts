import { LoginPage } from "../pages/LoginPage";
import { page } from "../support/hooks";
import { Given, Then, When } from "@cucumber/cucumber";

let loginPage: LoginPage;

Given("I navigate to Eventhub Login page", async () => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
})

When('I enter email {string}', async (email:string) => {
    await loginPage.enterEmail(email)
})

When('I enter password {string}', async (password: string) => {
    await loginPage.enterPassword(password)
})

When('I click the Login button', async () => {
    await loginPage.performLogin()
})

Then('I should see the Dashboard Page', async () => {
    await loginPage.validateDashboardPage()
})