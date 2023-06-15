import { client } from '../utils/fetchClient';
import { ProductsResponse } from '../types/ProductsResponse';
import { CatalogProductData } from '../types/CatalogProductData';

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

export const getNewProducts = async() => {
  const products = await client.getAllPhones<CatalogProductData[]>(
    'products/new',
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getDiscountProducts = async() => {
  const products = await client.getAllPhones<CatalogProductData[]>(
    'products/discount',
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};
