import Button from '@/app/(landing)/_components/UI/Button';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import { FiArrowRight, FiTrash2 } from 'react-icons/fi';

const CART_LIST = [
  {
    name: 'SportsOn Product 1',
    category: 'Running',
    price: 450000,
    qty: 5,
    image: 'shoes-white-red.png',
  },
  {
    name: 'SportsOn Product 2',
    category: 'Tennis',
    price: 250000,
    qty: 2,
    image: 'racket-black.png',
  },
  {
    name: 'SportsOn Product 3',
    category: 'Clothing',
    price: 230000,
    qty: 5,
    image: 'jersey-red.png',
  },
];

const TOTAL_PRICE = CART_LIST.reduce((acc, item) => acc + item.price * item.qty, 0);

export default function CartPopUp() {
  return (
    <div className="absolute w-90 top-[150%] right-0 border border-gray-200 bg-white shadow-xl shadow-black/10 z-99">
      <h2 className="p-4 text-center font-bold border-b border-gray-200">sporton</h2>
      {CART_LIST.map((item, index) => (
        <div key={`cart-item-${index}`} className="flex gap-3 p-4 border-b border-gray-200">
          <div className="flex justify-center items-center w-16 aspect-square bg-primary-light">
            <Image
              src={`/products/${item.image}`}
              alt={item.name}
              width={63}
              height={63}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <span className="text-sm font-medium">{item.name}</span>
            <div className="flex gap-3 text-xs font-medium">
              <span>{item.qty}x</span>
              <span className="text-primary">{formatRupiah(item.price)}</span>
            </div>
          </div>
          <Button size="small" variant="ghost" className="self-center w-7 h-7 ml-auto p-0!">
            <FiTrash2 />
          </Button>
        </div>
      ))}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span className="text-sm">Total</span>
          <span className="text-xs text-primary">{formatRupiah(TOTAL_PRICE)}</span>
        </div>
        <Button size="small" variant="dark" className="w-full mt-4">
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
}
