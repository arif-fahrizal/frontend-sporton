'use client';

import TransactionModal from '@/app/(dashboard)/_components/Pages/Transactions/TransactionModal';
import TransactionTable from '@/app/(dashboard)/_components/Pages/Transactions/TransactionTable';
import useBoolean from '@/hooks/useBoolean';
import { getAllTransactions, updateTransaction } from '@/services/transaction.service';
import { Transaction } from '@/types/transactions.types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const isModalOpen = useBoolean();

  const fetchTransactions = async () => {
    try {
      const data = await getAllTransactions();
      if (data) setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    isModalOpen.toggle();
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
    isModalOpen.toggle();
  };

  const handleStatusChange = async (id: string, status: 'paid' | 'rejected') => {
    try {
      const data = new FormData();
      data.append('status', status);
      await updateTransaction(id, data);

      toast.success('Transaction status updated successfully');

      fetchTransactions();
    } catch (error) {
      const err = 'Error updating transaction status';
      console.error(err, error);
      toast.error(err);
    } finally {
      isModalOpen.toggle();
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
      </div>
      <TransactionTable transactions={transactions} onViewDetails={handleViewDetails} />
      <TransactionModal
        transaction={selectedTransaction}
        isOpen={isModalOpen.value}
        onClose={handleCloseModal}
        onStatusChange={handleStatusChange}
      />
    </section>
  );
}
