import { Bank } from '@/types/banks.types';
import { FiCreditCard, FiEdit2, FiTrash2 } from 'react-icons/fi';

interface TBankInformationListProps {
  banks: Bank[];
  onEdit?: (bank: Bank) => void;
  onDelete?: (id: string) => void;
}

export default function BankInformationList({ banks, onEdit, onDelete }: TBankInformationListProps) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {banks.map((bank, index) => (
        <div key={`bank-${index}`} className="rounded-lg border border-gray-200 bg-white">
          <div className="flex justify-between p-5">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-12 h-12 rounded text-blue-600 bg-blue-50">
                <FiCreditCard size={24} />
              </div>
              <div className="">
                <p className="font-semibold">{bank.bankName}</p>
                <p className="text-xs opacity-50">Bank Transfer</p>
              </div>
            </div>
            <div className="flex gap-5 -mt-5 text-gray-600">
              <button type="button" onClick={() => onEdit?.(bank)}>
                <FiEdit2 size={24} />
              </button>
              <button type="button" onClick={() => onDelete?.(bank._id)}>
                <FiTrash2 size={24} />
              </button>
            </div>
          </div>
          <div className="p-5 font-medium">
            <p className="text-xs opacity-50">ACCOUNT NUMBER</p>
            <p>{bank.accountNumber}</p>
          </div>
          <p className="py-3 px-5 text-xs border-t border-gray-200">
            <span className="opacity-50">Holder :</span> {bank.accountName}
          </p>
        </div>
      ))}
    </div>
  );
}
