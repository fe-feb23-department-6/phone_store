import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { Burger } from '../Burger';
import { MenuLinks } from '../MenuLinks';
import { ActionsLink } from '../ActionLinks';
import BurgerMenu from '../../img/icons/burger.svg';
import NiceGadgetsLogo from '../../img/icons/nice_gadgets.svg';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header__nav">
          <Link className="header__logo" to="/">
            <img src={NiceGadgetsLogo} alt="logo" />
          </Link>

          <MenuLinks />
        </div>

        <ActionsLink />
        <button className="burger__menu" onClick={handleMenuClick}>
          <img src={BurgerMenu} alt="burger_menu" />
        </button>
      </header>
      {isMenuOpen && <Burger onClose={handleCloseMenu} />}
    </>
  );
};
