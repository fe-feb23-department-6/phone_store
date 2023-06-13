import { client } from '../utils/fetchClient';
import { Phones } from '../types/Phones';

// search params is equal to useLocation().search
export const getProducts = async(searchParams: string) => {
  const products = await client.getAllPhones<Phones[]>(
    `products${searchParams}`,
  );

  //   products.map((item) => {
  //     item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  //   });

  return products;
};
