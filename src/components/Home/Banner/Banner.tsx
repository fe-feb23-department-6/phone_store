/* eslint-disable no-console */

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner-slider">
      <h2 className="banner-title">Welcome to Nice Gadgets store!</h2>

      <div className="banner">
        <button className="banner-control banner-control__prev"></button>
        <button className="banner-control banner-control__next"></button>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesOffsetAfter={10000}
          slidesPerView={1}
          navigation={{
            prevEl: '.banner-control__prev',
            nextEl: '.banner-control__next',
          }}
          pagination={{ el: '.swiper-pag', clickable: true }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pag">
          <div className="swiper-pag__bullet" />
          <div className="swiper-pag__bullet" />
          <div className="swiper-pag__bullet" />
        </div>
      </div>
    </section>
  );
};
