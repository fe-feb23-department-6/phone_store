export interface Phones {
  capacity: string;
  category: string;
  color: string;
  fullPrice: number;
  id: string;
  image: string;
  itemId: string;
  name: string;
  phoneId: string;
  price: number;
  ram: string;
  screen: string;
  year: number;
}

export interface Products {
  currentPage: number;
  totalPages: number;
  products: Phones[];
}
