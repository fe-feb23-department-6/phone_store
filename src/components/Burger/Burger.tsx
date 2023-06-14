import React, { FC } from 'react';
import NiceGadgetsLogo from '../../img/nice_gadgets.png';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  handleClick: () => void;
  isActive: boolean;
}

export const Burger: FC<Props> = ({ handleClick, isActive }) => (
  <div className={cn('burger', { active: isActive })} id="burger">
    <Link className="header__logo" to={'/'} onClick={handleClick}>
      <img src={NiceGadgetsLogo} alt="logo" />
    </Link>
  </div>
);
