import { Transaction } from '@/types/transactions.types';
import { formatRupiah } from '@/utils/currency.utils';
import { formatDate } from '@/utils/date.utils';
import { FiEye } from 'react-icons/fi';

interface TTransactionTableProps {
  transactions: Transaction[];
  onViewDetails: (transaction: Transaction) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const statusColor: any = {
  pending: 'text-yellow-600 border-yellow-400 bg-yellow-100',
  paid: 'text-green-600 border-green-400 bg-green-100',
  rejected: 'text-red-600 border-red-400 bg-red-100',
};

export default function TransactionTable({ transactions, onViewDetails }: TTransactionTableProps) {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white overflow-scroll">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Date</th>
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Customer</th>
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Contact</th>
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Total</th>
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Status</th>
            <th className="py-2.5 px-3.5 md:py-4 md:px-6 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={`${transaction._id}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium truncate">
                {formatDate(transaction.createdAt)}
              </td>
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium">{transaction.customerName}</td>
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium">{transaction.customerContact}</td>
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium">{formatRupiah(transaction.totalPayment)}</td>
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium">
                <span
                  className={`inline-block py-1 px-4 text-sm text-center uppercase rounded-full border-2 ${statusColor[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="py-2.5 px-3.5 md:py-4 md:px-6 font-medium">
                <button
                  onClick={() => onViewDetails(transaction)}
                  className="flex items-center gap-2.5 py-1 px-2 rounded-md duration-500 hover:bg-gray-100"
                >
                  <FiEye size={24} />
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
