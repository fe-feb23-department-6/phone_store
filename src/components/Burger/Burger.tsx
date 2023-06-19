import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Burger.scss';
import cn from 'classnames';
import BurgerClose from '../../img/icons/burger_menu_cross.svg';
import NiceGadgetsLogo from '../../img/icons/nice_gadgets_burger.svg';
import Favorite from '../../img/icons/favorite.svg';
import Basket from '../../img/icons/shopping_bag.svg';

interface Props {
  onClose: () => void;
}

export const Burger: FC<Props> = ({ onClose }) => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const handleClick = () => {
    onClose();
  };

  const { favContents } = useContext(StoreContext);

  useEffect(() => {
    setFavoriteCount(favContents.length);
  }, [favContents]);

  return (
    <div id="burger" className="burger">
      <header className="burger__header">
        <Link className="burger__header__logo" to="/">
          <img src={NiceGadgetsLogo} alt="logo" />
        </Link>

        <button className="burger__header__close" onClick={onClose}>
          <img src={BurgerClose} alt="burger_close" />
        </button>
      </header>

      <div className="burger_content">
        <nav className="burger__nav">
          <ul className="nav__list--burger">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn('nav__link--burger', {
                    'is-active': isActive,
                  })
                }
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/category/phones"
                className={({ isActive }) =>
                  cn('nav__link--burger', {
                    'is-active': isActive,
                  })
                }
                onClick={handleClick}
              >
                Phones
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/category/tablets"
                className={({ isActive }) =>
                  cn('nav__link--burger', {
                    'is-active': isActive,
                  })
                }
                onClick={handleClick}
              >
                Tablets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/category/accessories"
                className={({ isActive }) =>
                  cn('nav__link--burger', {
                    'is-active': isActive,
                  })
                }
                onClick={handleClick}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="burger__actions">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              cn('actions__favorite', {
                'is-active': isActive,
              })
            }
            onClick={handleClick}
          >
            {favoriteCount > 0 && (
              <span
                className="burger__action__count
"
              >
                {favoriteCount}
              </span>
            )}
            <img
              src={Favorite}
              alt="favourite"
              className="burger__action__image"
            />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('actions__cart', {
                'is-active': isActive,
              })
            }
            onClick={handleClick}
          >
            <span
              className="burger__action__count
"
            >
              {1}
            </span>
            <img src={Basket} alt="cart" className="burger__action__image" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
