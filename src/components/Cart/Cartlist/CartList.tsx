import { FC, useContext } from 'react';
import { CartListItem } from '../CartListItem/CartListItem';
import { CatalogProductData } from '../../../types/CatalogProductData';
import './CartList.scss';
import { StoreContext } from '../../../context/StoreContext';

type Props = {
  products: CatalogProductData[];
};

export const CartList: FC<Props> = ({ products }) => {
  const { cartContents } = useContext(StoreContext);

  return (
    <div className="cart-list">
      {cartContents.map(({ id, quantity }) => {
        const product = products.find((prod) => prod.itemId === id);

        if (!product) {
          return null;
        }

        const { name: prodName, image, price } = product;

        const cartProduct = {
          id,
          prodName,
          image,
          price,
          quantity,
        };

        return <CartListItem key={cartProduct.id} cartProduct={cartProduct} />;
      })}
    </div>
  );
};
