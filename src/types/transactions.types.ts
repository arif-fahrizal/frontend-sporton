import { BaseResponse } from '@/types';

interface PurchasedItems {
  productId: string;
  qty: number;
}

export interface Transaction extends BaseResponse {
  paymentProof: string;
  status: 'pending' | 'rejected' | 'paid';
  purchasedItems: PurchasedItems[];
  totalPayment: number;
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
}
