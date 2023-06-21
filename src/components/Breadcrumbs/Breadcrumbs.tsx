import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Home from '../../img/icons/home_icon.svg';
import './Breadcrumbs.scss';

type Props = {
  page: string;
  category?: string;
};

export const Breadcrumbs: FC<Props> = ({ page, category }) => {
  const navigate = useNavigate();

  return (
    <div className="go-home">
      <button className="go-home__button" onClick={() => navigate('/home')}>
        <img src={Home} alt="Home" />
      </button>
      {category && (
        <Link to={`/category/${category}`} className="go-home__link">
          {category}
        </Link>
      )}
      <div>{page}</div>
    </div>
  );
};
