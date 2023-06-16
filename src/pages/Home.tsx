import './PagesStyles/Home.scss';

import { Banner } from '../components/Home/Banner';
import { Categories } from '../components/Home/Categories';
import { ProductsSlider } from '../components/ProductsSlider';

export const Home = () => {
  return (
    <div className="home">
      <Banner />

      <section className="new-models products-slider">
        <h2 className="products-slider__title">New models</h2>
        <ProductsSlider />
      </section>

      <section className="shop-categories">
        <h2 className="shop-categories__title">Shop by category</h2>
        <Categories />
      </section>

      <section className="hot-prices products-slider">
        <h2 className="products-slider__title">Hot Prices</h2>
        <ProductsSlider />
      </section>
    </div>
  );
};
