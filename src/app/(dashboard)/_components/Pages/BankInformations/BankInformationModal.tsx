'use client';

import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';

interface TBankInformationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BankInformationModal({ isOpen, onClose }: TBankInformationModalProps) {
  return (
    <Modal title="Add Bank Account" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="e. g. 12124124124" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountHolder">Account Holder</label>
            <input
              type="text"
              id="accountHolder"
              name="accountHolder"
              placeholder="e. g. Holder Name as registered on the account"
            />
          </div>
        </div>
        <Button className="mt-3 ml-auto rounded-lg">Create Bank Account</Button>
      </div>
    </Modal>
  );
}
