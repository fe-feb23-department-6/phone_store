/* eslint-disable no-console */

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.scss';
// import iphoneBanner from './img/iphone-banner.jpg';
// import ipadBanner from './img/ipad-banner.jpg';
// import watchBanner from './img/watch-banner.png';
import { BannerSlide } from '../../BannerSlide';

export const Banner = () => {
  return (
    <section className="banner-slider">
      <h2 className="banner-title">Welcome to Nice Gadgets store!</h2>

      <div className="banner">
        <button className="banner-control banner-control__prev"></button>
        <button className="banner-control banner-control__next"></button>
        <Swiper
          wrapperClass="banner-swiper"
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
            <BannerSlide
              productTitle={'Iphone 11'}
              productQuote={'Lots more power. Lots more battery life.'}
              photoIndex={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerSlide
              productTitle={'Iphone 11 pro'}
              productQuote={'Pro. Beyond.'}
              photoIndex={2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerSlide
              productTitle={'Iphone 11 pro max'}
              productQuote={'Pro cameras. Pro display. Pro performance.'}
              photoIndex={3}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src={iphoneBanner}
              alt="iphone-banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src={ipadBanner}
              alt="iphone-banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="banner-img"
              // eslint-disable-next-line max-len
              src={watchBanner}
              alt="iphone-banner"
            />
          </SwiperSlide> */}
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
