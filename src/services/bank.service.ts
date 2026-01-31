import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Bank } from '@/types/banks.types';

export const getAllBanks = async (): Promise<Bank[]> => {
  return await fetchAPI<Bank[]>('/banks');
};

export const getBankById = async (id: string): Promise<Bank> => {
  return await fetchAPI<Bank>(`/banks/${id}`);
};

export const createBank = async (data: FormData): Promise<Bank> => {
  return await fetchAPI<Bank>('/banks', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const updateBank = async (id: string, data: FormData): Promise<Bank> => {
  return await fetchAPI<Bank>(`/banks/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const deleteBank = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`/banks/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });
};
