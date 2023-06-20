import { FC, useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../../api/phones';

import './Category.scss';

interface Props {
  path: string;
  image: string;
  categoryName: string;
}

export const CategoryCard: FC<Props> = ({ image, path, categoryName }) => {
  const [productsCount, setProductsCount] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const paramsString = useLocation().search;

  const getCatalogContents = useCallback(async() => {
    try {
      const productsData = await getProducts(paramsString);
      const { totalCount: productsQuantity } = productsData;

      setProductsCount(productsQuantity);
    } catch {
      throw new Error('Server error');
    }
  }, [searchParams]);

  useEffect(() => {
    getCatalogContents();
  }, [searchParams]);

  return (
    <div className="category__item">
      <Link to={path} className="category__item__photo">
        <img src={image} alt="product category" />
      </Link>

      <Link to={path} className="category__item__name">
        {categoryName}
      </Link>

      <div className="category__item__model">{productsCount} models</div>
    </div>
  );
};
