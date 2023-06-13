import './PagesStyles/Home.scss';

import { Promo } from '../components/Promo';
import { Categories } from '../components/Categories';
import { ProductsSlider } from '../components/ProductsSlider';

export const Home = () => {
  return (
    <div className="home">
      <Promo />

      <section className="new-models products-slider">
        <h2 className="products-slider__title">New models</h2>
        <ProductsSlider />
      </section>

      <Categories />

      <section className="hot-prices products-slider">
        <h2 className="products-slider__title">Hot Prices</h2>
        <ProductsSlider />
      </section>
    </div>
  );
};
