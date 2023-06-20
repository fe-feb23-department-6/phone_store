import { FC, ReactNode, useState } from 'react';
import { StoreContext } from './StoreContext';
import { CartStorageProduct } from '../types/CartStorageProduct';

type Props = {
  children: ReactNode;
};

const storagedCart = localStorage.getItem('cartContents');
const savedCartContents = storagedCart ? JSON.parse(storagedCart) : [];

const storagedFavorites = localStorage.getItem('favoritesContents');
const savedFavContents = storagedFavorites ? JSON.parse(storagedFavorites) : [];

export const StoreContextProvider: FC<Props> = ({ children }) => {
  const [cartContents, setCartContents]
    = useState<CartStorageProduct[]>(savedCartContents);
  const [favContents, setFavContents] = useState<string[]>(savedFavContents);

  const addToCart = (id: string) => {
    setCartContents((currentContents) => {
      const newContents = [...currentContents, { id, quantity: 1 }];

      localStorage.setItem('cartContents', JSON.stringify(newContents));

      return newContents;
    });
  };

  const changeCartProdQuantity = (id: string, delta: number) => {
    setCartContents((currentContents) => {
      const newContents = currentContents.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + delta }
          : product);

      localStorage.setItem('cartContents', JSON.stringify(newContents));

      return newContents;
    });
  };

  const removeCartProduct = (id: string) => {
    setCartContents((currentContents) => {
      const newContents = currentContents.filter(
        ({ id: prodId }) => prodId !== id,
      );

      localStorage.setItem('cartContents', JSON.stringify(newContents));

      return newContents;
    });
  };

  const cleanCartContents = () => {
    setCartContents([]);
    localStorage.removeItem('cartContents');
  };

  const handleFavChange = (id: string) => {
    setFavContents((currentContents) => {
      if (currentContents.includes(id)) {
        const newContents = currentContents.filter((prodId) => prodId !== id);

        localStorage.setItem('favoritesContents', JSON.stringify(newContents));

        return newContents;
      }

      return [...currentContents, id];
    });
  };

  const contextValue = {
    cartContents,
    addToCart,
    changeCartProdQuantity,
    removeCartProduct,
    cleanCartContents,
    favContents,
    handleFavChange,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
