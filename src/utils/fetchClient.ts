import { logInReq, signUpReq } from '../types/authTypes';

/* eslint-disable @typescript-eslint/no-explicit-any */

const BASE_URL = 'https://backend-phone-store.onrender.com/';

async function request<T>(
  searchParams: string,
  method = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    credentials: 'include',
  };

  if (data) {
    options.body = JSON.stringify(data);

    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  try {
    const response = await fetch(BASE_URL + searchParams, options);

    if (response.status === 204) {
      return {} as T;
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error('An error occurred:' + String(error));
  }
}

export const client = {
  getProductsFromServer: <T>(url: string) => request<T>(url),
  signUp: <T>(url: string, data: signUpReq) => request<T>(url, 'POST', data),
  logIn: <T>(url: string, data: logInReq) => request<T>(url, 'POST', data),
  logOut: <T>(url: string) => request<T>(url, 'POST'),
  activate: <T>(url: string) => request<T>(url),
};
