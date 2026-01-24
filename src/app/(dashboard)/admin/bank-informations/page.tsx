'use client';

import BankInformationList from '@/app/(dashboard)/_components/Pages/BankInformations/BankInformationList';
import BankInformationModal from '@/app/(dashboard)/_components/Pages/BankInformations/BankInformationModal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { FiPlus } from 'react-icons/fi';

export default function BankInformationsPage() {
  const { value, toggle } = useBoolean();
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Bank Information</h1>
          <p className="opacity-50">Manage destination accounts for customer transfers.</p>
        </div>
        <Button onClick={toggle} className="rounded-lg">
          <FiPlus size={24} />
          Add bank Account
        </Button>
      </div>
      <BankInformationList />
      <BankInformationModal isOpen={value} onClose={toggle} />
    </section>
  );
}
