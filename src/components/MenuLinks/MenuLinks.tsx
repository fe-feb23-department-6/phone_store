import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './MenuLinks.scss';

export const MenuLinks = () => (
  <nav>
    <ul className="nav__list">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn('nav__link', {
              'is-active': isActive,
            })
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            cn('nav__link', {
              'is-active': isActive,
            })
          }
        >
          Phones
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            cn('nav__link', {
              'is-active': isActive,
            })
          }
        >
          Tablets
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            cn('nav__link', {
              'is-active': isActive,
            })
          }
        >
          Accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
