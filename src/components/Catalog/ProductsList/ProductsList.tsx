import { FC } from 'react';
import './ProductsList.scss';
import { ProductCard } from '../ProductCard';
import { CatalogProductData } from '../../../types/CatalogProductData';

type Props = {
  products: CatalogProductData[];
};

export const ProductsList: FC<Props> = ({ products }) => (
  <div className="productList">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
