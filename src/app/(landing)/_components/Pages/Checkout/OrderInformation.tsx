export default function OrderInformation() {
  return (
    <div className="bg-white">
      <div className="py-4 px-5 border-b border-gray-200">
        <h2 className="text-lg font-bold">Order Information</h2>
      </div>
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
    </div>
  );
}
