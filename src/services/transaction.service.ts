import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Transaction } from '@/types/transactions.types';

export const getAllTransactions = async (): Promise<Transaction[]> => {
  return await fetchAPI<Transaction[]>('/transactions', {
    headers: {
      ...(await getAuthHeaders()),
    },
  });
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`);
};

export const createTransaction = async (data: FormData): Promise<Transaction> => {
  return await fetchAPI<Transaction>('/transactions', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const transactionCheckout = async (data: FormData): Promise<Transaction> => {
  return await fetchAPI<Transaction>('/transaction/checkout', {
    method: 'POST',
    body: data,
  });
};

export const updateTransaction = async (id: string, data: FormData): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const deleteTransaction = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`/transactions/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });
};
