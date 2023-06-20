import { Link } from 'react-router-dom';

import './Footer.scss';
import Logo from '../../img/nice_gadgets_logo.png';
import BackToTop from '../../img/back_to_top.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="store-footer">
      <div className="store-footer__content">
        <Link className="store-footer__logo store-footer__link" to="/">
          <img src={Logo} alt="Nice Gadgets logo" />
        </Link>

        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a
                className="footer-nav__link"
                href="https://github.com/fe-feb23-department-6/phone_store"
                target="_blank"
              >
                Github
              </a>
            </li>

            <li className="footer-nav__item">
              <Link className="footer-nav__link" to="/contacts">
                Contacts
              </Link>
            </li>

            <li className="footer-nav__item">
              <Link className="footer-nav__link" to="/rights">
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <a className="store-footer__link" href="#">
          <div className="store-footer__back-link" onClick={scrollToTop}>
            <span>Back to top</span>
            <img className="footer-icon" src={BackToTop} />
          </div>
        </a>
      </div>
    </footer>
  );
};
