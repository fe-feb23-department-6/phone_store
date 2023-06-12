import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import Logo from '../../img/nice_gadgets_logo.png';
import BackToTop from '../../img/back_to_top.svg';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__content">
      <Link className="footer__logo footer__link" to="/">
        <img src={Logo} alt="Nice Gadgets logo" />
      </Link>

      <nav className="footer-nav">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <a
              className="footer-nav__link"
              href="/"
            >
              Github
            </a>
          </li>
          <li className="footer-nav__item">
            <Link
              className="footer-nav__link"
              to="/"
            >
              Contacts
            </Link>
          </li>
          <li className="footer-nav__item">
            <Link
              className="footer-nav__link"
              to="/"
            >
              Rights
            </Link>
          </li>
        </ul>
      </nav>

      <Link className="footer__link" to="/">
        <div className="footer__back-link">
          <span>Back to top</span>
          <img className="footer-icon" src={BackToTop} />
        </div>
      </Link>
    </div>
  </footer>
);
