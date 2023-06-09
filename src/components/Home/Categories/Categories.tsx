import { CategoryCard } from '../CategoryCard';
import './Categories.scss';

import Phones from '../../../img/phones.svg';
import Tablets from '../../../img/tablets.png';
import Accessories from '../../../img/accessories.png';

export const Categories = () => (
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
