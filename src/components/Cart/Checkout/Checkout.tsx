import { FC } from 'react';
import './Checkout.scss';

type Props = {
  totalPrice: number;
  totalItems: number;
};

export const Checkout: FC<Props> = ({ totalPrice, totalItems }) => (
  <div className="checkout">
    <div className="checkout__total">
      <p className="checkout__total-price">{`$${totalPrice}`}</p>
      <p className="checkout__total-items">{`Total for ${totalItems} items`}</p>
    </div>
    <button type="button" className="checkout__button">
      Checkout
    </button>
  </div>
);
