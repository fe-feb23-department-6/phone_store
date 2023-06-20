/* eslint-disable no-shadow */
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { StoreContext } from '../../../context/StoreContext';
import { colorIcons } from '../../../img/icons/product_colors';
import { ColorOptions } from '../../../types/ColorOptions';
import { FullProductData } from '../../../types/FullProductData';
import './ProductInfo.scss';

const isColorOption = (color: string): color is ColorOptions => {
  return (color as ColorOptions) in colorIcons;
};

interface Props {
  product: FullProductData;
  onProductChange: (newColor: string, newRam: string) => void;
}

const categoryId = 802390;

export const ProductInfo: FC<Props> = ({ product, onProductChange }) => {
  const { cartContents, addToCart, favContents, handleFavChange }
    = useContext(StoreContext);

  const navigate = useNavigate();

  const {
    id,
    color: currentColor,
    colorsAvailable,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    capacity,
    ram,
  } = product;

  const isInCart = cartContents.map(({ id }) => id).includes(id);
  const isInFavorites = favContents.includes(id);

  const handleCartAction = () => {
    if (isInCart) {
      navigate('/cart');

      return;
    }

    addToCart(id);
  };

  return (
    <section className="product-page__section store-product-info">
      <div className="store-product-info__content">
        <div className="store-product-info__content-container">
          <div
            className="store-product-info__available-colors
            available-colors"
          >
            <div className="available-colors__container">
              <div className="available-colors__text">Available colors</div>
            </div>

            <div className="available-colors__id">{`ID:${categoryId}`}</div>
          </div>

          <div className="store-product-info__main-spechs">
            <div className="store-product-info__available-colors-icons">
              {colorsAvailable.map((color) => {
                if (isColorOption(color)) {
                  const iconPath = colorIcons[color];

                  return (
                    <img
                      className={cn('color-icon', {
                        'color-icon--active': color === currentColor,
                      })}
                      src={iconPath}
                      alt={`${color}-color-icon`}
                      onClick={() => onProductChange(color, capacity)}
                      key={color}
                    />
                  );
                }
              })}
            </div>

            <div className="store-product-info__select-capacity">
              <div className="store-product-info__select-capacity-text">
                Select capacity
              </div>
              {capacityAvailable.map((memory: string) => (
                <button
                  className={cn('store-product-info__select-capacity-btn', {
                    'store-product-info__select-capacity-btn--active':
                      memory === capacity,
                  })}
                  onClick={() => onProductChange(currentColor, memory)}
                  key={memory}
                >
                  {memory}
                </button>
              ))}
            </div>

            <div className="store-product-info__price">
              <div className="store-product-info__price--current">{`$${priceRegular}`}</div>
              <div className="store-product-info__price--full">{`$${priceDiscount}`}</div>
            </div>

            <div
              className="
                store-product-info__add-to-cart-or-like
                add-to-cart-or-like"
            >
              <button
                type="button"
                className={cn('add-to-cart-or-like__add-to-cart', {
                  'add-to-cart-or-like__add-to-cart--is-in-cart': isInCart,
                })}
                onClick={handleCartAction}
              >
                {isInCart ? 'Added to cart' : 'Add to cart'}
              </button>

              <button
                type="button"
                className={cn('add-to-cart-or-like__like-icon', {
                  'add-to-cart-or-like__like-icon--is-in-favorites':
                    isInFavorites,
                })}
                onClick={() => handleFavChange(id)}
              />
            </div>

            <div className="store-product-info__phone-info phone-info">
              <div className="phone-info__parameter">
                <div className="phone-info__parameter-text">Screen</div>
                <div className="phone-info__parameter-size">{screen}</div>
              </div>

              <div className="phone-info__parameter">
                <div className="phone-info__parameter-text">Resolution</div>
                <div className="phone-info__parameter-size">{resolution}</div>
              </div>

              <div className="phone-info__parameter">
                <div className="phone-info__parameter-text">Processor</div>
                <div className="phone-info__parameter-size">{processor}</div>
              </div>

              <div className="phone-info__parameter">
                <div className="phone-info__parameter-text">RAM</div>
                <div className="phone-info__parameter-size">{ram}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
