import { test, expect } from '@playwright/test'
import { getToken } from '../helpers/auth'
import { eventTestData } from '../data/events-data'

for (const dataset of eventTestData) {
    test.describe.serial(`Events CRUD flow - ${dataset.testName}`, () => {
        let eventId: number;

        test(`Create an event - ${dataset.testName}`, async ({ request }) => {
            const token = await getToken();
            const requestHeaders = {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await request.post("https://api.eventhub.rahulshettyacademy.com/api/events", {
                headers: requestHeaders,
                data: dataset.createPayload
            })

            const responseData = await response.json()
            eventId = responseData.data.id;
            console.log(eventId);

            expect(response.status()).toBe(201)
            expect(responseData).toHaveProperty('message', 'Event created successfully')
        })

        test(`Get a single event - ${dataset.testName}`, async ({ request }) => {
            const token = await getToken();
            const requestHeaders = {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await request.get(`https://api.eventhub.rahulshettyacademy.com/api/events/${eventId}`, { headers: requestHeaders })
            const responseData = await response.json()
            expect(response.status()).toBe(200)
            expect(responseData).toHaveProperty("success", true)
        })

        test(`List all events - ${dataset.testName}`, async ({ request }) => {
            const token = await getToken()
            const requestHeaders = {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await request.get(
                `https://api.eventhub.rahulshettyacademy.com/api/events?category=${dataset.createPayload.category}&city=${dataset.createPayload.city}`,
                { headers: requestHeaders }
            )
            const responseData = await response.json()
            expect(response.status()).toBe(200)
            expect(responseData).toHaveProperty("success", true)
        })

        test(`Update an event - ${dataset.testName}`, async ({ request }) => {
            const token = await getToken()
            const requestHeaders = {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await request.put(`https://api.eventhub.rahulshettyacademy.com/api/events/${eventId}`, {
                headers: requestHeaders,
                data: { id: eventId, ...dataset.updatePayload }
            })
            const responseData = await response.json()
            expect(response.status()).toBe(200)
            expect(responseData.success).toBe(true)
        })

        test(`Delete an event - ${dataset.testName}`, async ({ request }) => {
            const token = await getToken()
            const requestHeaders = {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const response = await request.delete(`https://api.eventhub.rahulshettyacademy.com/api/events/${eventId}`, { headers: requestHeaders })
            const responseData = await response.json()
            expect(response.status()).toBe(200)
            expect(responseData.success).toBeTruthy()
            expect(responseData.message).toBe("Event deleted successfully")
        })
    })
}