import React from 'react';
import './ProductCard.scss';
import { Product } from '../../../types/Product';
import testImg from './testImage.jpg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    fullPrice,
    price,
    capacity,
    ram,
  } = product;

  return (
    <main className="productCard">
      <div className="productCard-imageContainer">
        <img
          src={testImg}
          className="productCard__productPhoto"
          // alt="ProductPhoto"
        />
      </div>
      <div className="productCard__productName">
        {product.name}
      </div>

      <p className="productCard__price">
        <div className="productCard__price--current">
          {`$${price}`}
        </div>
        <div className="productCard__price--full">
          {`$${fullPrice}`}
        </div>
      </p>

      <div className="productCard__phoneInfo phoneInfo">
        <div className="phoneInfo__screen">
          <div className="phoneInfo__screen-text">
            Screen
          </div>
          <div className="phoneInfo__screen-size">
            {product.screen}
          </div>
        </div>

        <div className="phoneInfo__capacity">
          <div className="phoneInfo__capacity-text">
            Capacity
          </div>
          <div className="phoneInfo__capacity-size">
            {capacity}
          </div>
        </div>

        <div className="phoneInfo__ram">
          <div className="phoneInfo__ram-text">
            RAM
          </div>
          <div className="phoneInfo__ram-size">
            {ram}
          </div>
        </div>
      </div>

      <div className="productCard__addToCartOrLike addToCartOrLike">
        <button type="button" className="addToCartOrLike__addToCart">
          Add to cart
        </button>

        <button type="button" className="addToCartOrLike__likeIcon" />
      </div>
    </main>
  );
};
