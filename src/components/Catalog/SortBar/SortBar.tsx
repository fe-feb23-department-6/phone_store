import './SortBar.scss';

export const SortBar = () => (
  <div className="sortBar">
    <div className="sortBy">
      <p className="sortBy__text">
        Sort by
      </p>
      <select className="sortBy__list">
        <option value="Newest">
          Newest
        </option>
        <option value="PriceLowToHigh">
          Price - Low to High
        </option>
        <option value="PriceHighToLow">
          Price - High to Low
        </option>
      </select>
    </div>
    <div className="itemsOnPage">
      <p className="itemsOnPage__text">
        Items on page
      </p>
      <select className="itemsOnPage__list">
        <option value="16">
          16
        </option>
        <option value="32">
          32
        </option>
      </select>
    </div>
  </div>
);
