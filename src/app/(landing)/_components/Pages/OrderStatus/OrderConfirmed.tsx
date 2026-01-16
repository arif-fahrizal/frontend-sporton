import Image from 'next/image';

export default function OrderConfirmed() {
  return (
    <div className="flex flex-col justify-center items-center w-160 mx-auto p-16 bg-white">
      <Image
        src="/icons/icon-order-confirmed.svg"
        alt="Icon Order Confirmed"
        width={117}
        height={117}
        className="mb-4"
      />
      <h2 className="mb-2 text-2xl font-semibold">Order Confirmed !!</h2>
      <p className="mb-8 text-center">
        We have received your payment, and your order is currently processed by our staff, just wait until your favorite
        sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
}
