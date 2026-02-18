import { fetchAPI, getAuthHeaders } from '@/lib/api';
import { Product } from '@/types/products.types';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetchAPI<Product[]>('/products');

  return response?.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetchAPI<Product>(`/products/${id}`);

  return response?.data;
};

export const createProduct = async (data: FormData): Promise<Product> => {
  const response = await fetchAPI<Product>('/products', {
    method: 'POST',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};

export const updateProduct = async (id: string, data: FormData): Promise<Product> => {
  const response = await fetchAPI<Product>(`/products/${id}`, {
    method: 'PUT',
    headers: {
      ...(await getAuthHeaders()),
    },
    body: data,
  });

  return response?.data;
};
export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetchAPI<void>(`/products/${id}`, {
    method: 'DELETE',
    headers: {
      ...(await getAuthHeaders()),
    },
  });

  return response?.data;
};
