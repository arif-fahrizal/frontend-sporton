'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { push } = useRouter();
  return (
    <main className="flex justify-center items-center min-h-dvh w-full bg-[#F7F9FA]">
      <div className="max-w-136 w-full py-12 px-18 rounded-xl border-t-4 border-primary bg-white">
        <Image src="/logo/sporton-admin-logo.png" alt="logo" width={304} height={51} className="mx-auto mb-4" />
        <p className="mb-10 text-sm text-center opacity-50">Enter your credentials to access the admin dashboard</p>
        <div className="input-group-admin mb-5">
          <label htmlFor="email" className="text-base">
            Email
          </label>
          <input type="email" id="email" name="email" placeholder="Please type your email" className="rounded-lg!" />
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
          />
        </div>
        <Button className="w-full mb-8 rounded-lg!" onClick={() => push('/admin/products')}>
          Sign In
        </Button>
      </div>
    </main>
  );
}
