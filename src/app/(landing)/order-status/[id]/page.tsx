import OrderConfirmed from '@/app/(landing)/_components/Pages/OrderStatus/OrderConfirmed';
import OrderRejected from '@/app/(landing)/_components/Pages/OrderStatus/OrderRejected';
import OrderSubmitted from '@/app/(landing)/_components/Pages/OrderStatus/OrderSubmitted';
import { getTransactionById } from '@/services/transaction.service';
import { ParamsProps } from '@/types';

const ORDER_STATUS = {
  pending: <OrderSubmitted />,
  rejected: <OrderRejected />,
  paid: <OrderConfirmed />,
};

export default async function OrderStatusPage({ params }: Readonly<ParamsProps>) {
  const { id } = await params;
  const transaction = await getTransactionById(id);

  return (
    <main className="min-h-[80vh] px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-4xl text-center font-bold sm:text-5xl">Order Status</h1>
      </div>
      {ORDER_STATUS[transaction.status]}
    </main>
  );
}
