/* eslint-disable no-console */

import { FC } from 'react';
import { CatalogProductData } from '../../types/CatalogProductData';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ProductCard } from '../Catalog/ProductCard';
import './ProductsSlider.scss';

type Props = {
  products: CatalogProductData[];
};

export const ProductsSlider: FC<Props> = ({ products }) => {
  return (
    <div className="slider">
      <div className="slider-top">
        <div className="slider-buttons">
          <button className="slider-button slider-button__next"></button>
          <button className="slider-button slider-button__prev"></button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        loop={true}
        navigation={{
          prevEl: '.slider-button__prev',
          nextEl: '.slider-button__next',
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 3.5,
          },
          900: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2.5,
          },
          550: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 1.5,
          },
          340: {
            slidesPerView: 1.2,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product: CatalogProductData) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
