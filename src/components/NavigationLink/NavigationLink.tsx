import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
  to: string;
  title: string;
}

export const NavigationLink: React.FC<Props> = ({ className, to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(`${className}`, {
        'is-active': isActive,
      })
    }
  >
    {title}
  </NavLink>
);
