'use client';

import { NAV_ADMIN } from '@/utils/navigation.utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed flex flex-col min-h-dvh w-80 top-0 left-0 border-r border-gray-100 bg-white">
      <div className="py-8 px-14 border-b border-gray-200">
        <Image src="/logo/sporton-admin-logo.png" alt="logo" width={215} height={36} />
      </div>
      <div className="flex flex-col gap-2 mt-12 p-5">
        {NAV_ADMIN.map((nav, index) => {
          const isActive = nav.href === pathname;
          return (
            <Link
              key={`${nav.href}-${index}`}
              href={nav.href}
              className={`flex items-center gap-3 py-2 px-4.5 font-medium rounded-lg duration-300 ${isActive ? 'text-primary bg-primary/15' : 'hover:bg-gray-100'}`}
            >
              <nav.icon size={24} />
              <span className="text-sm font-medium">{nav.label}</span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="flex items-center gap-3 mt-auto mx-5 mb-5 py-2 px-4.5 font-medium rounded-lg duration-300 hover:bg-gray-100"
      >
        <FiLogOut size={24} />
        <span className="text-sm font-medium">Logout</span>
      </Link>
    </aside>
  );
}
