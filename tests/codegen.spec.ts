import {test} from '@playwright/test'

test('codegen', async ({page}) => {     
    await page.goto('https://www.redbus.in/');
    await page.locator('div').filter({ hasText: /^From$/ }).nth(1).click();
    await page.getByRole('option', { name: 'Hyderabad' }).click();
    await page.getByRole('option', { name: 'Visakhapatnam' }).click();
    await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
    await page.getByRole('button', { name: 'Sunday, May 31,' }).click();
    await page.getByRole('button', { name: 'Search buses' }).click();
});