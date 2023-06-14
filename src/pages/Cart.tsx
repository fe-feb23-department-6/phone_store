import './PagesStyles/Cart.scss';
import { CartList } from '../components/Cart/CartList/CartList';
import { Checkout } from '../components/Cart/Checkout/Checkout';
import ProductsInCart from './../phonesBase.json';

const threeProductsInCart = ProductsInCart.slice(0, 3);

// totalPrice = threeProductsInCart.reduce((x, sum) =>
// (x.price * x.quantity) + sum, 0);
// totalItems = threeProductsInCart.reduce((x, sum) =>
// x.quantity + sum, 0);

export const Cart = () => (
  <div className="cart-wrapper">
    <h1 className="cart-text">Cart</h1>
    <div className="cart">
      <CartList cartProducts={threeProductsInCart}/>
      <Checkout totalPrice={2000} totalItems={3}/>
    </div>
  </div>
);
