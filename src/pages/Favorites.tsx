import { useState, useEffect } from 'react';
import { GoHomeButton } from '../components/GoHomeButton';
import './PagesStyles/Favorites.scss';

import { CatalogProductData } from '../types/CatalogProductData';

export const Favorites = () => {
  // eslint-disable-next-line max-len
  const [favoriteProducts, setFavoriteProducts] = useState<
    CatalogProductData[]
  >([]);

  useEffect(() => {
    const storagedFavorites = localStorage.getItem('favoritesContents');
    const savedFavContents = storagedFavorites
      ? JSON.parse(storagedFavorites)
      : [];

    setFavoriteProducts(savedFavContents);
  }, []);

  const favoritesCount = favoriteProducts.length;

  return (
    <div className="favorites">
      <GoHomeButton />
      <h1 className="favorites__title">Favorites</h1>
      <span className="favorites__subtitle">{favoritesCount} items</span>

      {favoritesCount > 0 ? (
        <div className="favorites__items">
          {/* favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) */}
        </div>
      ) : (
        <h2 className="favorites__empty">
          Add products to favorites to display here
        </h2>
      )}
    </div>
  );
};
