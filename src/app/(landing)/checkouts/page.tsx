'use client';

import CartItems from '@/app/(landing)/_components/Pages/Checkout/CartItems';
import OrderInformation from '@/app/(landing)/_components/Pages/Checkout/OrderInformation';
import { CustomerInfo, useCartStore } from '@/hooks/useCartStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutsPage() {
  const { push } = useRouter();

  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: '',
    customerContact: null,
    customerAddress: '',
  });

  const { setCustomerInfo } = useCartStore();

  const handlePayment = () => {
    if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
      return alert('Please fill all the fields');
    }

    setCustomerInfo(formData);
    push('/payments');
  };

  return (
    <main className="min-h-[80vh] px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-10 lg:py-20">
        <h1 className="mb-10 text-4xl text-center font-bold sm:text-5xl">Checkout Now</h1>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems onPayment={handlePayment} />
        </div>
      </div>
    </main>
  );
}
