import { Breadcrumbs } from '../components/Breadcrumbs';
import { Contact } from '../components/Contact';
import { contacts } from '../components/Contact/contacts';
import './PagesStyles/Contacts.scss';

export const Contacts = () => (
  <div className="contacts-page">
    <Breadcrumbs page="Contacts" />

    <h1 className="contacts-page__title">Contacts</h1>

    <div className="contacts-page__wrapper">
      <div className="contacts-page__container">
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.personId} />
        ))}
      </div>
    </div>
  </div>
);
