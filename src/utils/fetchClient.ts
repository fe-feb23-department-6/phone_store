/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://backend-phone-store.onrender.com/';

async function request<T>(searchParams: string, method = 'GET'): Promise<T> {
  const options: RequestInit = { method };

  try {
    const response = await fetch(BASE_URL + searchParams, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      ...options,
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw error;
  }
}

export const client = {
  getAllPhones: <T>(url: string) => request<T>(url),
};
