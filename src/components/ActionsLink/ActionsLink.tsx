import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ActionsLink.scss';
import Favorite from '../../img/icons/favorite.svg';
import Basket from '../../img/icons/shopping_bag.svg';

export const ActionsLink = () => (
  <div className="header__actions">
    <NavLink
      to={'/favorite'}
      className={({ isActive }) =>
        cn('action', { 'is-active': isActive })
      }
    >
      <img src={Favorite} alt="favourite" className="action__image" />

    </NavLink>

    <NavLink
      to={'/basket'}
      className={({ isActive }) =>
        cn('action', { 'is-active': isActive })
      }
    >
      <img src={Basket} alt="basket" className="action__image" />
    </NavLink>
  </div>
);
