import { formatRupiah } from '@/utils/currency.utils';
import { FiEye } from 'react-icons/fi';

interface TTransactionTableProps {
  onViewDetails: () => void;
}

const TRANSACTIONS_DATA = [
  {
    date: '23/02/2026 19.32',
    customer: 'John Doe',
    contact: '08123456789',
    total: 500000,
    status: 'pending',
  },
  {
    date: '23/02/2026 19.32',
    customer: 'John Doezz',
    contact: '08123456789',
    total: 500000,
    status: 'paid',
  },
  {
    date: '23/02/2026 19.32',
    customer: 'John Doell',
    contact: '08123456789',
    total: 500000,
    status: 'rejected',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const statusColor: any = {
  pending: 'text-yellow-600 border-yellow-400 bg-yellow-100',
  paid: 'text-green-600 border-green-400 bg-green-100',
  rejected: 'text-red-600 border-red-400 bg-red-100',
};

export default function TransactionTable({ onViewDetails }: TTransactionTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 px-6 font-semibold">Date</th>
            <th className="py-4 px-6 font-semibold">Customer</th>
            <th className="py-4 px-6 font-semibold">Contact</th>
            <th className="py-4 px-6 font-semibold">Total</th>
            <th className="py-4 px-6 font-semibold">Status</th>
            <th className="py-4 px-6 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {TRANSACTIONS_DATA.map((transaction, index) => (
            <tr key={`${transaction.date}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="py-4 px-6 font-medium">{transaction.date}</td>
              <td className="py-4 px-6 font-medium">{transaction.customer}</td>
              <td className="py-4 px-6 font-medium">{transaction.contact}</td>
              <td className="py-4 px-6 font-medium">{formatRupiah(transaction.total)}</td>
              <td className="py-4 px-6 font-medium">
                <span
                  className={`inline-block py-1 px-4 text-sm text-center uppercase rounded-full border-2 ${statusColor[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="py-4 px-6 font-medium">
                <button
                  onClick={onViewDetails}
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
