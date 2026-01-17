import CartItems from '@/app/(landing)/_components/Pages/Checkout/CartItems';
import OrderInformation from '@/app/(landing)/_components/Pages/Checkout/OrderInformation';

export default function CheckoutsPage() {
  return (
    <main className="min-h-[80vh] px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-10 lg:py-20">
        <h1 className="mb-10 text-4xl text-center font-bold sm:text-5xl">Checkout Now</h1>
        <div className="flex flex-col-reverse gap-5 sm:grid sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </main>
  );
}
