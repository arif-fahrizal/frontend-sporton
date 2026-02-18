import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import { getAllBanks } from '@/services/bank.service';
import { FiCreditCard } from 'react-icons/fi';

export default async function PaymentOptions() {
  const banks = await getAllBanks();

  return (
    <CardWithHeader title="Payment Options">
      {banks.map((payment, index) => (
        <div key={`payment-${index}-${payment?.bankName}`} className="flex gap-5 p-5 border-b border-gray-200">
          <div className="self-center h-fit p-4 text-blue-500 bg-blue-100">
            <FiCreditCard size={24} />
          </div>
          <div className="flex flex-col self-center">
            <span className="font-bold">{payment?.bankName}</span>
            <span className="text-sm">{payment?.accountNumber}</span>
            <span className="text-sm opacity-70">{payment?.accountName}</span>
          </div>
          <span className="self-center ml-auto py-1 px-2 text-xs text-gray-800 bg-blue-50">Bank Transfer</span>
        </div>
      ))}
    </CardWithHeader>
  );
}
