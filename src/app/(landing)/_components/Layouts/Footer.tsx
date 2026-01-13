import { NAV_FOOTER, SOCIAL_MEDIA } from '@/utils/navigation.utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-52 text-white bg-dark-alternate">
      <div className="container flex justify-between mx-auto pt-14 pb-24">
        <div className="w-105">
          <Image src="/logo/sporton-logo-light.svg" alt="logo sporton footer" width={187} height={44} />
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 w-105">
          <div className="flex flex-col gap-7">
            {NAV_FOOTER.map(item => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-7">
            {SOCIAL_MEDIA.map(item => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container flex justify-between mx-auto py-6.5">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
