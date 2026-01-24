'use client';

import TransactionModal from '@/app/(dashboard)/_components/Pages/Transactions/TransactionModal';
import TransactionTable from '@/app/(dashboard)/_components/Pages/Transactions/TransactionTable';
import useBoolean from '@/hooks/useBoolean';

export default function TransactionsPage() {
  const { value, toggle } = useBoolean();
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
      </div>
      <TransactionTable onViewDetails={toggle} />
      <TransactionModal isOpen={value} onClose={toggle} />
    </section>
  );
}
