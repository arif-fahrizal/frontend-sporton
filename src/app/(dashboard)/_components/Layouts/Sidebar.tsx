'use client';

import useBoolean from '@/hooks/useBoolean';
import { Logout } from '@/services/auth.service';
import { NAV_ADMIN } from '@/utils/navigation.utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Sidebar() {
  const pathname = usePathname();
  const { push } = useRouter();
  const { value: isMenuOpen, toggle } = useBoolean();

  const handleLogout = () => {
    Logout();
    push('/admin/sign-in');
  };

  return (
    <aside className="fixed flex flex-col lg:min-h-dvh w-full lg:w-60 xl:w-80 top-0 left-0">
      <div className="flex lg:block justify-between items-center p-5 lg:px-8 xl:py-8 xl:px-14 border-r border-b border-gray-100 bg-white">
        <Image src="/logo/sporton-admin-logo.png" alt="logo" width={215} height={36} />
        <button type="button" onClick={toggle} className="lg:hidden">
          <RxHamburgerMenu size={24} />
        </button>
      </div>
      <div
        className={`absolute lg:static flex flex-col w-full lg:h-[calc(100vh-118px)] top-16 ${isMenuOpen ? 'left-0' : '-left-full'} lg:left-0 lg:mt-12 p-5 border-r border-gray-100 duration-300 bg-white z-10`}
      >
        <div className="flex flex-col gap-2">
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
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 w-full mt-10 lg:mt-auto py-2 px-4.5 font-medium rounded-lg duration-300 hover:bg-gray-100"
        >
          <FiLogOut size={24} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
