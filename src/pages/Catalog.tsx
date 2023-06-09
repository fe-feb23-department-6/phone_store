import { useState, useEffect, useCallback } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { SortBar } from '../components/Catalog/SortBar';
import { ProductsList } from '../components/Catalog/ProductsList';
import { Pagination } from '../components/Catalog/Pagination';
import { Loader } from '../components/Loader';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProducts } from '../api';
import { categorTitles } from '../constants';
import './PagesStyles/Catalog.scss';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Catalog = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [productsCount, setProductsCount] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const paramsString = useLocation().search;
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const getCatalogContents = useCallback(async() => {
    try {
      setIsLoading(true);

      if (categoryName) {
        const productsData = await getProducts(categoryName, paramsString);

        const {
          products: productsFromServer,
          totalPages: pagesQuantity,
          totalCount: productsQuantity,
        } = productsData;

        setProductsCount(productsQuantity);
        setTotalPages(pagesQuantity);
        setProducts(productsFromServer);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      navigate('/NotFound');

      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [searchParams, categoryName]);

  useEffect(() => {
    getCatalogContents();
  }, [searchParams, categoryName]);

  return (
    <div className="catalog-content">
      {categoryName && <Breadcrumbs page={categoryName} />}

      <div className="category-name">
        <h1 className="category-name-text">
          {categoryName && categorTitles[categoryName]}
        </h1>

        <p className="category-name-quantity">{`${productsCount} models`}</p>
      </div>

      <SortBar />

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {productsCount > 0 ? (
            <>
              <ProductsList products={products} />

              {totalPages > 1 && <Pagination totalPages={totalPages} />}
            </>
          ) : (
            <h2>Sorry, we don't have appropriate products</h2>
          )}
        </>
      )}
    </div>
  );
};
