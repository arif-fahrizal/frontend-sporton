import { fetchAPI, getAuthHeaders } from '@/lib/api.client';
import { Category } from '@/types/categories.types';

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetchAPI<Category[]>('/categories');

  if (!response.data) return [];

  return response?.data;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await fetchAPI<Category>(`/categories/${id}`);

  if (!response.data) return {} as Category;

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

  if (!response.data) return {} as Category;

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

  if (!response.data) return {} as Category;

  return response?.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/categories/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  if (!response.data) return;

  return response?.data;
};
