// import { useCallback, useEffect, useState } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
import { CategoryCard } from '../CategoryCard';
// import { getProducts } from '../../../api/products';
import './Categories.scss';

import Phones from '../../../img/phones.svg';
import Tablets from '../../../img/tablets.png';
import Accessories from '../../../img/accessories.png';

export const Categories = () => {
  /* const [productsCount, setProductsCount] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const paramsString = useLocation().search;

  const getCategoryCount = useCallback(async() => {
    try {
      const productsData = await getProducts(paramsString);
      const { totalCount: productsQuantity } = productsData;

      setProductsCount(productsQuantity);
    } catch {
      throw new Error('Server error');
    }
  }, [searchParams]);

  useEffect(() => {
    getCategoryCount();
  }, [searchParams]); */

  return (
    <div className="categories">
      <CategoryCard
        path="/category/phones"
        image={Phones}
        categoryName="Phones"
        categoryCount={71}
      />

      <CategoryCard
        path="/category/tablets"
        image={Tablets}
        categoryName="Tablets"
        categoryCount={0}
      />

      <CategoryCard
        path="/category/accessories"
        image={Accessories}
        categoryName="Accessories"
        categoryCount={0}
      />
    </div>
  );
};
