import { client } from '../utils/fetchClient';
import { Products } from '../types/Products';

// search params should be useLocation().search
export const getProducts = async(searchParams: string) => {
  const products = await client.getAllPhones<Products>(
    `products${searchParams}`,
  );

  products.products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};
