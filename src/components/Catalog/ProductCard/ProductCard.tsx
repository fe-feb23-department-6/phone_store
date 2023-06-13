import React from 'react';
import './ProductCard.scss';
import { Product } from '../../../types/Product';
import testImg from './testImage.jpg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { fullPrice, price, capacity, ram } = product;

  return (
    <main className="productCard">
      <div className="productCard-imageContainer">
        <img
          src={testImg}
          className="productCard__productPhoto"
          // alt="ProductPhoto"
        />
      </div>
      <div className="productCard__productName">{product.name}</div>

      <p className="productCard__price">
        <div className="productCard__price--current">{`$${price}`}</div>
        <div className="productCard__price--full">{`$${fullPrice}`}</div>
      </p>

      <div className="productCard__phoneInfo phoneInfo">
        <div className="phoneInfo__parameter">
          <div className="phoneInfo__parameter-text">Screen</div>
          <div className="phoneInfo__parameter-size">{product.screen}</div>
        </div>

        <div className="phoneInfo__parameter">
          <div className="phoneInfo__parameter-text">Capacity</div>
          <div className="phoneInfo__parameter-size">{capacity}</div>
        </div>

        <div className="phoneInfo__parameter">
          <div className="phoneInfo__parameter-text">RAM</div>
          <div className="phoneInfo__parameter-size">{ram}</div>
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
