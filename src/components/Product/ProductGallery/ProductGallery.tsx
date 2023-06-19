import { FC, useState, useCallback, useEffect } from 'react';
import { FullProductData } from '../../../types/FullProductData';
import './ProductGallery.scss';

interface Props {
  product: FullProductData;
}

export const ProductGallery: FC<Props> = ({ product }) => {
  const { images, name: prodName } = product;

  const [currentImage, setCurrentImage] = useState('');

  const handleImageChange = useCallback((image: string) => {
    setCurrentImage(image);
  }, []);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [product]);

  return (
    <div className="product-page__section content-gallery">
      <div className="content-gallery__main-photo">
        <img
          className="content-gallery__main-photo-item"
          src={currentImage}
          alt={prodName}
        />
      </div>

      <div className="content-gallery__photos-container">
        {images.map((image: string) => (
          <div className="content-gallery__secondary-photo" key={image}>
            <div className="content-gallery__secondary-photo-container">
              <img
                className="content-gallery__secondary-photo-item"
                src={image}
                alt={prodName}
                onClick={() => handleImageChange(image)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
