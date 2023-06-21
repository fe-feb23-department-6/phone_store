import { FC } from 'react';
import { Link } from 'react-router-dom';
import './BannerSlide.scss';

interface Props {
  photoIndex: number;
  productTitle: string;
  productQuote: string;
  productId: string;
  productCategory: string;
}

export const BannerSlide: FC<Props> = ({
  photoIndex,
  productTitle,
  productQuote,
  productId,
  productCategory,
}) => (
  <div className="banner-slide">
    <div className="banner-slide__now-available">
      <h2 className="banner-slide__banner-title">
        <p className="banner-slide__banner-title-text">Now available</p>
        <p className="banner-slide__banner-title-text">in our store!</p>
      </h2>

      <p className="banner-slide__now-available-quote">Be the first!</p>

      <Link
        to={`/category/${productCategory}/${productId}`}
        className="banner-slide__order-now"
      >
        Order now
      </Link>
    </div>

    <div className="banner-slide__phone-model">
      <h3 className="banner-slide__banner-model-title">{productTitle}</h3>

      <p className="banner-slide__model-quote">{productQuote}</p>

      <div className="banner-slide__banner-model-photo">
        <img
          className="banner-slide__banner-img"
          src={require(`./img/banner-${photoIndex}.png`)}
          alt="iphone-banner"
        />
      </div>
    </div>
  </div>
);
