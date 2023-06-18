import { FC } from 'react';
import { CartListItem } from '../CartListItem/CartListItem';
import { CatalogProductData } from '../../../types/CatalogProductData';
import './CartList.scss';

type Props = {
  cartProducts: CatalogProductData[];
};

export const CartList: FC<Props> = ({ cartProducts }) => (
  <div className="cart-list">
    {cartProducts.map((cartProduct) => (
      <CartListItem key={cartProduct.id} cartProduct={cartProduct} />
    ))}
  </div>
);
