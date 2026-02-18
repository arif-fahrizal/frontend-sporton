import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Category } from '@/types/categories.types';

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetchAPI<Category[]>('/categories');

  return response?.data;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await fetchAPI<Category>(`/categories/${id}`);

  return response?.data;
};

export const createCategory = async (data: FormData): Promise<Category> => {
  const response = await fetchAPI<Category>('/categories', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};

export const updateCategory = async (id: string, data: FormData): Promise<Category> => {
  const response = await fetchAPI<Category>(`/categories/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/categories/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  return response?.data;
};
