import { FC, ReactNode, useState } from 'react';
import { StoreContext } from './StoreContext';
import { PhoneCard } from '../types/PhoneCard';

type Props = {
  children: ReactNode;
};

export const StoreContextProvider: FC<Props> = ({ children }) => {
  const [cartContents, setCartContents] = useState<PhoneCard[]>([]);

  const contextValue = {
    cartContents,
    setCartContents,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
