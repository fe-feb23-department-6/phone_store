/* eslint-disable no-shadow */
import { FC, ReactNode, useState } from 'react';
import { StoreContext } from './StoreContext';
import { CartProductData } from '../types/CartProductData';
import { CatalogProductData } from '../types/CatalogProductData';
import { FullProductData } from '../types/FullProductData';

type Props = {
  children: ReactNode;
};

const storagedCart = localStorage.getItem('cartContents');
const savedCartContents = storagedCart ? JSON.parse(storagedCart) : [];

export const StoreContextProvider: FC<Props> = ({ children }) => {
  const [cartContents, setCartContents]
    = useState<CartProductData[]>(savedCartContents);

  const addToCartCatalog = (product: CatalogProductData) => {
    setCartContents((currentCart) => {
      const { itemId, name, image, price } = product;
      const newCartProduct = {
        id: itemId,
        name,
        image,
        price,
        quantity: 1,
      };

      return [...currentCart, newCartProduct];
    });
  };

  const addToCartProductPage = (product: FullProductData) => {
    setCartContents((currentCart) => {
      const { id, name, images, priceDiscount } = product;
      const newCartProduct = {
        id,
        name,
        image: images[0],
        price: priceDiscount,
        quantity: 1,
      };

      return [...currentCart, newCartProduct];
    });
  };

  const contextValue = {
    cartContents,
    addToCartCatalog,
    addToCartProductPage,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
