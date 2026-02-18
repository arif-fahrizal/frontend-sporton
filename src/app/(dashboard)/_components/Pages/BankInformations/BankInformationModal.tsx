'use client';

import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { createBank, updateBank } from '@/services/bank.service';
import { Bank } from '@/types/banks.types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface TBankInformationModalProps {
  bank?: Bank | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const initialFormData: Partial<Bank> = {
  bankName: '',
  accountName: '',
  accountNumber: '',
};

export default function BankInformationModal({ bank, isOpen, onClose, onSuccess }: TBankInformationModalProps) {
  const [formData, setFormData] = useState<Partial<Bank>>(initialFormData);

  const isSubmitting = useBoolean();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    isSubmitting.toggle();

    try {
      if (!bank) {
        await createBank(formData);
      } else {
        updateBank(bank._id, formData);
      }

      setFormData(initialFormData);
      onSuccess?.();
      onClose?.();

      toast.success(!bank ? 'Bank created successfully' : 'Bank updated successfully');
    } catch (error) {
      const err = !bank ? 'Error creating bank: ' : 'Error updating bank: ';
      console.error(err, error);
      toast.error(err);
    } finally {
      isSubmitting.toggle();
    }
  };

  useEffect(() => {
    if (!!bank && isOpen) {
      setFormData({
        bankName: bank.bankName,
        accountName: bank.accountName,
        accountNumber: bank.accountNumber,
      });
    } else if (isOpen) {
      setFormData(initialFormData);
    }
  }, [bank, isOpen]);
  return (
    <Modal title="Add Bank Account" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="e. g. Mandiri, BCA, BRI"
              value={formData.bankName}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="e. g. 12124124124"
              value={formData.accountNumber}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Holder</label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="e. g. Holder Name as registered on the account"
              value={formData.accountName}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <Button className="mt-3 ml-auto rounded-lg" disabled={isSubmitting.value}>
          {!bank ? 'Create Bank Account' : 'Update Bank Account'}
        </Button>
      </form>
    </Modal>
  );
}
