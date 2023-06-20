import { CategoriesTitles } from '../types/CategoriesTitles';

export const pageParam = 'page';
export const sortParam = 'sort';
export const pageLimitParam = 'limit';
export const queryParam = 'query';

export const sortOptions = {
  newest: 'Newest',
  cheapest: 'Price - Low to High',
  expensive: 'Price - High to Low',
  abc: 'Alphabet',
  zyx: 'Alphabet reverse',
};
export const pageLimitOptions = [16, 32];

export const categorTitles: CategoriesTitles = {
  phones: 'Mobile Phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};
