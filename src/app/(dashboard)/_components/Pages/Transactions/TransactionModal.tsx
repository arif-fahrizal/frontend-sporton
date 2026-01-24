'use client';

import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import { FiCheck, FiX } from 'react-icons/fi';

interface TTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransactionModal({ isOpen, onClose }: TTransactionModalProps) {
  return (
    <Modal title="Verify Transactions" isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-6">
        <div className="">
          <h4 className="mb-2 text-xs font-semibold">Payment Proof</h4>
          <Image src="/images/payment-proof.png" alt="Payment Proof" width={200} height={400} />
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Order Details</h4>
          <div className="flex flex-col gap-2.5 mb-5 p-4 text-sm rounded-md bg-gray-100">
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Date</span>
              <span className="text-right">23/02/2026 19:32</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Customer</span>
              <span className="text-right">John Doe</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="opacity-50">Contact</span>
              <span className="text-right">+123123123</span>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="whitespace-nowrap opacity-50">Shipping Address</div>
              <div className="text-right">Merdeka Street, Jakarta, Indonesia, 332122</div>
            </div>
          </div>

          <h4 className="mb-2 text-sm font-semibold">Items Purchased</h4>
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-200">
            <div className="flex justify-center items-center w-8 aspect-square rounded bg-gray-100">
              <Image src="/products/shoes-white-red.png" width={30} height={30} alt="Product Image" />
            </div>
            <span className="text-sm font-medium">SportsOn Hyperfast Shoes</span>
            <span className="ml-auto text-sm font-medium">3 units</span>
          </div>
          <div className="flex justify-between mt-6 text-sm">
            <h4 className="font-semibold">Total </h4>
            <span className="text-primary font-semibold">{formatRupiah(450000)}</span>
          </div>
          <div className="flex justify-end gap-5 mt-12">
            <Button className="text-primary! rounded-md bg-primary-light!" size="small">
              <FiX size={20} />
              Reject
            </Button>
            <Button className="text-white! rounded-md bg-[#50C252]!" size="small">
              <FiCheck size={20} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
