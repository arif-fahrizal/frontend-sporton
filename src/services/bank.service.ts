import { fetchAPI, getAuthHeaders } from '@/lib/api.client';
import { MetaResponse } from '@/types/api.types';
import { Bank } from '@/types/banks.types';

export const getAllBanks = async (): Promise<{ data: Bank[]; meta: MetaResponse }> => {
  const response = await fetchAPI<Bank[]>('/banks');

  if (!response.data || !response.meta) return { data: [], meta: {} as MetaResponse };

  return { data: response?.data, meta: response?.meta };
};

export const getBankById = async (id: string): Promise<Bank> => {
  const response = await fetchAPI<Bank>(`/banks/${id}`);

  if (!response.data) return {} as Bank;

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

  if (!response.data) return {} as Bank;

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

  if (!response.data) return {} as Bank;

  return response?.data;
};

export const deleteBank = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/banks/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  if (!response.data) return;

  return response?.data;
};
