import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { CategoryCard } from '../CategoryCard';
import { getProducts } from '../../../api/phones';
import './Categories.scss';

import Phones from '../../../img/phones.svg';
import Tablets from '../../../img/tablets.png';
import Accessories from '../../../img/accessories.png';

export const Categories = () => {
  const [productsCount, setProductsCount] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const paramsString = useLocation().search;

  const getCategoryCount = useCallback(async() => {
    try {
      const productsData = await getProducts(paramsString);
      const {
        totalCount: productsQuantity,
      } = productsData;

      setProductsCount(productsQuantity);
    } catch {
      throw new Error('Server error');
    }
  }, [searchParams]);

  useEffect(() => {
    getCategoryCount();
  }, [searchParams]);

  return (
    <div className="categories">
      <CategoryCard
        path="/category/phones"
        image={Phones}
        categoryName="Phones"
        categoryCount={productsCount}
      />

      <CategoryCard
        path="/category/tablets"
        image={Tablets}
        categoryName="Tablets"
        categoryCount={productsCount}
      />

      <CategoryCard
        path="/category/accessories"
        image={Accessories}
        categoryName="Accessories"
        categoryCount={productsCount}
      />
    </div>
  );
};
