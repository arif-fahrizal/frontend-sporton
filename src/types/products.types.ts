import { MongoResponse } from '@/types';
import { Category } from '@/types/categories.types';

export interface Product extends MongoResponse {
  name: string;
  description: string;
  image: string;
  category: Category;
  stock: number;
  price: number;
}
