'use client';

import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { getImageUrl } from '@/lib/api';
import { Transaction } from '@/types/transactions.types';
import { formatRupiah } from '@/utils/currency.utils';
import { formatDate } from '@/utils/date.utils';
import Image from 'next/image';
import { FiCheck, FiX } from 'react-icons/fi';

interface TTransactionModalProps {
  transaction?: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (id: string, status: 'paid' | 'rejected') => Promise<void>;
}

export default function TransactionModal({ transaction, isOpen, onClose, onStatusChange }: TTransactionModalProps) {
  const isUpdating = useBoolean();

  const handleStatusChange = async (status: 'paid' | 'rejected') => {
    isUpdating.toggle();

    try {
      await onStatusChange(transaction!._id, status);
    } catch (error) {
      console.error(error);
    } finally {
      isUpdating.toggle();
    }
  };

  if (!transaction) return;

  return (
    <Modal title="Verify Transactions" isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-6">
        <div className="min-w-52">
          <h4 className="mb-2 text-xs font-semibold">Payment Proof</h4>
          {transaction?.paymentProof ? (
            <Image src={getImageUrl(transaction.paymentProof)} alt="Payment Proof" width={200} height={400} />
          ) : (
            <p className="p-4 text-sm text-center">No Payment Proof</p>
          )}
        </div>
        <div className="w-full">
          <h4 className="mb-2 text-sm font-semibold">Order Details</h4>
          <div className="flex flex-col gap-2.5 mb-5 p-4 text-sm rounded-md bg-gray-100">
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Date</span>
              <span className="text-right">{formatDate(transaction?.createdAt || '')}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Customer</span>
              <span className="text-right">{transaction?.customerName}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Contact</span>
              <span className="text-right">{transaction?.customerContact}</span>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="whitespace-nowrap opacity-50">Shipping Address</div>
              <div className="text-right">{transaction?.customerAddress}</div>
            </div>
          </div>

          <h4 className="mb-2 text-sm font-semibold">Items Purchased</h4>
          <div className="space-y-3">
            {transaction?.purchasedItems?.map((item, index) => (
              <div key={`item-${index}`} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200">
                <div className="flex justify-center items-center w-8 aspect-square rounded bg-gray-100">
                  <Image
                    src={item.productId ? getImageUrl(item.productId?.imageUrl) : ''}
                    width={30}
                    height={30}
                    alt="Product Image"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{item.productId?.name}</span>
                <span className="ml-auto text-sm font-medium">{item.qty} units</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-sm">
            <h4 className="font-semibold">Total </h4>
            <span className="text-primary font-semibold">{formatRupiah(transaction?.totalPayment || 0)}</span>
          </div>
          <div className="flex justify-end gap-5 mt-12">
            <Button
              size="small"
              onClick={() => handleStatusChange('rejected')}
              className="text-primary! rounded-md bg-primary-light!"
              disabled={isUpdating.value}
            >
              <FiX size={20} />
              {isUpdating.value ? 'Rejecting...' : 'Reject'}
            </Button>
            <Button
              size="small"
              onClick={() => handleStatusChange('paid')}
              className="text-white! rounded-md bg-[#50C252]!"
              disabled={isUpdating.value}
            >
              <FiCheck size={20} />
              {isUpdating.value ? 'Approving...' : 'Approve'}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
