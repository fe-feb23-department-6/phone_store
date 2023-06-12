import React from 'react';
import './CategoryName.scss';

type Props = {
  productsQuantity: number;
};

export const CategoryName:React.FC<Props> = ({ productsQuantity }) => (
  <div className="categoryName">
    <p className="categoryName-text">
      Mobile phones
    </p>

    <p className="categoryName-quantity">
      {`${productsQuantity} models`}
    </p>
  </div>
);
