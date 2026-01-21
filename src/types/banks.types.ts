import { BaseResponse } from '@/types';

export interface Bank extends BaseResponse {
  bankName: string;
  accountName: string;
  accountNumber: string;
}
