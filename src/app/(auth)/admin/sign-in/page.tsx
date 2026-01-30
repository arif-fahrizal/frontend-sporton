'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import { getCookies, SignIn } from '@/services/auth.service';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCookies().then(({ token }) => {
      if (token) {
        push('/admin/products');
      }
    });
  }, [push]);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const data = await SignIn({ email, password });

      if (data.token) {
        push('/admin/products');
      }
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message || 'Something went wrong. Please try again.');
      // setErrorMessage(error?.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-dvh w-full bg-[#F7F9FA]">
      <form
        action={handleSignIn}
        className="max-w-136 w-full py-12 px-18 rounded-xl border-t-4 border-primary bg-white"
      >
        <Image src="/logo/sporton-admin-logo.png" alt="logo" width={304} height={51} className="mx-auto mb-4" />
        <p className="mb-10 text-sm text-center opacity-50">Enter your credentials to access the admin dashboard</p>
        {errorMessage && (
          <p className="w-full mb-2.5 py-1 px-3 text-sm text-center text-primary rounded-md border border-primary bg-primary-light">
            {errorMessage}
          </p>
        )}
        <div className="input-group-admin mb-5">
          <label htmlFor="email" className="text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please type your email"
            className="rounded-lg!"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group-admin mb-12">
          <label htmlFor="password" className="text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••••••••••••"
            className="rounded-lg!"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full mb-8 rounded-lg!">{isLoading ? 'Signin ...' : 'Sign In'}</Button>
      </form>
    </main>
  );
}

// User: admin@sporton.com
// Adm1NSp0rt2530
