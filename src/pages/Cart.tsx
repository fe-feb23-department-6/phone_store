// import { useContext } from 'react';
import { Checkout } from '../components/Cart/Checkout/Checkout';
import ProductsInCart from './../phonesBase.json';
import { CartList } from '../components/Cart/Cartlist/CartList';
import './PagesStyles/Cart.scss';
// import { StoreContext } from '../context/StoreContext';

const threeProductsInCart = ProductsInCart.slice(0, 3);

export const Cart = () => {
  // const { cartContents } = useContext(StoreContext);

  return (
    <div className="cart-wrapper">
      <h1 className="cart-text">Cart</h1>
      <div className="cart">
        <CartList cartProducts={threeProductsInCart} />
        <Checkout totalPrice={2000} totalItems={3} />
      </div>
    </div>
  );
};
