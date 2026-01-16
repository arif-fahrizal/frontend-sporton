import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import { FiCreditCard } from 'react-icons/fi';

const PAYMENT_LIST = [
  {
    bank_name: 'BCA',
    account_number: '1234567890',
    account_name: 'PT SportsOn Digital',
  },
  {
    bank_name: 'Mandiri',
    account_number: '23526224351',
    account_name: 'PT SportsOn Digital',
  },
  {
    bank_name: 'BNI',
    account_number: '34124115155',
    account_name: 'PT SportsOn Digital',
  },
];

export default function PaymentOptions() {
  return (
    <CardWithHeader title="Payment Options">
      {PAYMENT_LIST.map((payment, index) => (
        <div key={`payment-${index}-${payment.bank_name}`} className="flex gap-5 p-5 border-b border-gray-200">
          <div className="self-center h-fit p-4 text-blue-500 bg-blue-100">
            <FiCreditCard size={24} />
          </div>
          <div className="flex flex-col self-center">
            <span className="font-bold">{payment.bank_name}</span>
            <span className="text-sm">{payment.account_number}</span>
            <span className="text-sm opacity-70">{payment.account_name}</span>
          </div>
          <span className="self-center ml-auto py-1 px-2 text-xs text-gray-800 bg-blue-50">Bank Transfer</span>
        </div>
      ))}
    </CardWithHeader>
  );
}
