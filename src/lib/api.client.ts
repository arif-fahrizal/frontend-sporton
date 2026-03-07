import { getCookies } from '@/services/auth.service';
import { SuccessResponse } from '@/types/api.types';

export async function getAuthHeaders() {
  const { token } = await getCookies();

  return { Authorization: `Bearer ${token}` };
}

export function getImageUrl(path: string) {
  if (!path) return '';

  if (path.startsWith('http')) return path;

  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit & { params?: Record<string, string | number | null | undefined> }
): Promise<SuccessResponse<T>> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), { ...options, cache: options?.cache || 'no-store' });

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
