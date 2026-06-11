import { expect, test } from '@playwright/test'
import { Page, Locator } from '@playwright/test'

export class AssignLeavePage {

    empNameLocator: Locator;
    leaveTypeLocator: Locator;
    fromDateLocator: Locator;
    toDateLocator: Locator;
    commentsLocator: Locator;
    asignBtnLocator: Locator;
    confirmBtnLocator: Locator;
    successMsgLocator: Locator;

    constructor(public page: Page) {
        this.empNameLocator = this.page.getByPlaceholder("Type for hints...")
        this.leaveTypeLocator = this.page.getByText("-- Select --")
        this.fromDateLocator = this.page.getByPlaceholder("yyyy-dd-mm").first()
        this.toDateLocator = this.page.getByPlaceholder("yyyy-dd-mm").nth(1)
        this.commentsLocator = this.page.locator(".oxd-textarea")
        this.asignBtnLocator = this.page.getByRole("button", {name: "Assign", exact:true})
        this.confirmBtnLocator = this.page.getByRole("button", {name: "Ok", exact: true})
        this.successMsgLocator = this.page.locator("#oxd-toaster_1")
    }

    async fillName(name: string)
    {
        await this.empNameLocator.fill(name)
        await this.page.getByRole('option', {name:name, exact: true}).click()
    }

    async fillLeaveType(leaveType: string)
    {
        await this.leaveTypeLocator.click()
        await this.page.getByText(leaveType).click();
    }

    async fillDate(fromDate: string, toDate: string)
    {
        await this.fromDateLocator.fill(fromDate)
        await this.toDateLocator.clear()
        await this.toDateLocator.fill(toDate)
    }

    async fillComments(comments: string)
    {
        await this.commentsLocator.fill(comments)
    }

    async assignLeave()
    {
        await this.asignBtnLocator.click()
        const confirmVisible = await this.confirmBtnLocator
        .isVisible({ timeout: 30000 })
        .catch(() => false)

    if (confirmVisible) {
        await this.confirmBtnLocator.click()
    }

    await expect(this.successMsgLocator).toBeVisible({ timeout: 10000 })
    }


}
