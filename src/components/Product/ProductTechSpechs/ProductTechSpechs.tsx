import React from 'react';
import './ProductTechSpechs.scss';
import { FullProductData } from '../../../types/FullProductData';

/* interface Props {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  camera: string;
  zoom: string;
  cell: string[];
} */

type Props = {
  product: FullProductData;
};

export const ProductTechSpechs: React.FC<Props> = ({ product }) => {
  const {
    screen: prodScreen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = product;

  return (
    <section className="tech-spechs product-page__section">
      <h3 className="tech-spechs__title">Tech Specs</h3>

      <div className="product-card__phone-info phone-info">
        <div className="phone-info__param">
          <div className="phone-info__param-text">Screen</div>
          <div className="phone-info__param-size">{prodScreen}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Resolution</div>
          <div className="phone-info__param-size">{resolution}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Processor</div>
          <div className="phone-info__param-size">{processor}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">RAM</div>
          <div className="phone-info__param-size">{ram}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Built-in memory</div>
          <div className="phone-info__param-size">{capacity}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Camera</div>
          <div className="phone-info__param-size">{camera}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Zoom</div>
          <div className="phone-info__param-size">{zoom}</div>
        </div>

        <div className="phone-info__param">
          <div className="phone-info__param-text">Cell</div>
          <div className="phone-info__param-size">{cell.join(', ')}</div>
        </div>
      </div>
    </section>
  );
};
