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
        modules={[Navigation]}
        spaceBetween={16}
        loop={true}
        navigation={{
          prevEl: `.${sectionName}-button__prev`,
          nextEl: `.${sectionName}-button__next`,
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
