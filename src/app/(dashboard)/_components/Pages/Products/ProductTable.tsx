import { getImageUrl } from '@/lib/api';
import { Product } from '@/types/products.types';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface TProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: TProductTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 px-6 font-semibold">Product</th>
            <th className="py-4 px-6 font-semibold">Category</th>
            <th className="py-4 px-6 font-semibold">Price</th>
            <th className="py-4 px-6 font-semibold">Stock</th>
            <th className="py-4 px-6 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={`${product?.name}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="flex items-center gap-2 py-4 px-6 font-medium">
                <Image
                  src={getImageUrl(product?.imageUrl)}
                  alt={product?.name}
                  width={52}
                  height={52}
                  className="aspect-square rounded-md object-contain bg-gray-100"
                />
                <span>{product?.name}</span>
              </td>
              <td className="py-4 px-6 font-medium">
                <span className="py-1 px-2 rounded-md bg-gray-200">{product?.category?.name}</span>
              </td>
              <td className="py-4 px-6 font-medium">{formatRupiah(product?.price)}</td>
              <td className="py-4 px-6 font-medium">{product?.stock} units</td>
              <td className="py-4 px-6 text-gray-600 font-medium">
                <div className="flex gap-5">
                  <button type="button" onClick={() => onEdit?.(product)}>
                    <FiEdit2 size={24} />
                  </button>
                  <button type="button" onClick={() => onDelete?.(product?._id)}>
                    <FiTrash2 size={24} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
