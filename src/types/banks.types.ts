import { MongoResponse } from '@/types/api.types';

export interface Bank extends MongoResponse {
  bankName: string;
  accountName: string;
  accountNumber: string;
}
