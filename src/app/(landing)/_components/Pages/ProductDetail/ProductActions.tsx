'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import { useState } from 'react';
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from 'react-icons/fi';

export default function ProductActions() {
  const [qty, setQty] = useState<number>(1);

  const handleAddQty = () => setQty(prev => prev + 1);
  const handleSubQty = () => setQty(prev => Math.max(prev - 1, 1));

  return (
    <div className="flex gap-5">
      <div className="flex min-w-20.5 border border-gray-500 overflow-hidden">
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
      <Button className="w-full px-20">
        <FiShoppingBag size={24} />
        <span>Add to Cart</span>
      </Button>
      <Button variant="dark" className="w-full px-20">
        <span>Checkout Now</span>
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
}
