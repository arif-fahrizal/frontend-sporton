import { MongoResponse } from '@/types/_index';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User extends MongoResponse {
  name: string;
  email: string;
}
