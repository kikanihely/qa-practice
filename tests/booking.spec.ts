import { expect, request, test } from "@playwright/test";
import { getToken } from "../helpers/auth";

test.describe.serial("Bookings CRUD operations", () => {
    let eventId: number;

    test("Get a valid event ID to book", async ({ request }) => {
        const token = await getToken();
        const requestHeaders = {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const response = await request.get("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=1", { headers: requestHeaders })
        const responseData = await response.json()
        console.log(responseData);

        eventId = responseData.data[0].id; 
        expect(response.status()).toBe(200);
    })

    test("Create booking of event", async ({ request }) => {
        const token = await getToken()
        const requestHeaders = {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const requestData = {
            "eventId": eventId,
            "customerName": "Priya Sharma",
            "customerEmail": "priya.sharma@email.com",
            "customerPhone": "+91-9876543210",
            "quantity": 2
        }
        const response = await request.post("https://api.eventhub.rahulshettyacademy.com/api/bookings", { headers: requestHeaders, data: requestData })
        const responseData = await response.json()
        console.log(responseData);

        eventId = responseData.data.id;

        expect(response.status()).toBe(201)
        expect(responseData.success).toBeTruthy()
    })

    test("Get a single booking of event", async ({ request }) => {
        const token = await getToken()
        const requestHeaders = {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const response = await request.get(`https://api.eventhub.rahulshettyacademy.com/api/bookings/${eventId}`, { headers: requestHeaders })
        const responseData = await response.json();
        expect(response.status()).toBe(200);
        expect(responseData.success).toBeTruthy();
        console.log(responseData);
    })

    test("List all bookings", async ({ request }) => {
        const token = await getToken()
        const requestHeaders = {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const response = await request.get("https://api.eventhub.rahulshettyacademy.com/api/events?category=Conference&city=Hyderabad&search=summit&page=1&limit=10", { headers: requestHeaders })
        const responseData = await response.json();
        console.log(responseData);

        expect(responseData.success).toBeTruthy();
        expect(response.status()).toBe(200)
    })

    test("Delete specific booking", async({request}) => {
        const token = await getToken()
        const requestHeaders = {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const response = await request.delete(`https://api.eventhub.rahulshettyacademy.com/api/bookings/${eventId}`, {headers: requestHeaders})
        const responseData = await response.json()
        expect(response.status()).toBe(200)
        expect(responseData.success).toBeTruthy()
    })

})