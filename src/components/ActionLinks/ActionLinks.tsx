import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ActionLinks.scss';
import Favorite from '../../img/icons/favorite.svg';
import Basket from '../../img/icons/shopping_bag.svg';
import { StoreContext } from '../../context/StoreContext';

export const ActionsLink = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const { favContents } = useContext(StoreContext);

  useEffect(() => {
    setFavoriteCount(favContents.length);
  }, [favContents]);

  return (
    <div className="header__actions">
      <NavLink
        to="/favorites"
        className={({ isActive }) => cn('action', { 'is-active': isActive })}
      >
        {favoriteCount > 0 && (
          <span className="action__count">{favoriteCount}</span>
        )}
        <img src={Favorite} alt="favorites" className="action__image" />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => cn('action', { 'is-active': isActive })}
      >
        <span className="action__count">{1}</span>
        <img src={Basket} alt="cart" className="action__image" />
      </NavLink>
    </div>
  );
};
