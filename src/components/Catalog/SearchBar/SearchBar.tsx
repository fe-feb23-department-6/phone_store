import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { queryParam, pageParam } from '../../../constants';
import './SearchBar.scss';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isResetButtonActive, setIsResetButtonActive] = useState(false);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  const setQueryParam = (searchQuery: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    if (searchQuery === '') {
      updatedSearchParams.delete(queryParam);
    } else {
      updatedSearchParams.set(queryParam, searchQuery);
    }

    updatedSearchParams.delete(pageParam);
    setSearchParams(updatedSearchParams.toString());
  };

  useEffect(() => {
    setQueryParam(appliedQuery);
  }, [appliedQuery]);

  const handleQueryChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    const { value } = inputEvent.target;

    setQuery(value);
    applyQuery(value);
    setIsResetButtonActive(!!value);
  };

  const handleReset = () => {
    setQuery('');
    setQueryParam('');
    setIsResetButtonActive(false);
  };

  return (
    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        type="text"
        className="input params-block__input"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {isResetButtonActive && (
          <button
            type="button"
            className="delete"
            aria-label="Clear search"
            onClick={handleReset}
          />
        )}
      </span>
    </p>
  );
};
