import test, { expect } from "@playwright/test";

test.describe("Built-in locators", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.redbus.in/');
    })

    test.describe("Get By role", () => {

        test('Locate by role - Link', async ({page}) => {
            await page.getByRole('link', {name: 'Hotels', exact: true}).click();
            expect(page.url()).toBe('https://www.redbus.in/hotels');
        })

        test("Locate by role - Image", async ({page}) => {
            await page.getByRole('img', {name:'Online Hotel Booking',exact: true}).isVisible();
        })

        test("Locate by role - headings", async ({page}) => {
            await expect(page.getByRole('heading', { name: "India's No. 1 online bus ticket booking site", exact: true })).toBeVisible();
        })
    })
})

