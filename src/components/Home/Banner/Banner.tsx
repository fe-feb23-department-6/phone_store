import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannerSlide } from '../../BannerSlide';
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
              productId={'apple-iphone-11-256gb-white'}
              productCategory={'phones'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerSlide
              productTitle={'Iphone 11 pro'}
              productQuote={'Pro. Beyond.'}
              photoIndex={2}
              productId={'apple-iphone-11-pro-512gb-spacegray'}
              productCategory={'phones'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerSlide
              productTitle={'Iphone 11 pro max'}
              productQuote={'Pro cameras. Pro display. Pro performance.'}
              photoIndex={3}
              productId={'apple-iphone-11-pro-max-512gb-silver'}
              productCategory={'phones'}
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
