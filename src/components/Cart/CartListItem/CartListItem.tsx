import { FC, useContext } from 'react';
import cn from 'classnames';
import { StoreContext } from '../../../context/StoreContext';
import { CartProductData } from '../../../types/CartProductData';
import './CartListItem.scss';

type Props = {
  cartProduct: CartProductData;
};

export const CartListItem: FC<Props> = ({ cartProduct }) => {
  const { changeCartProdQuantity, removeCartProduct }
    = useContext(StoreContext);

  const { id, prodName, image, price, quantity } = cartProduct;

  return (
    <div className="cart-item">
      <div className="cart-item-phoneinfo-wrapper">
        <button
          type="button"
          className="cart-item__delete-button"
          onClick={() => removeCartProduct(id)}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="cart-item__photo-container">
          <img src={image} className="cart-item__photo" alt="" />
        </div>

        <p className="cart-item__description">{prodName}</p>
      </div>

      <div className="cart-item-quantity-and-price-wrapper">
        <div className="cart-item__quantity">
          <button
            type="button"
            className={cn('cart-item__quantity-button', {
              'cart-item__quantity-button--disabled': quantity === 1,
            })}
            onClick={() => changeCartProdQuantity(id, -1)}
          >
            -
          </button>

          <p className="cart-item__quantity-number">{quantity}</p>

          <button
            type="button"
            className="cart-item__quantity-button"
            onClick={() => changeCartProdQuantity(id, 1)}
          >
            +
          </button>
        </div>

        <p className="cart-item__price">${price * quantity}</p>
      </div>
    </div>
  );
};
