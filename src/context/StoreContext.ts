/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { StoreContextData } from '../types/StoreContextData';

export const StoreContext = createContext<StoreContextData>({
  cartContents: [],
  addToCartCatalog: () => {},
  addToCartProductPage: () => {},
});
