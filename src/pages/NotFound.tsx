import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import './PagesStyles/NotFound.scss';

export const NotFound = () => (
  <div className="not-found">
    <Breadcrumbs page="Not found" />
        
    <h1 className="not-found__title">404</h1>

    <div className="not-found__content">
      <p className="not-found__message">Something's missing.</p>
      <p className="not-found__message">
        This Page doesn't exist or was removed.
      </p>
      <p className="not-found__message">We suggest you go back to home.</p>

      <Link className="not-found__button" to="/">
        Go to Home
      </Link>
    </div>
  </div>
);
