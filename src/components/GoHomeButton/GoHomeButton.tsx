import { useNavigate, useLocation } from 'react-router-dom';
import './GoHomeButton.scss';
import Home from '../../img/icons/home_icon.svg';

export const GoHomeButton = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();

  let currentPageName = currentLocation.pathname.substring(1);

  currentPageName = currentPageName
    .charAt(0)
    .toUpperCase() + currentPageName
    .slice(1);

  return (
    <div className="go-home">
      <button className="go-home__button" onClick={() => navigate('/home')}>
        <img src={Home} alt="Home" />
      </button>
      {currentPageName}
    </div>
  );
};
