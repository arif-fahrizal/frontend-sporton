/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import BankInformationList from '@/app/(dashboard)/_components/Pages/BankInformations/BankInformationList';
import BankInformationModal from '@/app/(dashboard)/_components/Pages/BankInformations/BankInformationModal';
import DeleteModal from '@/app/(dashboard)/_components/UI/DeleteModal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { deleteBank, getAllBanks } from '@/services/bank.service';
import { Bank } from '@/types/banks.types';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function BankInformationsPage() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [bankToDeleteId, setBankToDeleteId] = useState('');

  const isModalOpen = useBoolean();
  const isDeleteModalOpen = useBoolean();

  const fetchBanks = async () => {
    try {
      const data = await getAllBanks();
      if (data) setBanks(data);
    } catch (error) {
      console.error('Error fetching banks:', error);
    }
  };

  const handleEditBank = (bank: Bank) => {
    setSelectedBank(bank);
    isModalOpen.toggle();
  };

  const handleDeleteBank = (id: string) => {
    setBankToDeleteId(id);
    isDeleteModalOpen.toggle();
  };

  const handleDeleteBankConfirm = async () => {
    if (!bankToDeleteId) return;
    try {
      await deleteBank(bankToDeleteId);
      fetchBanks();

      isDeleteModalOpen.toggle();
      setBankToDeleteId('');

      toast.success('Bank deleted successfully');
    } catch (error) {
      const err = 'Error deleting bank';
      console.error(err, error);
      toast.error(err);
    }
  };

  const handleCloseModal = () => {
    setSelectedBank(null);
    isModalOpen.toggle();
  };

  useEffect(() => {
    fetchBanks();
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Bank Information</h1>
          <p className="opacity-50">Manage destination accounts for customer transfers.</p>
        </div>
        <Button onClick={isModalOpen.toggle} className="rounded-lg">
          <FiPlus size={24} />
          Add bank Account
        </Button>
      </div>
      <BankInformationList banks={banks} onEdit={handleEditBank} onDelete={handleDeleteBank} />
      <BankInformationModal
        bank={selectedBank}
        isOpen={isModalOpen.value}
        onClose={handleCloseModal}
        onSuccess={fetchBanks}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen.value}
        onClose={isDeleteModalOpen.toggle}
        onConfirm={handleDeleteBankConfirm}
      />
    </section>
  );
}
