import { CatalogProductData } from './CatalogProductData';

export interface ProductsResponse {
  currentPage: number;
  totalPages: number;
  products: CatalogProductData[];
}
