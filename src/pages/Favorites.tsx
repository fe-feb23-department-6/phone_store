import { useEffect, useState, useContext } from 'react';
import { ProductCard } from '../components/Catalog/ProductCard';
import { StoreContext } from '../context/StoreContext';

import { GoHomeButton } from '../components/GoHomeButton';
import './PagesStyles/Favorites.scss';

export const Favorites = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const { favContents } = useContext(StoreContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async() => {
      const response = await fetch(
        `/api/products/favorites?ids=${favContents.join(',')}`,
      ); // endpoint
      const data = await response.json();

      setFavoriteProducts(data);
    };

    fetchFavoriteProducts();
  }, [favContents]);

  useEffect(() => {
    setFavoriteCount(favContents.length);
  }, [favContents]);

  return (
    <div className="favorites">
      <GoHomeButton />
      <h1 className="favorites__title">Favorites</h1>
      <span className="favorites__subtitle">{favoriteCount} items</span>

      {favoriteCount > 0 ? (
        <div className="favorites__items">
          {favoriteProducts.map((product) => (
            <ProductCard key={product} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="favorites__empty">
          Add products to favorites to display here
        </h2>
      )}
    </div>
  );
};
