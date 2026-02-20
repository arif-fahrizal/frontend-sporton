'use client';

import { NAV_FOOTER, SOCIAL_MEDIA } from '@/utils/navigation.utils';
import Image from 'next/image';
import Link from 'next/link';

const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="px-4 text-white bg-dark-alternate">
      <div className="container flex flex-col gap-10 mx-auto pt-12 pb-23 md:flex-row md:justify-between">
        <div className="w-full md:max-w-[45ch]">
          <Image
            src="/logo/sporton-logo-light.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
            className="mx-auto md:mx-0"
          />
          <p className="mt-8 text-center md:text-left">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do.
          </p>
        </div>
        <div className="flex justify-center gap-10 w-full md:w-auto lg:gap-20">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {NAV_FOOTER.map((item, index) => (
              <Link key={`navigation-footer-${index}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {SOCIAL_MEDIA.map((item, index) => (
              <Link key={`social-media-${index}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container flex flex-col-reverse gap-8 mx-auto py-6.5 text-center sm:flex-row sm:justify-between">
          <span className="text-sm sm:text-base">SportOn © {currentYear} All Rights Reserverd.</span>

          <div className="flex justify-center items-center gap-10">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
