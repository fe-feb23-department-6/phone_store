/* eslint-disable no-console */
import { client } from '../utils/fetchClient';
import { Phones } from '../Types/Phones';

export const getProducts = async(url: string) => {
  const products = await client.getAllPhones<Phones[]>(url);

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};
