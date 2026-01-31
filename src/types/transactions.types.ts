import { BaseResponse } from '@/types';
import { Product } from '@/types/products.types';

interface PurchasedItems {
  productId: Product;
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
