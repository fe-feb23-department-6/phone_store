import React from 'react';
import { FullProductData } from '../../../types/FullProductData';
import './ProductGallery.scss';

interface Props {
  product: FullProductData;
}

export const ProductGallery: React.FC<Props> = ({ product }) => {
  const { images } = product;

  return (
    <div className="product-page__section content-gallery">
      <div className="content-gallery__main-photo">
        <img
          className="content-gallery__main-photo-item"
          src={require(`../../../${images[0]}`)}
          alt={images[0].slice(-6)}
        />
      </div>

      <div className="content-gallery__photos-container">
        {images.map((image: string) => (
          <div className="content-gallery__secondary-photo" key={image}>
            <img
              className="content-gallery__secondary-photo-item"
              src={require(`../../../${image}`)}
              alt={image.slice(-6)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
