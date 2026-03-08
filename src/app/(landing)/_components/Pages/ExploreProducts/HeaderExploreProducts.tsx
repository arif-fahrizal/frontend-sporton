'use client';

import { Category } from '@/types/categories.types';
import { useRouter, useSearchParams } from 'next/navigation';
import { LuSearch } from 'react-icons/lu';

export default function HeaderExploreProducts({ categories = [] }: { categories: Category[] }) {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value) params.set(key, value.toString());
    });

    push(`/explore-products?${params.toString()}`);
  };

  const handleReset = () => push('/explore-products');

  return (
    <form
      method="GET"
      action="/explore-products"
      onSubmit={handleSubmit}
      className="w-full pb-5 border-b border-gray-100 bg-white"
    >
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          <LuSearch />
        </span>
        <input
          type="text"
          name="search"
          defaultValue={searchParams.get('search') || ''}
          onKeyDown={({ key, currentTarget }) => key === 'Enter' && currentTarget.form?.requestSubmit()}
          placeholder="Cari produk..."
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-gray-50"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <select
          name="category"
          defaultValue={searchParams.get('category') || ''}
          onChange={({ target }) => target.form?.requestSubmit()}
          className="px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-400"
        >
          <option value="">Semua Kategori</option>
          {categories.map(category => (
            <option
              key={`explore-product-category-${category.name}`}
              value={category.name}
              defaultValue={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>

        <select
          name="sort"
          defaultValue={searchParams.get('sort') || 'desc'}
          onChange={({ target }) => target.form?.requestSubmit()}
          className="px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-400"
        >
          <option value="desc">Terbaru</option>
          <option value="asc">Terlama</option>
        </select>

        <input
          type="number"
          name="minPrice"
          defaultValue={searchParams.get('minPrice') || ''}
          onKeyDown={({ key, currentTarget }) => key === 'Enter' && currentTarget.form?.requestSubmit()}
          placeholder="Harga min"
          className="w-28 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-400"
        />

        <input
          type="number"
          name="maxPrice"
          defaultValue={searchParams.get('maxPrice') || ''}
          onKeyDown={({ key, currentTarget }) => key === 'Enter' && currentTarget.form?.requestSubmit()}
          placeholder="Harga maks"
          className="w-28 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-400"
        />

        <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer select-none">
          <input
            type="checkbox"
            name="inStock"
            defaultChecked={searchParams.get('inStock') === 'on'}
            onChange={({ target }) => target.form?.requestSubmit()}
            className="w-4 h-4 accent-blue-500"
          />
          Stok tersedia
        </label>

        <button
          type="reset"
          onClick={handleReset}
          className="ml-auto text-sm text-gray-400 transition-colors hover:text-red-400"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
