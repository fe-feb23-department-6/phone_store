import { PhoneCard } from './PhoneCard';

export interface StoreContextData {
  cartContents: PhoneCard[];
  setCartContents: React.Dispatch<React.SetStateAction<PhoneCard[]>>;
}
