import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Transaction } from '@/types/transactions.types';

export const getAllTransactions = async (): Promise<Transaction[]> => {
  const response = await fetchAPI<Transaction[]>('/transactions', {
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  return response?.data;
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
  const response = await fetchAPI<Transaction>(`/transactions/${id}`);
  return response?.data;
};

export const createTransaction = async (data: FormData): Promise<Transaction> => {
  const response = await fetchAPI<Transaction>('/transactions', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};

export const transactionCheckout = async (data: FormData): Promise<Transaction> => {
  const response = await fetchAPI<Transaction>('/transaction/checkout', {
    method: 'POST',
    body: data,
  });

  return response?.data;
};

export const updateTransaction = async (id: string, data: FormData): Promise<Transaction> => {
  const response = await fetchAPI<Transaction>(`/transactions/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/transactions/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  return response?.data;
};
