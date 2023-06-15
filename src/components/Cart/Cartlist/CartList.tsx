import './CartList.scss';
import { CartListItem } from '../CartListItem/CartListItem';
import { CatalogProductData } from '../../../types/CatalogProductData';
//  need to be replaced to CartProductData after, same in Props

type Props = {
  cartProducts: CatalogProductData[];
};

export const CartList: React.FC<Props> = ({ cartProducts }) => (
  <div className="cart-list">
    {cartProducts.map((cartProduct) => (
      <CartListItem key={cartProduct.id} cartProduct={cartProduct} />
    ))}
  </div>
);
