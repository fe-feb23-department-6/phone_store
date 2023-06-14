import React from 'react';
import './MenuLink.scss';
import { MenuNavLink } from '../MenuNavLink';

const MenuLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

export const MenuLink = () => (
  <nav>
    <ul className="nav__list">
      {MenuLinks.map(({ to, text }) => (
        <MenuNavLink key={to} to={to} text={text} />
      ))}
    </ul>
  </nav>
);
