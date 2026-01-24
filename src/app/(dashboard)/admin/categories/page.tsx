'use client';

import CategoryModal from '@/app/(dashboard)/_components/Pages/Categories/CategoryModal';
import CategoryTable from '@/app/(dashboard)/_components/Pages/Categories/CategoryTable';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { FiPlus } from 'react-icons/fi';

export default function CategoriesPage() {
  const { value, toggle } = useBoolean();
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Category Management</h1>
          <p className="opacity-50">Organize your products into categories.</p>
        </div>
        <Button onClick={toggle} className="rounded-lg">
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <CategoryTable />
      <CategoryModal isOpen={value} onClose={toggle} />
    </section>
  );
}
