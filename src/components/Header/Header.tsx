import React, { FC } from 'react';
import './header.scss';
import NiceGadgetsLogo from '../../img/Nice Gadgets.png';
import Favourite from '../../img/icons/favourite.svg';
import Basket from '../../img/icons/shopping_bag.svg';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Header: FC = () => {
  return (
    <div className="header">
      <a href="#home" className="header__logo">
        <img src={NiceGadgetsLogo} alt="logo" />
      </a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn('nav__link', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#phones">
              Phones
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#tablets">
              Tablets
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#accessories">
              Accessories
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <a href="#favorites" className="action">
          <img src={Favourite} alt="favourite" className="action__image" />
        </a>

        <a href="#basket" className="action">
          <img src={Basket} alt="basket" className="action__image" />
        </a>
      </div>
    </div>
  );
};
