'use client';

import CardWithHeader from '@/app/(landing)/_components/UI/Cards/CardWithHeader';
import { CustomerInfo } from '@/hooks/useCartStore';

interface TOrderInformationProps {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

export default function OrderInformation({ formData, setFormData }: TOrderInformationProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <CardWithHeader title="Order Information">
      <form className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Enter your name"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input
            type="number"
            id="customerContact"
            name="customerContact"
            placeholder="Enter your whatsapp number"
            value={formData.customerContact || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            id="customerAddress"
            name="customerAddress"
            rows={5}
            placeholder="Enter your shipping address"
            value={formData.customerAddress}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </CardWithHeader>
  );
}
