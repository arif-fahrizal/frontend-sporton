import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const PRODUCTS_DATA = [
  {
    name: 'Product 1',
    imageUrl: '/products/basketball.png',
    category: 'Category 1',
    price: 100,
    stock: 10,
  },
  {
    name: 'Product 2',
    imageUrl: '/products/basketball.png',
    category: 'Category 2',
    price: 200,
    stock: 20,
  },
  {
    name: 'Product 3',
    imageUrl: '/products/basketball.png',
    category: 'Category 3',
    price: 300,
    stock: 30,
  },
];

export default function ProductTable() {
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
          {PRODUCTS_DATA.map((product, index) => (
            <tr key={`${product.name}-${index}`} className="border-b border-gray-200 last:border-b-0">
              <td className="flex items-center gap-2 py-4 px-6 font-medium">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={52}
                  height={52}
                  className="aspect-square rounded-md object-contain bg-gray-100"
                />
                <span>{product.name}</span>
              </td>
              <td className="py-4 px-6 font-medium">
                <span className="py-1 px-2 rounded-md bg-gray-200">{product.category}</span>
              </td>
              <td className="py-4 px-6 font-medium">{formatRupiah(product.price)}</td>
              <td className="py-4 px-6 font-medium">{product.stock} units</td>
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
