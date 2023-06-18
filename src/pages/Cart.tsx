import { useState } from 'react';
import './PagesStyles/Cart.scss';
import { Checkout } from '../components/Cart/Checkout/Checkout';
import ProductsInCart from './../phonesBase.json';
import { CartList } from '../components/Cart/Cartlist/CartList';
import { CartModal } from '../components/Cart/CartModal/CartModal';

const threeProductsInCart = ProductsInCart.slice(0, 3);

export const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const onCheckout = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  };

  return (
    <>
      {showModal ? (
        <CartModal />
      ) : (
        <div className="cart-wrapper">
          <h1 className="cart-text">Cart</h1>
          <div className="cart">
            <CartList cartProducts={threeProductsInCart} />
            <Checkout
              totalPrice={2000}
              totalItems={3}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      )}
    </>
  );
};
