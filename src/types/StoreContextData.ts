import { CartStorageProduct } from './CartStorageProduct';

export interface StoreContextData {
  cartContents: CartStorageProduct[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  changeCartProdQuantity: (id: string, delta: number) => void;
  favContents: string[];
  handleFavChange: (id: string) => void;
}
