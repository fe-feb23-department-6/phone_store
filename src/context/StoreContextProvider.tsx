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

  const removeFromCart = (id: string) => {
    setCartContents((currentContents) => {
      const newContents = currentContents.filter(
        ({ id: prodId }) => prodId !== id,
      );

      localStorage.setItem('cartContents', JSON.stringify(newContents));

      return newContents;
    });
  };

  const changeCartProdQuantity = (id: string, delta: number) => {
    setCartContents((currentContents) => {
      // eslint-disable-next-line no-console
      console.log(id, delta);

      const newContents = currentContents.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + delta }
          : product);

      localStorage.setItem('cartContents', JSON.stringify(newContents));

      // eslint-disable-next-line no-console
      console.log(newContents);

      return newContents;
    });
  };

  const handleFavChange = (id: string) => {
    setFavContents((currentContents) => {
      if (favContents.includes(id)) {
        const contents = currentContents.filter((prodId) => prodId !== id);

        localStorage.setItem('cartContents', JSON.stringify(contents));

        return contents;
      }

      const newContents = [...currentContents, id];

      localStorage.setItem('favoritesContents', JSON.stringify(newContents));

      return newContents;
    });
  };

  const contextValue = {
    cartContents,
    addToCart,
    removeFromCart,
    changeCartProdQuantity,
    favContents,
    handleFavChange,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
