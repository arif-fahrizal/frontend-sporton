'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import { FiRefreshCcw } from 'react-icons/fi';

export default function OrderSubmitted() {
  const refreshOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-90 w-full p-5 mx-auto bg-white sm:max-w-120 sm:p-10 lg:max-w-160 lg:p-16">
      <Image
        src="/icons/icon-order-submitted.svg"
        alt="Icon Order Submitted"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Order Submitted !!</h2>
      <p className="mb-8 text-sm text-center sm:text-base">
        Your Order is recorded in our system, we are still confirming the payment status, please wait and your order
        status will be updated in less than 12 hours.
      </p>
      <Button variant="dark" className="w-full py-3! text-sm sm:py-4! sm:text-base" onClick={refreshOrderStatus}>
        <FiRefreshCcw />
        Refresh Order Status
      </Button>
    </div>
  );
}
