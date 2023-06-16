import './CartListItem.scss';
import { CatalogProductData } from '../../../types/CatalogProductData';
import testPhoto from './testImage.jpg';
//  need to be replaced to CartProductData after, same in Props

type Props = {
  cartProduct: CatalogProductData;
};

export const CartListItem: React.FC<Props> = ({ cartProduct }) => (
  <div className="cart-item">
    <div className="cart-item-phoneinfo-wrapper">
      <button type="button" className="cart-item__delete-button"></button>
      <div className="cart-item__photo-container">
        <img src={testPhoto} className="cart-item__photo" alt="" />
      </div>
      <p className="cart-item__description">{cartProduct.name}</p>
    </div>
    <div className="cart-item-quantity-and-price-wrapper">
      <div className="cart-item__quantity">
        <button
          type="button"
          className="cart-item__quantity-button quantity-button-subtract"
        />
        <p className="cart-item__quantity-number">1</p>
        <button
          type="button"
          className="cart-item__quantity-button quantity-button-add"
        />
      </div>
      <p className="cart-item__price">{`$${cartProduct.price}`}</p>
    </div>
  </div>
);
