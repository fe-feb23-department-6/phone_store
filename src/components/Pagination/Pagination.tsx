import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import './Pagination.scss';

type Props = {
  totalPages: number;
};

export const Pagination: FC<Props> = ({ totalPages }) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const pageParam = 'page';

  const pages = Array.from({ length: totalPages }, (el, i) => String(i + 1));

  const setPageNumber = (pageNumber: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.set(pageParam, pageNumber);

    return updatedSearchParams.toString();
  };

  return (
    <div className="pagination">
      <Link
        to={{
          search: setPageNumber(String(currentPage - 1)),
        }}
        className={cn('pagination__link', 'pagination__link--prev-next', {
          'pagination__link--disabled': currentPage === 1,
        })}
      >
        {'‹'}
      </Link>
      {pages.map((page) => (
        <Link
          to={{
            search: setPageNumber(page),
          }}
          className={cn('pagination__link', {
            'pagination__link--active': page === String(currentPage),
          })}
          key={page}
        >
          {page}
        </Link>
      ))}
      <Link
        to={{
          search: setPageNumber(String(currentPage + 1)),
        }}
        className={cn('pagination__link', 'pagination__link--prev-next', {
          'pagination__link--disabled': currentPage === totalPages,
        })}
      >
        {'›'}
      </Link>
    </div>
  );
};
