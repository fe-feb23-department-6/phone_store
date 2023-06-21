import { useState, useContext, useMemo, useEffect, useCallback } from 'react';
import { CartList } from '../components/Cart/Cartlist';
import { Checkout } from '../components/Cart/Checkout';
import { CartModal } from '../components/Cart/CartModal';
import { Loader } from '../components/Loader';
import { GoBackButton } from '../components/GoBackButton';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { StoreContext } from '../context/StoreContext';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProductsForCart } from '../api';
import './PagesStyles/Cart.scss';

export const Cart = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cartContents, cleanCartContents } = useContext(StoreContext);

  const isNotEmptyCart = cartContents.length > 0;
  const phoneIds = cartContents.map(({ id }) => id).join(',');

  const [totalPrice, totalItems] = useMemo(
    () =>
      cartContents.reduce(
        (acc, { id, quantity }) => {
          const price = products.find((prod) => prod.itemId === id)?.price || 0;

          return [acc[0] + price * quantity, acc[1] + quantity];
        },
        [0, 0],
      ),
    [products, cartContents],
  );

  const onCheckout = () => {
    setIsSuccess(true);
    cleanCartContents();
  };

  const getCartContents = useCallback(async() => {
    try {
      setIsLoading(true);

      const productsData = await getProductsForCart(phoneIds);

      setProducts(productsData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Failed to load cart products from server');
    }
  }, []);

  const closeModal = () => {
    setIsSuccess(false);
  };

  useEffect(() => {
    if (isNotEmptyCart) {
      getCartContents();
    }
  }, []);

  return (
    <>
      <div className="cart-wrapper">
        <Breadcrumbs page="Cart"/>

        <GoBackButton />

        <h1 className="cart-title">Cart</h1>
        {isNotEmptyCart ? (
          <>
            {!isLoading ? (
              <div className="cart">
                <CartList products={products} />
                <Checkout
                  totalPrice={totalPrice}
                  totalItems={totalItems}
                  onCheckout={onCheckout}
                />
              </div>
            ) : (
              <Loader />
            )}
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
      {isSuccess && <CartModal onClick={closeModal} />}
    </>
  );
};
