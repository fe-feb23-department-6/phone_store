import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ActionLinks.scss';
import Favorite from '../../img/icons/favorite.svg';
import Login from '../../img/icons/login.svg';
import LoginActive from '../../img/icons/login_active.svg';
import Basket from '../../img/icons/shopping_bag.svg';
import { StoreContext } from '../../context/StoreContext';
import { AuthContext } from '../../context/AuthContext';

export const ActionsLink = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { favContents, cartContents } = useContext(StoreContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setCartCount(cartContents.length);
  }, [cartContents]);

  useEffect(() => {
    setFavoriteCount(favContents.length);
  }, [favContents]);

  return (
    <div className="header__actions">
      <NavLink
        to={user ? '/account' : '/login'}
        className={({ isActive }) => cn('action', { 'is-active': isActive })}
      >
        {user ? (
          <img src={LoginActive} alt="favorites" className="action__image" />
        ) : (
          <img src={Login} alt="favorites" className="action__image" />
        )}
      </NavLink>
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
        {cartCount > 0 && <span className="action__count">{cartCount}</span>}
        <img src={Basket} alt="cart" className="action__image" />
      </NavLink>
    </div>
  );
};
