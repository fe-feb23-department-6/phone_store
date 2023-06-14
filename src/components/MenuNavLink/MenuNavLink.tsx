import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import './MenuNavLink.scss';

interface Props {
  to: string;
  text: string;
}

export const MenuNavLink: FC<Props> = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => cn('nav__link', { 'is-active': isActive })}
    >
      {text}
    </NavLink>
  </li>
);
