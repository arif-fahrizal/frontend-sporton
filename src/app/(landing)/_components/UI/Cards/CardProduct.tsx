import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

interface TCardProductProps {
  name: string;
  image: string;
  category: string;
  price: number;
}

const formatRupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 3,
  }).format(value);

export default function CardProduct({ name, category, price, image }: Readonly<TCardProductProps>) {
  return (
    <Link href="#" className="p-1.5 duration-300 bg-white hover:drop-shadow-xl">
      <div className="relative flex justify-center items-center w-full aspect-square bg-primary-light">
        <Image src={image} alt={name} width={300} height={300} className="aspect-square object-contain" />
        <Button className="absolute w-10 h-10 top-3 right-3 p-2!">
          <FiPlus size={24} />
        </Button>
      </div>
      <h3 className="mt-4 mb-1.5 text-lg font-medium">{name}</h3>
      <div className="flex justify-between mb-8">
        <div className="text-gray-500">{category}</div>
        <div className="text-primary font-medium">{formatRupiah(price)}</div>
      </div>
    </Link>
  );
}
