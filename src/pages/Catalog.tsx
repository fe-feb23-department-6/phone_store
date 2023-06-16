import { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SortBar } from '../components/Catalog/SortBar';
import { ProductsList } from '../components/Catalog/ProductsList';
import { Pagination } from '../components/Catalog/Pagination';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProducts } from '../api/phones';
import './PagesStyles/Catalog.scss';
import { Loader } from '../components/Loader';

export const Catalog = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [productsCount, setProductsCount] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const paramsString = useLocation().search;

  const getCatalogContents = useCallback(async() => {
    try {
      setIsLoading(true);

      const productsData = await getProducts(paramsString);
      const {
        products: productsFromServer,
        totalPages: pagesQuantity,
        totalCount: productsQuantity,
      } = productsData;

      setProductsCount(productsQuantity);
      setTotalPages(pagesQuantity);
      setProducts(productsFromServer);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      throw new Error('Server error');
    }
  }, [searchParams]);

  useEffect(() => {
    getCatalogContents();
  }, [searchParams]);

  return (
    <div className="catalog-content">
      <div className="category-name">
        <h1 className="category-name-text">Mobile phones</h1>
        {productsCount && (
          <p className="category-name-quantity">{`${productsCount} models`}</p>
        )}
      </div>

      <SortBar />

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ProductsList products={products} />
      )}

      {!isLoading && totalPages && <Pagination totalPages={totalPages} />}
    </div>
  );
};
