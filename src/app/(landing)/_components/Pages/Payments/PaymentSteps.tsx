'use client';

import Button from '@/app/(landing)/_components/UI/Button';
import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import FileUpload from '@/app/(landing)/_components/UI/Inputs/FileUpload';
import { useCartStore } from '@/hooks/useCartStore';
import { transactionCheckout } from '@/services/transaction.service';
import { formatRupiah } from '@/utils/currency.utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export default function PaymentSteps() {
  const { push } = useRouter();

  const [imageFile, setImageFile] = useState<File | null>();

  const { items, customerInfo, reset } = useCartStore();

  const TOTAL_PRICE = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleConfirmPayment = async () => {
    if (!imageFile) return alert('Please upload your payment receipt');

    if (!customerInfo) {
      alert('Please fill out your customer information');
      return push('/checkout');
    }

    try {
      const formData = new FormData();

      formData.append('customerName', customerInfo.customerName);
      formData.append('customerContact', String(customerInfo.customerContact));
      formData.append('customerAddress', customerInfo.customerAddress);
      formData.append('image', imageFile);
      formData.append(
        'purchasedItems',
        JSON.stringify(items.map(item => ({ productId: item._id, quantity: item.qty })))
      );
      formData.append('totalPayment', String(TOTAL_PRICE));

      const res = await transactionCheckout(formData);

      alert('Transaction Created Successfully');
      reset();

      push(`/order-status/${res._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-4">
        <ol className="flex flex-col gap-4 mb-5 text-xs list-decimal list-inside">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed under &apos;Payment
            Options&apos; (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer,<b> keep the payment receipt</b> or a screenshot of the transfer confirmation.
            This will be needed for the next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the <b>&apos;Upload Receipt & Confirm&apos;</b> button below to
            validate your transaction.
          </li>
        </ol>
        <FileUpload onFileSelect={setImageFile} />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span className="text-sm">Total</span>
          <span className="text-xs text-primary">{formatRupiah(TOTAL_PRICE)}</span>
        </div>
        <Button variant="dark" className="w-full mt-4" onClick={handleConfirmPayment}>
          <FiCheckCircle /> Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
}
