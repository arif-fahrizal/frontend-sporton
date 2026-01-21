import { FiAlertCircle } from 'react-icons/fi';

export default function OrderRejected() {
  return (
    <div className="flex flex-col justify-center items-center max-w-90 w-full p-5 mx-auto bg-white sm:max-w-120 sm:p-10 lg:max-w-160 lg:p-16">
      <FiAlertCircle
        size={117}
        className="flex-justify-center items-center w-24 h-24 mb-5 mx-auto p-3 text-primary rounded-full bg-primary-light"
      />
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Order Rejected !!</h2>
      <p className="mb-8 text-sm text-center sm:text-base">
        I&apos;m sorry your order is rejected because your payment proof is not valid.
      </p>
    </div>
  );
}
