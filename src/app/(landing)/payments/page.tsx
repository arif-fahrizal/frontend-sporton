import PaymentOptions from '@/app/(landing)/_components/Pages/Payments/PaymentOptions';
import PaymentSteps from '@/app/(landing)/_components/Pages/Payments/PaymentSteps';

export default function PaymentsPage() {
  return (
    <main className="min-h-[80vh] px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto py-10 lg:py-20">
        <h1 className="mb-10 text-4xl text-center font-bold sm:text-5xl">Payments</h1>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
}
