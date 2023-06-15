/* eslint-disable no-console */

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner">
      <h2 className="banner-title">Welcome to Nice Gadgets store!</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesOffsetAfter={10000}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        speed={600}
      >
        <SwiperSlide>
          <div className="banner-item">
            <img
              className="banner-item__img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item">
            <img
              className="banner-item__img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item">
            <img
              className="banner-item__img"
              // eslint-disable-next-line max-len
              src="https://backend-phone-store.onrender.com/img/banner-phones.png"
              alt="iphone-banner"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
