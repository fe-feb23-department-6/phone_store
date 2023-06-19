import { GoHomeButton } from '../components/GoHomeButton';
import './PagesStyles/Favorites.scss';

export const Favorites = () => (
  <div className='favorites'>
    <GoHomeButton />
    <h1 className='favorites__title'>Favorites</h1>
  </div>
);
