import { NavLink, useSearchParams } from 'react-router-dom';
import cn from 'classnames';

export const Pagination = () => {
  const [searchParams] = useSearchParams();
  const pageQuery = 'page';

  const pageQuantity = 4;
  const pages = Array.from({ length: pageQuantity }, (el, i) => String(i));

  const setPageNumber = (pageNumber: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.set(pageQuery, pageNumber);

    return updatedSearchParams.toString();
  };

  return (
    <div className="pagination-container">
      {pages.map((page) => (
        <NavLink
          to={setPageNumber(page)}
          className={({ isActive }) =>
            cn({
              'active-page': isActive,
            })
          }
        >
          {page}
        </NavLink>
      ))}
    </div>
  );
};
