import React from 'react';
import './ProductsList.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { CatalogProductData } from '../../../types/CatalogProductData';

type Props = {
  products: CatalogProductData[];
};

export const ProductsList: React.FC<Props> = ({ products }) => (
  <div className="productList">
    {products.slice(2, 13).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
