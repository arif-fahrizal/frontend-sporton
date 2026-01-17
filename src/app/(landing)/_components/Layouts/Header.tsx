'use client';

import CartPopUp from '@/app/(landing)/_components/UI/PopUp/CartPopUp';
import useBoolean from '@/hooks/useBoolean';
import { NAV_HEADER } from '@/utils/navigation.utils';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi';

export default function Header() {
  const isMenuOpen = useBoolean();
  const isCartOpen = useBoolean();

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-5 lg:py-7">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo/sporton-logo-dark.svg"
              alt="Sporton Logo"
              width={127}
              height={30}
              className="w-24 h-auto sm:w-32"
            />
          </Link>

          <nav id="desktop-navigation" className="hidden gap-8 font-medium md:flex xl:gap-44">
            {NAV_HEADER.map((item, index) => (
              <Link
                key={`desktop-navigation-${index}`}
                href={item.href}
                className={
                  index === 0
                    ? "relative after:content-[''] after:absolute after:block after:w-1/2 after:h-1 after:left-1/2 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary hover:text-primary transition-colors"
                    : ''
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative flex items-center gap-6 lg:gap-10">
            <button aria-label="Search">
              <FiSearch size={24} className="w-5.5 h-5.5 md:w-6 md:h-6" />
            </button>
            <button onClick={isCartOpen.toggle} className="relative">
              <FiShoppingBag size={24} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute w-3.5 h-3.5 -top-1 -right-1 text-[10px] flex items-center justify-center text-white rounded-full bg-primary">
                3
              </span>
            </button>
            {isCartOpen.value && <CartPopUp />}
            <button onClick={isMenuOpen.toggle} aria-label="Toggle menu" className="md:hidden">
              {isMenuOpen.value ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`container fixed transition-all duration-300 ease-in-out origin-top bg-white lg:hidden ${
            isMenuOpen.value ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
          }`}
        >
          <nav
            id="mobile-navigation"
            className={`mt-6 pt-4 pb-4 space-y-4 border-t transform transition-transform duration-300 ${
              isMenuOpen.value ? 'translate-y-0' : '-translate-y-2'
            }`}
          >
            {NAV_HEADER.map((item, index) => (
              <Link key={`mobile-navigation-${index}`} href={item.href} className="block font-medium">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
