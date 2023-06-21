import { useState, useContext, useEffect, useCallback } from 'react';
import { ProductCard } from '../components/Catalog/ProductCard';
import { StoreContext } from '../context/StoreContext';
import { Loader } from '../components/Loader';
import { Breadcrumbs } from '../components/Breadcrumbs';
import './PagesStyles/Favorites.scss';
import { CatalogProductData } from '../types/CatalogProductData';
import { getFavoriteProducts } from '../api';

export const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts]
    = useState<CatalogProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { favContents } = useContext(StoreContext);

  const favIds = favContents.join(',');

  const getFavContent = useCallback(async() => {
    try {
      setIsLoading(true);

      const products = await getFavoriteProducts(favIds);

      setFavoriteProducts(products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Error loading favorite products');
    }
  }, [favoriteProducts]);

  useEffect(() => {
    if (favIds.length > 0) {
      getFavContent();
    }
  }, []);

  const favoriteCount = favContents.length;

  return (
    <div className="favorites">
      <div className="favorites__header">
        <Breadcrumbs page="Favorites" />
        <h1 className="favorites__title">Favorites</h1>
      </div>
      {favoriteCount > 0 && (
        <span className="favorites__subtitle">
          {favoriteCount} {favoriteCount > 1 ? 'items' : 'item'}
        </span>
      )}
      {favoriteCount > 0 ? (
        <div className="favorites__items">
          {isLoading ? (
            <Loader />
          ) : (
            favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      ) : (
        <h2 className="favorites__empty">
          Add products to favorites to display here
        </h2>
      )}
    </div>
  );
};
