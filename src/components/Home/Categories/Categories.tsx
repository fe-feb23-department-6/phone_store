import { CategoryCard } from '../CategoryCard';
import './Categories.scss';

import Phones from '../../../img/phones.svg';
import Tablets from '../../../img/tablets.png';
import Accessories from '../../../img/accessories.png';

export const Categories = () => {
  return (
    <div className="categories">
      <CategoryCard
        path="/category/phones"
        image={Phones}
        categoryName="Phones"
      />

      <CategoryCard
        path="/category/tablets"
        image={Tablets}
        categoryName="Tablets"
      />

      <CategoryCard
        path="/category/accessories"
        image={Accessories}
        categoryName="Accessories"
      />
    </div>
  );
};
