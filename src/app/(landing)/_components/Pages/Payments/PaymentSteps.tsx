import Button from '@/app/(landing)/_components/UI/Button';
import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import FileUpload from '@/app/(landing)/_components/UI/Inputs/FileUpload';
import { TOTAL_PRICE } from '@/app/(landing)/_components/UI/PopUp/CartPopUp';
import { formatRupiah } from '@/utils/currency.utils';
import { FiCheckCircle } from 'react-icons/fi';

export default function PaymentSteps() {
  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-4">
        <ol className="flex flex-col gap-4 mb-5 text-xs list-decimal list-inside">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed under &apos;Payment
            Options&apos; (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer,<b> keep the payment receipt</b> or a screenshot of the transfer confirmation.
            This will be needed for the next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the <b>&apos;Upload Receipt & Confirm&apos;</b> button below to
            validate your transaction.
          </li>
        </ol>
        <FileUpload />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span className="text-sm">Total</span>
          <span className="text-xs text-primary">{formatRupiah(TOTAL_PRICE)}</span>
        </div>
        <Button variant="dark" className="w-full mt-4">
          <FiCheckCircle /> Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
}
