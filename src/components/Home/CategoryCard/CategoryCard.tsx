import { FC } from 'react';
import { Link } from 'react-router-dom';

import './Category.scss';

interface Props {
  path: string;
  image: string;
  categoryName: string;
}

export const CategoryCard: FC<Props> = ({ image, path, categoryName }) => {
  return (
    <div className="category__item">
      <Link to={path} className="category__item__photo">
        <img src={image} alt="product category" />
      </Link>

      <Link to={path} className="category__item__name">
        {categoryName}
      </Link>

      <div className="category__item__model">
        95 models
      </div>
    </div>
  );
};
