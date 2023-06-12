import { createContext } from 'react';
import { StoreContextData } from '../types/StoreContextData';

export const StoreContext = createContext<StoreContextData>({
  cartContents: [],
  // eslint-disable-next-line
  setCartContents: () => {},
});
