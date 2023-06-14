import { CartProductData } from './CartProductData';
import { CatalogProductData } from './CatalogProductData';
import { FullProductData } from './FullProductData';

export interface StoreContextData {
  cartContents: CartProductData[];
  addToCartCatalog: (product: CatalogProductData) => void;
  addToCartProductPage: (product: FullProductData) => void;
}
