import { client } from '../utils/fetchClient';
import { ProductsResponse } from '../types/ProductsResponse';

// search params should be useLocation().search
export const getProducts = async(searchParams: string) => {
  const products = await client.getAllPhones<ProductsResponse>(
    `products${searchParams}`,
  );

  products.products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};
