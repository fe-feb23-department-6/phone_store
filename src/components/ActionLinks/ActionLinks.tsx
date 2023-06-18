import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ActionLinks.scss';
import Favorite from '../../img/icons/favorite.svg';
import Basket from '../../img/icons/shopping_bag.svg';

export const ActionsLink = () => (
  <div className="header__actions">
    <NavLink
      to="/favorites"
      className={({ isActive }) => cn('action', { 'is-active': isActive })}
    >
      <img src={Favorite} alt="favorites" className="action__image" />
    </NavLink>

    <NavLink
      to="/cart"
      className={({ isActive }) => cn('action', { 'is-active': isActive })}
    >
      <img src={Basket} alt="cart" className="action__image" />
    </NavLink>
  </div>
);
