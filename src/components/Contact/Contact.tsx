import React from 'react';
import './Contact.scss';
import { ContactData } from '../../types/ContactData';
import Gmail from './img/icons/gmail.svg';
import Linkedin from './img/icons/linkedin.svg';
import Github from './img/icons/github.svg';
import Telegram from './img/icons/telegram.svg';

interface Props {
  contact: ContactData;
}

export const Contact: React.FC<Props> = ({ contact }) => {
  const { personName, personId, gmail, linkedin, github, telegram } = contact;

  return (
    <div className="contact-item">
      <div className="contact-item__person-img-container">
        <img
          className="contact-item__person-img"
          src={require(`./img/person-${personId}.jpg`)}
          alt="person"
        />
      </div>

      <div className="contact-item__person-info">
        <h3 className="contact-item__person-name">{personName}</h3>

        <div className="contact-item__social-media social-media">
          <div className="social-media__icon-container">
            <a href={contact.gmail}>
              <img className="social-media__icon" src={Gmail} alt={gmail} />
            </a>
          </div>

          <a href={contact.linkedin}>
            <div className="social-media__icon-container">
              <img
                className="social-media__icon"
                src={Linkedin}
                alt={linkedin}
              />
            </div>
          </a>

          <a href={contact.github}>
            <div className="social-media__icon-container">
              <img className="social-media__icon" src={Github} alt={github} />
            </div>
          </a>

          <a href={contact.telegram}>
            <div className="social-media__icon-container">
              <img
                className="social-media__icon"
                src={Telegram}
                alt={telegram}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
