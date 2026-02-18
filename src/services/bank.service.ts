import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Bank } from '@/types/banks.types';

export const getAllBanks = async (): Promise<Bank[]> => {
  const response = await fetchAPI<Bank[]>('/banks');

  return response?.data;
};

export const getBankById = async (id: string): Promise<Bank> => {
  const response = await fetchAPI<Bank>(`/banks/${id}`);

  return response?.data;
};

export const createBank = async (data: Partial<Bank>): Promise<Bank> => {
  const response = await fetchAPI<Bank>('/banks', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: JSON.stringify(data),
  });

  return response?.data;
};

export const updateBank = async (id: string, data: Partial<Bank>): Promise<Bank> => {
  const response = await fetchAPI<Bank>(`/banks/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: JSON.stringify(data),
  });

  return response?.data;
};

export const deleteBank = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/banks/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  return response?.data;
};
