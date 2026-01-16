'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import { FiRefreshCcw } from 'react-icons/fi';

export default function OrderSubmitted() {
  const refreshOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center w-160 mx-auto p-16 bg-white">
      <Image
        src="/icons/icon-order-submitted.svg"
        alt="Icon Order Submitted"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="mb-2 text-2xl font-semibold">Order Submitted !!</h2>
      <p className="mb-8 text-center">
        Your Order is recorded in our system, we are still confirming the payment status, please wait and your order
        status will be updated in less than 12 hours.
      </p>
      <Button variant="dark" className="w-full" onClick={refreshOrderStatus}>
        <FiRefreshCcw />
        Refresh Order Status
      </Button>
    </div>
  );
}
