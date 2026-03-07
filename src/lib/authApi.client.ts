import { AuthResponse } from '@/types/api.types';

export async function AuthAPI(endpoint: string, options?: RequestInit): Promise<AuthResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || 'no-store',
  });

  if (!response.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (error) {
      console.error(error);
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
