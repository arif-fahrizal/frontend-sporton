import { getCookies } from '@/services/auth.service';
import { BaseResponse } from '@/types';

export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<BaseResponse<T>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || 'no-store',
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (error) {
      console.error(error);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export async function getAuthHeaders() {
  const { token } = await getCookies();

  return { Authorization: `Bearer ${token}` };
}

export function getImageUrl(path: string) {
  if (!path) return '';

  if (path.startsWith('http')) return path;

  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}
