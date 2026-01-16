import CartItems from '@/app/(landing)/_components/Pages/Checkout/CartItems';
import OrderInformation from '@/app/(landing)/_components/Pages/Checkout/OrderInformation';

export default function CheckoutsPage() {
  return (
    <div className="min-h-[80vh] bg-gray-100">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="mb-11 text-5xl text-center font-bold">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </div>
  );
}
