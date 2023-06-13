import './PagesStyles/Catalog.scss';
import '../styles/fonts/fonts.scss';
import '../styles/utils/_vars.scss';
import '../styles/utils/_mixins.scss';

import { SortBar } from '../components/Catalog/SortBar/SortBar';
import { ProductsList } from '../components/Catalog/ProductsList/ProductsList';

import phonesFromServer from '../phonesBase.json';

export const Catalog = () => (
  <div className="catalogContent">
    <div className="categoryName">
      <h1 className="categoryName-text">Mobile phones</h1>
      <p className="categoryName-quantity">{`${phonesFromServer.length} models`}</p>
    </div>
    <SortBar />
    <ProductsList products={phonesFromServer} />
  </div>
);
