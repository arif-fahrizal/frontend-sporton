import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Category } from '@/types/categories.types';

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>('/categories');
};

export const getCategoryById = async (id: string): Promise<Category> => {
  return await fetchAPI<Category>(`/categories/${id}`);
};

export const createCategory = async (data: FormData): Promise<Category> => {
  return await fetchAPI<Category>('/categories', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const updateCategory = async (id: string, data: FormData): Promise<Category> => {
  return await fetchAPI<Category>(`/categories/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });
};

export const deleteCategory = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`/categories/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });
};
