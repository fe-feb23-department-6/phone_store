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

      <h3 className="contact-item__person-name">{personName}</h3>

      <div className="contact-item__person-info">
        <div className="contact-item__social-media social-media">
          <div className="social-media__gmail-linkedin">
            <a href={contact.gmail} target="_blank">
              <div className="social-media__icon-container">
                <img className="social-media__icon" src={Gmail} alt={gmail} />
              </div>
            </a>

            <a href={contact.linkedin} target="_blank">
              <div className="social-media__icon-container">
                <img
                  className="social-media__icon"
                  src={Linkedin}
                  alt={linkedin}
                />
              </div>
            </a>
          </div>

          <div className="social-media__github-telegram">
            <a href={contact.github} target="_blank">
              <div className="social-media__icon-container">
                <img className="social-media__icon" src={Github} alt={github} />
              </div>
            </a>

            <a href={contact.telegram} target="_blank">
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
    </div>
  );
};
