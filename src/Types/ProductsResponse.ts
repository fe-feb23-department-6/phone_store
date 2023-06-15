import { CatalogProductData } from './CatalogProductData';

export interface ProductsResponse {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  products: CatalogProductData[];
}
