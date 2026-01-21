import { fetchAPI } from '@/lib/api';
import { Transaction } from '@/types/transactions.types';

export const getTransactionById = async (id: string): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`);
};

export const transactionCheckout = async (data: FormData): Promise<Transaction> => {
  return await fetchAPI<Transaction>('/transaction/checkout', {
    method: 'POST',
    body: data,
  });
};
