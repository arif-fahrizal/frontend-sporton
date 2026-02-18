import { MongoResponse } from '@/types';

export interface Bank extends MongoResponse {
  bankName: string;
  accountName: string;
  accountNumber: string;
}
