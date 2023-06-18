import { client } from '../utils/fetchClient';
import { ProductsResponse } from '../types/ProductsResponse';
import { CatalogProductData } from '../types/CatalogProductData';
import { FullProductData } from '../types/FullProductData';

// search params should be useLocation().search
export const getProducts = async(category: string, searchParams: string) => {
  const products = await client.getProductsFromServer<ProductsResponse>(
    `products/${category}${searchParams}`,
  );

  products.products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getProductsForSlider = async(endPoint: string) => {
  const products = await client.getProductsFromServer<CatalogProductData[]>(
    `products/${endPoint}`,
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getProductsForCart = async(phoneIds: string) => {
  const products = await client.getProductsFromServer<CatalogProductData[]>(
    `cart?phoneIds=${phoneIds}`,
  );

  products.map((item) => {
    item.image = `https://backend-phone-store.onrender.com/${item.image}`;
  });

  return products;
};

export const getProductById = async(id: string) => {
  const product = await client.getProductsFromServer<FullProductData>(
    `products/${id}`,
  );

  product.images.map(
    (image) => `https://backend-phone-store.onrender.com/${image}`,
  );

  return product;
};

export const getProductsByNamespace = async(namespace: string) => {
  const products = await client.getProductsFromServer<FullProductData[]>(
    `products/${namespace}`,
  );

  products.map((item) => {
    item.images.map(
      (image) => `https://backend-phone-store.onrender.com/${image}`,
    );
  });

  return products;
};
