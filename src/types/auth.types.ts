import { MongoResponse } from '@/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User extends MongoResponse {
  name: string;
  email: string;
}
