import { FC } from 'react';
import './ProductsList.scss';
import { ProductCard } from '../ProductCard';
import { CatalogProductData } from '../../../types/CatalogProductData';

type Props = {
  products: CatalogProductData[];
};

export const ProductsList: FC<Props> = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
