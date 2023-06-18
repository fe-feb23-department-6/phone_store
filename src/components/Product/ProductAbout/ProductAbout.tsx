import React from 'react';
import { ProductDescriptionItem } from '../../../types/ProductDescriptionItem';
import './ProductAbout.scss';

interface Props {
  description: ProductDescriptionItem[];
}

export const ProductAbout: React.FC<Props> = ({ description }) => (
  <section className="product-page__section about">
    <h3 className="about__title">About</h3>

    {description.map((characteristics) => (
      <div
        className="about__characteristics"
        key={characteristics.title}
      >
        <h4 className="about__characteristics-subtitle">
          {characteristics.title}
        </h4>

        <p className="about__characteristics-text">
          {characteristics.text}
        </p>
      </div>
    ))}
  </section>
);
