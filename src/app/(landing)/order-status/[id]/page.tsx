'use client';

import OrderConfirmed from '@/app/(landing)/_components/Pages/OrderStatus/OrderConfirmed';
import OrderSubmitted from '@/app/(landing)/_components/Pages/OrderStatus/OrderSubmitted';
import useBoolean from '@/hooks/useBoolean';

export default function OrderStatusPage() {
  const isConfirmed = useBoolean();

  return (
    <main className="min-h-[80vh] px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-4xl text-center font-bold sm:text-5xl">Order Status</h1>
      </div>
      {isConfirmed.value ? <OrderConfirmed /> : <OrderSubmitted />}
    </main>
  );
}
