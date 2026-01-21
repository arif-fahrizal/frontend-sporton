import { fetchAPI } from '@/lib/api';
import { Bank } from '@/types/banks.types';

export const getAllBanks = async (): Promise<Bank[]> => {
  return await fetchAPI<Bank[]>('/banks');
};

export const getBankById = async (id: string): Promise<Bank> => {
  return await fetchAPI<Bank>(`/banks/${id}`);
};
