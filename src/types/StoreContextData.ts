import { CartStorageProduct } from './CartStorageProduct.js';

export interface StoreContextData {
  cartContents: CartStorageProduct[];
  addToCart: (id: string) => void;
  changeCartProdQuantity: (id: string, delta: number) => void;
  removeCartProduct: (id: string) => void;
  cleanCartContents: () => void;
  favContents: string[];
  handleFavChange: (id: string) => void;
}
