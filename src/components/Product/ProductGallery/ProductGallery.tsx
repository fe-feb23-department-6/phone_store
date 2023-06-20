import { FC, useState, useCallback, useEffect } from 'react';
import { FullProductData } from '../../../types/FullProductData';
import './ProductGallery.scss';

interface Props {
  product: FullProductData;
}

export const ProductGallery: FC<Props> = ({ product }) => {
  const { images, name: prodName } = product;
  const [imageStatuses, setImageStatuses] = useState<(number | null)[]>([]);

  const [currentImage, setCurrentImage] = useState('');

  const handleImageChange = useCallback((image: string) => {
    setCurrentImage(image);
  }, []);

  const fetchImages = async() => {
    setImageStatuses((currentStatuses) => currentStatuses.slice(0, 3));

    const statusArray = [];

    for (const img of images) {
      try {
        const response = await fetch(img);

        statusArray.push(response.status);
      } catch (error) {
        statusArray.push(null);
      }
    }
    setImageStatuses(statusArray);
  };

  useEffect(() => {
    fetchImages();
  }, [images]);

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
        {imageStatuses.map((resStatus: number | null, index) => {
          if (resStatus === 200) {
            return (
              <div
                className="content-gallery__secondary-photo"
                key={images[index]}
              >
                <img
                  className="content-gallery__secondary-photo-item"
                  src={images[index]}
                  onClick={() => handleImageChange(images[index])}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
