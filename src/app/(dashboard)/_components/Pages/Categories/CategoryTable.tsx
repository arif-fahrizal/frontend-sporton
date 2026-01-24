import Image from 'next/image';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const CATEGORIES_DATA = [
  {
    name: 'Category 1',
    imageUrl: '/products/basketball.png',
    description: 'All Running Items',
  },
  {
    name: 'Category 2',
    imageUrl: '/products/basketball.png',
    description: 'All Running Items',
  },
];

export default function CategoryTable() {
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
          {CATEGORIES_DATA.map((category, index) => (
            <tr key={`${category.name}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="flex items-center gap-2 py-4 px-6 font-medium">
                <Image
                  src={category.imageUrl}
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
                  <button>
                    <FiEdit2 size={24} />
                  </button>
                  <button>
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
