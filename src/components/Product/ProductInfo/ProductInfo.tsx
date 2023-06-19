/* eslint-disable no-shadow */
import { FC } from 'react';
import { FullProductData } from '../../../types/FullProductData';
import './ProductInfo.scss';
import { ColorOptions, colorIcons } from '../../../img/icons/product_colors';

const isColorOption = (color: string): color is ColorOptions => {
  return (color as ColorOptions) in colorIcons;
};

interface Props {
  product: FullProductData;
  onProductChange: (newColor: string, newRam: string) => void;
}

const userId = Math.floor(Math.random() * 1000000);

export const ProductInfo: FC<Props> = ({ product, onProductChange }) => {
  const {
    color,
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

  return (
    <section className="product-page__section product-info">
      <div className="product-info__content">
        <div className="product-info__content-container">
          <div className="product-info__available-colors available-colors">
            <div className="available-colors__container">
              <div className="available-colors__text">Available colors</div>
            </div>

            <div className="available-colors__id">{`ID:${userId}`}</div>
          </div>

          <div className="product-info__main-spechs">
            <div className="product-info__available-colors-icons">
              {colorsAvailable.map(color => {
                if (isColorOption(color)) {
                  const iconPath = colorIcons[color];

                  return (
                    <img
                      className="color-icon"
                      src={iconPath}
                      alt="beige-color-icon"
                      onClick={() => onProductChange(color, capacity)}
                      key={color}
                    />
                  );
                }
              })}
            </div>

            <div className="product-info__select-capacity">
              <div className="product-info__select-capacity-text">
                Select capacity
              </div>
              {capacityAvailable.map((memory: string) => (
                <button
                  className="product-info__select-capacity-btn"
                  onClick={() => onProductChange(color, memory)}
                  key={memory}
                >
                  {memory}
                </button>
              ))}
            </div>

            <div className="product-info__price">
              <div className="product-info__price--current">{`$${priceRegular}`}</div>
              <div className="product-info__price--full">{`$${priceDiscount}`}</div>
            </div>

            <div
              className="
                product-info__add-to-cart-or-like
                add-to-cart-or-like"
            >
              <button
                type="button"
                className="add-to-cart-or-like__add-to-cart"
              >
                Add to cart
              </button>

              <button
                type="button"
                className="add-to-cart-or-like__like-icon"
              ></button>
            </div>

            <div className="product-info__phone-info phone-info">
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
