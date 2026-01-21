import { fetchAPI } from '@/lib/api';
import { Category } from '@/types/categories.types';

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>('/categories');
};

export const getCategoryById = async (id: string): Promise<Category> => {
  return await fetchAPI<Category>(`/categories/${id}`);
};
