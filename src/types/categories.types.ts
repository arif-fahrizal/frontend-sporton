import { MongoResponse } from '@/types';

export interface Category extends MongoResponse {
  name: string;
  description: string;
  image: string;
}
