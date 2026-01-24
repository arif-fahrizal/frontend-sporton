'use client';

import ProductModal from '@/app/(dashboard)/_components/Pages/Products/ProductModal';
import ProductTable from '@/app/(dashboard)/_components/Pages/Products/ProductTable';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { FiPlus } from 'react-icons/fi';

export default function ProductsPage() {
  const { value, toggle } = useBoolean();
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stocks.</p>
        </div>
        <Button onClick={toggle} className="rounded-lg">
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable />
      <ProductModal isOpen={value} onClose={toggle} />
    </section>
  );
}
