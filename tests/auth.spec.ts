import { test, expect, request } from '@playwright/test';

test('User creation with valid credentials', async ({ request }) => {
    const requestData = {
        "email": "hely@demo.com",
        "password": "hely@123"
    }
    const requestHeaders = {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
    const response = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/register", { headers: requestHeaders, data: requestData })
    const responseData = await response.json()
    expect(response.status()).toBe(201);
    expect(responseData).toHaveProperty('success')
    expect(responseData).toHaveProperty('token')
    expect(responseData).toHaveProperty('user')
    expect(responseData.success).toBeTruthy()
    expect(responseData.token).not.toBeNull()
    console.log(responseData);
});

test("User login with valid credentials", async ({ request }) => {
    const requestData = {
        "email": "hely@simform.com",
        "password": "hely@123"
    }
    const requestHeaders = {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
    const response = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", { headers: requestHeaders, data: requestData })
    const responseData = await response.json();

    console.log(responseData.token);
    
})