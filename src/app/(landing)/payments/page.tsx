import PaymentOptions from '@/app/(landing)/_components/Pages/Payments/PaymentOptions';
import PaymentSteps from '@/app/(landing)/_components/Pages/Payments/PaymentSteps';

export default function PaymentsPage() {
  return (
    <main className="min-h-[80vh] bg-gray-100">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="mb-11 text-5xl text-center font-bold">Payments</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
}
