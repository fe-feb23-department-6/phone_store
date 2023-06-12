import './Catalog.scss';
import '../../styles/fonts/fonts.scss';
import '../../styles/utils/vars.scss';
import '../../styles/utils/mixins.scss';

import { CategoryName } from './CategoryName/CategoryName';
import { SortBar } from './SortBar/SortBar';
import { ProductsList } from './ProductsList/ProductsList';

import phonesFromServer from '../../phonesBase.json';

export const Catalog = () => (
  <div className="catalogContent">
    <CategoryName productsQuantity={phonesFromServer.length} />
    <SortBar />
    <ProductsList products={phonesFromServer} />
  </div>
);
