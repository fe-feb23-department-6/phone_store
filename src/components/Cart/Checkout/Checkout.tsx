import './Checkout.scss';

type Props = {
  totalPrice: number;
  totalItems: number;
  onCheckout: () => void;
};

export const Checkout: React.FC<Props> = ({
  totalPrice,
  totalItems,
  onCheckout,
}) => (
  <div className="checkout">
    <div className="checkout__total">
      <p className="checkout__total-price">{`$${totalPrice}`}</p>
      <p className="checkout__total-items">{`Total for ${totalItems} items`}</p>
    </div>
    <button type="button" className="checkout__button" onClick={onCheckout}>
      Checkout
    </button>
  </div>
);
