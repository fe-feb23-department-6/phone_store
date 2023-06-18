import React from 'react';
import './ProductTechSpechs.scss';

interface Props {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export const ProductTechSpechs: React.FC<Props> = ({
  // eslint-disable-next-line no-shadow
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => (
  <section className="tech-spechs product-page__section">
    <h3 className="tech-spechs__title">Tech Specs</h3>

    <div className="product-card__phone-info phone-info">
      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Screen</div>
        <div className="phone-info__parameter-size">{screen}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Resolution</div>
        <div className="phone-info__parameter-size">{resolution}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Processor</div>
        <div className="phone-info__parameter-size">{processor}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">RAM</div>
        <div className="phone-info__parameter-size">{ram}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Built-in memory</div>
        <div className="phone-info__parameter-size">{capacity}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Camera</div>
        <div className="phone-info__parameter-size">{camera}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Zoom</div>
        <div className="phone-info__parameter-size">{zoom}</div>
      </div>

      <div className="phone-info__parameter">
        <div className="phone-info__parameter-text">Cell</div>
        <div className="phone-info__parameter-size">{cell.join(', ')}</div>
      </div>
    </div>
  </section>
);