import { MongoResponse } from '@/types/api.types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User extends MongoResponse {
  name: string;
  email: string;
}
