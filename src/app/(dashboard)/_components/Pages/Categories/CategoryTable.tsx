import { getImageUrl } from '@/lib/api';
import { Category } from '@/types/categories.types';
import Image from 'next/image';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface TCategoryTableProps {
  categories: Category[];
  onEdit?: (category: Category) => void;
  onDelete?: (id: string) => void;
}

export default function CategoryTable({ categories, onEdit, onDelete }: TCategoryTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 px-6 font-semibold">Category Name</th>
            <th className="py-4 px-6 font-semibold">Description</th>
            <th className="py-4 px-6 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={`${category.name}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="flex items-center gap-2 py-4 px-6 font-medium">
                <Image
                  src={getImageUrl(category.image)}
                  alt={category.name}
                  width={52}
                  height={52}
                  className="aspect-square rounded-md object-contain bg-gray-100"
                />
                <span>{category.name}</span>
              </td>
              <td className="py-4 px-6 font-medium">{category.description}</td>
              <td className="py-4 px-6 text-gray-600 font-medium">
                <div className="flex gap-5">
                  <button type="button" onClick={() => onEdit?.(category)}>
                    <FiEdit2 size={24} />
                  </button>
                  <button type="button" onClick={() => onDelete?.(category._id)}>
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
