import { fetchAPI } from '@/lib/api';
import { Product } from '@/types/products.type';

export const getAllProducts = async (): Promise<Product[]> => {
  return await fetchAPI<Product[]>('/products');
};

export const getSingleProduct = async (id: string): Promise<Product> => {
  return await fetchAPI<Product>(`/products/${id}`);
};
