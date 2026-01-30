'use server';

import { fetchAPI } from '@/lib/api';
import { LoginCredentials, LoginResponse } from '@/types/auth.types';
import { cookies } from 'next/headers';

export const getCookies = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || null;
  const user = cookieStore.get('user')?.value || null;

  return { token, user };
};

export const SignIn = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const res = await fetchAPI<LoginResponse>('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const cookieStore = await cookies();

  if (res.token) {
    cookieStore.set('token', res.token);
    cookieStore.set('user', JSON.stringify(res.user));
  }

  return res;
};

export const Logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('user');
};
