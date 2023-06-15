import './PagesStyles/Home.scss';

import { Banner } from '../components/Home/Banner';
import { Categories } from '../components/Home/Categories';
import { ProductsSlider } from '../components/ProductsSlider';
import { useCallback, useEffect, useState } from 'react';
import { getNewProducts } from '../api/phones';
import { CatalogProductData } from '../types/CatalogProductData';

export const Home = () => {
  const [newProducts, setNewProducts] = useState<CatalogProductData[]>([]);
  const [discountProducts, setDiscountProducts] = useState<
    CatalogProductData[]
  >([]);

  const getProducts = useCallback(async() => {
    try {
      const newProductsData = await getNewProducts();
      const discountProductsData = await getNewProducts();

      setNewProducts(newProductsData);
      setDiscountProducts(discountProductsData);
    } catch {
      throw new Error('Server error');
    }
  }, [newProducts, discountProducts]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <Banner />

      <section className="new-models products-slider">
        <h2 className="new-models__title">Brand new models</h2>
        <ProductsSlider products={newProducts} />
      </section>

      <Categories />

      <section className="hot-prices products-slider">
        <h2 className="products-slider__title">Hot Prices</h2>
        <ProductsSlider products={discountProducts} />
      </section>
    </div>
  );
};
