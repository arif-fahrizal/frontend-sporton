import Image from 'next/image';

export default function OrderConfirmed() {
  return (
    <div className="flex flex-col justify-center items-center max-w-90 w-full p-5 mx-auto bg-white sm:max-w-120 sm:p-10 lg:max-w-160 lg:p-16">
      <Image
        src="/icons/icon-order-confirmed.svg"
        alt="Icon Order Confirmed"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Order Confirmed !!</h2>
      <p className="mb-8 text-sm text-center sm:text-base">
        We have received your payment, and your order is currently processed by our staff, just wait until your favorite
        sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
}
