import {test, expect} from '@playwright/test'
import { getToken } from '../helpers/auth'


test("Get profile", async ({request}) => {
    const token = await getToken()
    const requestHeaders = {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
    }
    const response = await request.get("https://api.eventhub.rahulshettyacademy.com/api/auth/me", {headers: requestHeaders })

    const responseData = await response.json()
    expect(response.status()).toBe(200)
    expect(responseData.success).toBeTruthy()
}) 