import { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../api/phones';
import { SortBar } from '../components/Catalog/SortBar/SortBar';
import { ProductsList } from '../components/Catalog/ProductsList/ProductsList';
import { Pagination } from '../components/Pagination/Pagination';
import './PagesStyles/Catalog.scss';
import '../styles/fonts/fonts.scss';
import '../styles/utils/_vars.scss';
import '../styles/utils/_mixins.scss';
import { CatalogProductData } from '../types/CatalogProductData';

export const Catalog = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();

  const searchLocation = useLocation().search;

  // eslint-disable-next-line space-before-function-paren
  const getCatalogContents = useCallback(async () => {
    try {
      const response = await getProducts(searchLocation);
      const productsFromServer = response.products;
      const pagesQuantity = response.totalPages;

      setTotalPages(pagesQuantity);
      setProducts(productsFromServer);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [searchParams]);

  useEffect(() => {
    getCatalogContents();
  }, [searchParams]);

  return (
    <div className="catalogContent">
      <div className="categoryName">
        <h1 className="categoryName-text">Mobile phones</h1>
        <p className="categoryName-quantity">{`${products.length} models`}</p>
      </div>
      <SortBar />
      <ProductsList products={products} />
      {totalPages && <Pagination totalPages={totalPages} />}
    </div>
  );
};
