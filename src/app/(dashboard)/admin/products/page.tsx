import ProductTable from '@/app/(dashboard)/_components/Pages/Products/ProductTable';
import Button from '@/app/(landing)/_components/UI/Button';
import { FiPlus } from 'react-icons/fi';

export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stocks.</p>
        </div>
        <Button className="rounded-lg">
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable />
    </div>
  );
}
