import { useSearchParams } from 'react-router-dom';
import {
  pageParam,
  sortParam,
  pageLimitParam,
  sortOptions,
  pageLimitOptions,
} from '../../../constants';
import { SearchBar } from '../SearchBar';
import './SortBar.scss';

export const SortBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSortType = (sortType: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.set(sortParam, sortType);

    setSearchParams(updatedSearchParams.toString());
  };

  const setPageLimit = (pageLimit: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.set(pageLimitParam, pageLimit);
    updatedSearchParams.delete(pageParam);

    setSearchParams(updatedSearchParams.toString());
  };

  return (
    <div className="sort-bar">
      <div className="params-block">
        <p className="params-block__title">Sort by</p>
        <select
          className="params-block__select params-block__select--large"
          onChange={(changeEvent) => setSortType(changeEvent.target.value)}
        >
          {Object.entries(sortOptions).map(([optionName, optionText]) => (
            <option value={optionName} key={optionName}>
              {optionText}
            </option>
          ))}
        </select>
      </div>
      <div className="params-block">
        <p className="params-block__title">Items on page</p>
        <select
          className="params-block__select"
          onChange={(changeEvent) => setPageLimit(changeEvent.target.value)}
        >
          {pageLimitOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="params-block">
        <p className="params-block__title">Search</p>
        <SearchBar />
      </div>
    </div>
  );
};
