import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <nav>
    <ul>
      <li>
        <Link to="#">Github</Link>
      </li>
      <li>
        <Link to="#">Contacts</Link>
      </li>
      <li>
        <Link to="#">Rights</Link>
      </li>
    </ul>
  </nav>
);
