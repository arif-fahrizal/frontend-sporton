'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import { useCartStore } from '@/hooks/useCartStore';
import { Product } from '@/types/products.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from 'react-icons/fi';

interface TProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: Readonly<TProductActionsProps>) {
  const { push } = useRouter();
  const { addItem, items } = useCartStore();

  const [qty, setQty] = useState<number>(1);

  const handleAddQty = () => setQty(prev => (prev === product.stock ? prev : prev + 1));
  const handleSubQty = () => setQty(prev => Math.max(prev - 1, 1));
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const currentCartQty = items.find(item => item._id === product._id)?.qty || 0;
    const availableStock = product.stock - currentCartQty;
    const qtyToAdd = Math.min(qty, availableStock);

    addItem(product, qtyToAdd);
  };

  return (
    <div className="grid grid-cols-[5rem_1fr] gap-2.5 lg:flex lg:gap-5">
      <div className="flex min-w-20.5 max-w-20.5 border border-gray-500 overflow-hidden">
        <input
          type="number"
          value={qty}
          min={1}
          readOnly
          className="w-13 text-xl text-center font-medium border-r border-gray-500 outline-none bg-white"
        />

        <div className="grid grid-rows-2 w-full">
          <button
            type="button"
            onClick={handleAddQty}
            className="flex justify-center items-center w-full h-full border-b border-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            <FiChevronUp size={20} />
          </button>
          <button
            type="button"
            onClick={handleSubQty}
            className="flex justify-center items-center w-full h-full hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <FiChevronDown size={20} />
          </button>
        </div>
      </div>
      <Button onClick={e => handleAddToCart(e)} className="w-full h-full py-2.5! lg:py-4! lg:px-5 2xl:px-20">
        <FiShoppingBag size={24} />
        <span>Add to Cart</span>
      </Button>
      <Button
        variant="dark"
        className="w-full h-full py-2.5! col-span-2 lg:py-4! lg:px-5 2xl:px-20"
        onClick={() => push('/checkouts')}
      >
        <span>Checkout Now</span>
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
}
