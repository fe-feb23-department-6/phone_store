import React from 'react';
import './ProductsList.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../../types/Product';

type Props = {
  products: Product[];
};

export const ProductsList: React.FC<Props> = ({ products }) => (
  <div className="productList">
    {products.slice(2, 13).map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
