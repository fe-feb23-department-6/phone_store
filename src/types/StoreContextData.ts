import { CartProductData } from './CartProductData';

export interface StoreContextData {
  cartContents: CartProductData[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  favContents: string[];
  handleFavChange: (id: string) => void;
}
