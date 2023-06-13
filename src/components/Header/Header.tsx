import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/category/phones">Phones</NavLink>
    <NavLink to="/category/tablets">Tablets</NavLink>
    <NavLink to="/category/accessories">Accessories</NavLink>
  </nav>
);
