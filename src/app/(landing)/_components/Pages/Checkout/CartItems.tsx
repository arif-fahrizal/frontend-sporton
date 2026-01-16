import Button from '@/app/(landing)/_components/UI/Button';
import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import { CART_LIST, TOTAL_PRICE } from '@/app/(landing)/_components/UI/PopUp/CartPopUp';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import { FiCreditCard, FiTrash2 } from 'react-icons/fi';

export default function CartItems() {
  return (
    <CardWithHeader title="Cart Items">
      <div className="max-h-75 overflow-y-auto">
        {CART_LIST.map((item, index) => (
          <div key={`cart-item-${index}`} className="flex gap-3 p-4 border-b border-gray-200">
            <div className="flex justify-center items-center w-16 aspect-square bg-primary-light">
              <Image
                src={`/products/${item.image}`}
                alt={item.name}
                width={63}
                height={63}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <span className="text-sm font-medium">{item.name}</span>
              <div className="flex gap-3 text-xs font-medium">
                <span>{item.qty}x</span>
                <span className="text-primary">{formatRupiah(item.price)}</span>
              </div>
            </div>
            <Button size="small" variant="ghost" className="self-center w-7 h-7 ml-auto p-0!">
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span className="text-sm">Total</span>
          <span className="text-xs text-primary">{formatRupiah(TOTAL_PRICE)}</span>
        </div>
        <Button variant="dark" className="w-full mt-4">
          <FiCreditCard /> Proceed to payment
        </Button>
      </div>
    </CardWithHeader>
  );
}
