import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';

export default function OrderInformation() {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number</label>
          <input type="number" id="wa_number" placeholder="Enter your whatsapp number" />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea id="shipping_address" rows={5} placeholder="Enter your shipping address" />
        </div>
      </div>
    </CardWithHeader>
  );
}
