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

      <Categories />

      <section className="hot-prices products-slider">
        <h2 className="products-slider__title">Hot Prices</h2>
        <ProductsSlider />
      </section>
    </div>
  );
};
