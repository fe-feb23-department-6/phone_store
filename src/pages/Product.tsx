import React from 'react';
import phonesFromServer from '../fullProductData.json';

import { FullProductData } from '../types/FullProductData';
// import { ProductPage } from '../components/Product/ProductPage';
import { Link } from 'react-router-dom';
import Back from '../img/icons/angle_arrow_left.svg';
import Home from '../img/icons/home_icon.svg';
import './PagesStyles/Product.scss';
import { ProductGallery } from '../components/Product/ProductGallery';
import { ProductInfo } from '../components/Product/ProductInfo';
import { ProductAbout } from '../components/Product/ProductAbout';
import { ProductTechSpechs } from '../components/Product/ProductTechSpechs';

export const Product: React.FC = () => {
  const product: FullProductData = phonesFromServer;

  const {
    // eslint-disable-next-line no-shadow
    screen,
    resolution,
    processor,
    ram,
    capacity,
    description,
    camera,
    zoom,
    cell,
  } = product;

  return (
    <div className="product-page">
      <div className="product-page__breadcrumbs">
        <Link to={'/'} className="product-page__breadcrumbs-link">
          <img
            className="product-page__breadcrumbs-img"
            src={Home}
            alt="home"
          />
        </Link>
      </div>

      <Link to={'/'} className="product-page__button-back">
        <img
          className="product-page__button-back-img"
          src={Back}
          alt="arrow-back"
        />
        <span>Back</span>
      </Link>

      <h1 className="product-page__title">{product.name}</h1>

      <div className="product-page__product-container product-container">
        <div className="product-container__main-section">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>

        <div className="product-container__secondary-section">
          <ProductAbout description={description} />

          <ProductTechSpechs
            screen={screen}
            resolution={resolution}
            processor={processor}
            ram={ram}
            capacity={capacity}
            camera={camera}
            zoom={zoom}
            cell={cell}
          />
        </div>
      </div>

      {/* <ProductPage product={product} /> */}
    </div>
  );
};
