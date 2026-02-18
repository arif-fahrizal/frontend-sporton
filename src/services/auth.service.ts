'use server';

import { fetchAPI } from '@/lib/api';
import { LoginCredentials, User } from '@/types/auth.types';
import { cookies } from 'next/headers';

export const getCookies = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || null;
  const user = cookieStore.get('user')?.value || null;

  return { token, user };
};

export const SignIn = async (credentials: LoginCredentials) => {
  const response = await fetchAPI<User>('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const cookieStore = await cookies();

  const { token, data } = response || {};

  if (token) {
    cookieStore.set('token', token);
    cookieStore.set('user', JSON.stringify(data));
  }

  return response;
};

export const Logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('user');
};
