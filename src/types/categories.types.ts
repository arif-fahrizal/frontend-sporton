import { MongoResponse } from '@/types/api.types';

export interface Category extends MongoResponse {
  name: string;
  description: string;
  image: string;
}
