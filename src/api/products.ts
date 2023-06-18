import { client } from '../utils/fetchClient';
import { ProductsResponse } from '../types/ProductsResponse';
import { CatalogProductData } from '../types/CatalogProductData';

// search params should be useLocation().search
export const getProducts = async(category: string, searchParams: string) => {
  const products = await client.getAllPhones<ProductsResponse>(
    `products/${category}${searchParams}`,
  );

  products.products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getProductsForSlider = async(endPoint: string) => {
  const products = await client.getAllPhones<CatalogProductData[]>(
    `products/${endPoint}`,
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getProductsForCart = async(endPoint: string) => {
  const products = await client.getAllPhones<CatalogProductData[]>(
    `products/${endPoint}`,
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};
