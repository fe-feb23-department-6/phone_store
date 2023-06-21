/* eslint-disable max-len */
import { Breadcrumbs } from '../components/Breadcrumbs';
import './PagesStyles/Rights.scss';

export const Rights = () => (
  <div className="rights">
    <Breadcrumbs page="Rights" />

    <h2 className="rights__title">Rights</h2>

    <div className="rights__rights-container rights-container">
      <ul className="rights-container__categories-list">
        <li>
          <h3 className="rights-container__title">Ownership Rights:</h3>

          <ul className="rights-container__rights-list">
            <li>
              The store has the right to sell smartphones and tablets as
              products in its inventory.
            </li>
            <li>
              The store has the right to display and advertise the smartphones
              and tablets for sale.
            </li>
            <li>
              The store has the right to set prices, promotions, and discounts
              for the smartphones and tablets.
            </li>
          </ul>
        </li>

        <li>
          <h3 className="rights-container__title">
            Intellectual Property Rights:
          </h3>

          <ul className="rights-container__rights-list">
            <li>
              The store acknowledges and respects the intellectual property
              rights of smartphone and tablet manufacturers.
            </li>
            <li>
              The store does not engage in any unauthorized reproduction,
              modification, or distribution of copyrighted materials, including
              software, applications, or content on smartphones and tablets.
            </li>
            <li>
              The store does not claim ownership over trademarks, logos, or
              branding of smartphone and tablet manufacturers.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="rights-container__title">Consumer Rights:</h3>

          <ul className="rights-container__rights-list">
            <li>
              The store respects the rights of consumers and provides accurate
              information about the specifications, features, and warranties of
              smartphones and tablets.
            </li>
            <li>
              The store ensures that the smartphones and tablets sold are
              genuine, in working condition, and free from defects.
            </li>
            <li>
              The store provides a clear and fair return policy for defective
              products or cases where customers are not satisfied with their
              purchase.
            </li>
            <li>
              The store handles customer data and personal information with
              utmost confidentiality and adheres to relevant data protection
              regulations.
            </li>
          </ul>
        </li>

        <li>
          <h3 className="rights-container__title">
            Compliance with Regulations:
          </h3>

          <ul className="rights-container__rights-list">
            <li>
              The store complies with all applicable laws, regulations, and
              industry standards related to the sale and distribution of
              smartphones and tablets.
            </li>
            <li>
              The store ensures that smartphones and tablets meet safety
              standards and regulations set by relevant authorities.
            </li>
            <li>
              The store follows proper procedures for warranty claims, repairs,
              and replacements in accordance with consumer protection laws.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="rights-container__title">Ethical considerations</h3>

          <ul className="rights-container__rights-list">
            <li>
              The store respects customer privacy and ensures that personal
              information is collected, stored, and used in compliance with
              applicable privacy laws.
            </li>
            <li>
              The store refrains from engaging in deceptive practices, such as
              false advertising, misleading product descriptions, or
              unauthorized use of customer data.
            </li>
            <li>
              The store promotes ethical business conduct, fair competition, and
              transparency in its operations.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);
