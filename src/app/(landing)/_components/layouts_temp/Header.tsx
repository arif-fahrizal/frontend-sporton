import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

export default function Header() {
  return (
    <header>
      <div className="container flex justify-between gap-10 mx-auto py-7">
        <Image src="/logo/sporton-logo-dark.svg" alt="Sporton Logo" width={127} height={30} />
        <nav className="flex gap-44 font-medium">
          <Link
            href=""
            className="relative after:content-[''] after:absolute after:block after:w-1/2 after:h-1 after:left-1/2 after:-translate-1/2 after:translate-y-1 after:rounded-full after:bg-primary"
          >
            Home
          </Link>
          <Link href="">Category</Link>
          <Link href="">Explore Products</Link>
        </nav>
        <div className="flex gap-10">
          <FiSearch size={24} />
          <div className="relative">
            <FiShoppingBag size={24} />
            <div className="absolute w-3.5 h-3.5 -top-1 -right-1 text-[10px] text-center text-white rounded-full bg-primary">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
