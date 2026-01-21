'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import { useCartStore } from '@/hooks/useCartStore';
import { getImageUrl } from '@/lib/api';
import { Product } from '@/types/products.types';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

interface TCardProductProps {
  href?: string;
  product: Product;
}

export default function CardProduct({ href = '#', product }: TCardProductProps) {
  const { name, imageUrl, category, price } = product;

  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link href={href} className="p-1.5 duration-300 bg-white hover:drop-shadow-xl">
      <div className="relative flex justify-center items-center w-full aspect-square bg-primary-light">
        <Image
          src={getImageUrl(imageUrl)}
          alt={name}
          width={300}
          height={300}
          className="aspect-square object-contain"
        />
        <Button onClick={handleAddToCart} className="absolute size-6 top-2.5 right-2.5 p-1! sm:size-8 lg:size-10">
          <FiPlus size={24} />
        </Button>
      </div>
      <h3 title={name} className="mt-4 mb-1.5 text-xs line-clamp-1 font-medium md:text-base lg:text-lg">
        {name}
      </h3>
      <div className="flex flex-col justify-between gap-1.5 text-xs sm:flex-row md:mb-2.5 md:text-sm lg:text-base">
        <div className="max-w-[10ch] truncate text-gray-500">{category.name}</div>
        <div className="text-primary text-right font-medium">{formatRupiah(price)}</div>
      </div>
    </Link>
  );
}
