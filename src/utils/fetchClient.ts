/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://backend-phone-store.onrender.com/';

async function request<T>(searchParams: string, method = 'GET'): Promise<T> {
  const options: RequestInit = { method };

  try {
    const response = await fetch(BASE_URL + searchParams, options);

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error('An error occurred: ' + String(error));
  }
}

export const client = {
  getProductsFromServer: <T>(url: string) => request<T>(url),
};
