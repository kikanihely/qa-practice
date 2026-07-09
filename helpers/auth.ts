import { request } from '@playwright/test';

let cachedToken: string | null = null;

export async function getToken(): Promise<any> {
  if (cachedToken) return cachedToken;

  const context = await request.newContext();
  const response = await context.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', {
    headers: { accept: "application/json", "Content-Type": "application/json" },
    data: { email: "hely@simform.com", password: "hely@123" }
  });
  const responseData = await response.json();
  cachedToken = responseData.token;
  await context.dispose();

  return cachedToken;
}