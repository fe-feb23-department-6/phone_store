import { useState, useContext, useMemo, useEffect, useCallback } from 'react';
import { Checkout } from '../components/Cart/Checkout/Checkout';
import { CartList } from '../components/Cart/Cartlist/CartList';
import { CartModal } from '../components/Cart/CartModal/CartModal';
import { Loader } from '../components/Loader';
import { StoreContext } from '../context/StoreContext';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProductsForCart } from '../api';
import './PagesStyles/Cart.scss';

export const Cart = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { cartContents } = useContext(StoreContext);

  const onCheckout = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  };

  const phoneIds = cartContents.map(({ id }) => id).join(',');

  const getCartContents = useCallback(async() => {
    try {
      const productsData = await getProductsForCart(phoneIds);

      setProducts(productsData);
    } catch (error) {
      throw new Error('Failed to load cart products from server');
    }
  }, []);

  useEffect(() => {
    getCartContents();
  }, []);

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

  return (
    <>
      {showModal ? (
        <CartModal />
      ) : (
        <div className="cart-wrapper">
          <h1 className="cart-text">Cart</h1>
          {products.length > 0 ? (
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
        </div>
      )}
    </>
  );
};
