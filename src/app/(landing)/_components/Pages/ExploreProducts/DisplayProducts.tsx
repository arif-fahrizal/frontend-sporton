import CardProduct from '@/app/(landing)/_components/UI/Cards/CardProduct';
import ProductSkeleton from '@/app/(landing)/_components/UI/Loading/ProductSkeleton';
import { Product } from '@/types/products.types';
import { Suspense } from 'react';
import { LuSearchX } from 'react-icons/lu';

export default async function DisplayProducts({ products = [] }: { products: Product[] }) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <div className="w-full h-full py-5">
        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[50vh] text-center">
            <span className="text-4xl lg:text-6xl mb-2.5">
              <LuSearchX color="#FF5F3F" />
            </span>
            <h3 className="text-sm md:text-lg font-semibold text-gray-700 mb-1">Produk tidak ditemukan</h3>
            <p className="text-xs md:text-sm text-gray-400">Coba ubah filter atau kata kunci pencarian kamu</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 gap-2 xl:gap-2.5">
            {products.map((product, index) => (
              <CardProduct key={`product-${index}`} href={`/product/${product._id}`} product={product} />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}
