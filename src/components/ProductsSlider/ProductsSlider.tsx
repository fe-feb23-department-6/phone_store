import { FC } from 'react';
import { ProductCard } from '../Catalog/ProductCard';
import { CatalogProductData } from '../../types/CatalogProductData';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProductsSlider.scss';

type Props = {
  sectionName: string;
  products: CatalogProductData[];
};

export const ProductsSlider: FC<Props> = ({ sectionName, products }) => {
  return (
    <div className="slider">
      <div className="slider-top">
        <div className="slider-buttons">
          <button
            className={`slider-button slider-button__next ${sectionName}-button__next`}
          ></button>
          <button
            className={`slider-button slider-button__prev ${sectionName}-button__prev`}
          ></button>
        </div>
      </div>
      <Swiper
        wrapperClass="product-slider"
        modules={[Navigation]}
        spaceBetween={24}
        navigation={{
          prevEl: `.${sectionName}-button__prev`,
          nextEl: `.${sectionName}-button__next`,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1100: {
            slidesPerView: 3.7,
            slidesPerGroup: 3,
          },
          1000: {
            slidesPerView: 3.4,
          },
          900: {
            slidesPerView: 3.1,
          },
          800: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
          },
          700: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 2.2,
          },
          500: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
          },
          400: {
            slidesPerView: 1.6,
          },
          300: {
            slidesPerView: 1.2,
          },
        }}
      >
        {products.map((product: CatalogProductData) => (
          <SwiperSlide key={product.id}>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
