/* eslint-disable no-shadow */
import React from 'react';
import { FullProductData } from '../../../types/FullProductData';
import './ProductInfo.scss';
import Beige from '../../../img/icons/beige_color_icon.svg';
import Green from '../../../img/icons/green_color_icon.svg';
import Grey from '../../../img/icons/grey_color_icon.svg';
import Silver from '../../../img/icons/silver_color_icon.svg';
// import AddInFav from '../../../img/icons/favorites_add_fullbutton.svg';

interface Props {
  product: FullProductData;
}

const userId = Math.floor(Math.random() * 1000000);
// const colors = ['Beige', 'Green', 'Grey', 'Silver'];

export const ProductInfo: React.FC<Props> = ({ product }) => {
  const {
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
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
              {/* {colors.map((color) => (
                <img
                  className='color-icon'
                  src={`${color}`}
                  alt={`${color}`}
                />
              ))} */}
              <img className="color-icon" src={Beige} alt="beige-color-icon" />

              <img className="color-icon" src={Green} alt="green-color-icon" />

              <img className="color-icon" src={Grey} alt="grey-color-icon" />

              <img
                className="color-icon"
                src={Silver}
                alt="silver-color-icon"
              />
            </div>

            <div className="product-info__select-capacity">
              <div className="product-info__select-capacity-text">
                Select capacity
              </div>
              {capacityAvailable.map((memory: string) => (
                <button
                  className="product-info__select-capacity-btn"
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
