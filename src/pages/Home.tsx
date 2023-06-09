import { useCallback, useEffect, useMemo, useState } from 'react';
import { Banner } from '../components/Home/Banner';
import { Categories } from '../components/Home/Categories';
import { ProductsSlider } from '../components/ProductsSlider';
import { Loader } from '../components/Loader';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProductsForSlider } from '../api';
import './PagesStyles/Home.scss';

export const Home = () => {
  const [newProducts, setNewProducts] = useState<CatalogProductData[]>([]);
  const [discountProducts, setDiscountProducts] = useState<
    CatalogProductData[]
  >([]);

  const [newLoading, setNewLoading] = useState(false);
  const [discountLoading, setDiscountLoading] = useState(false);

  const getProducts = useCallback(async() => {
    try {
      setNewLoading(true);
      setDiscountLoading(true);

      const newProductsData = await getProductsForSlider('new');
      const discountProductsData = await getProductsForSlider('discount');

      setNewProducts(newProductsData);
      setDiscountProducts(discountProductsData);
    } catch {
      throw new Error('Server error');
    } finally {
      setNewLoading(false);
      setDiscountLoading(false);
    }
  }, [newProducts, discountProducts]);

  useEffect(() => {
    getProducts();
  }, []);

  const memNewProducts = useMemo(() => newProducts, [newProducts]);
  const memDiscountProducts = useMemo(
    () => discountProducts,
    [discountProducts],
  );

  return (
    <div className="home">
      <Banner />

      <section className="new-models products-slider">
        <h2 className="products-slider__title">Brand new models</h2>
        {newLoading ? (
          <Loader />
        ) : (
          <ProductsSlider
            sectionName={'new-models'}
            products={memNewProducts}
          />
        )}
      </section>

      <section className="shop-categories">
        <h2 className="shop-categories__title">Shop by category</h2>
        <Categories />
      </section>

      <section className="hot-prices products-slider">
        <h2 className="products-slider__title">Hot Prices</h2>
        {discountLoading ? (
          <Loader />
        ) : (
          <ProductsSlider
            sectionName={'discount'}
            products={memDiscountProducts}
          />
        )}
      </section>
    </div>
  );
};
