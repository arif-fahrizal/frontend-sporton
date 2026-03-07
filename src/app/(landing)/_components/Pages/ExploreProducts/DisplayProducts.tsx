import CardProduct from '@/app/(landing)/_components/UI/Cards/CardProduct';
import { Product } from '@/types/products.types';

export default async function DisplayProducts({ products = [] }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 sm:grid-cols-4 md:gap-3.5 2xl:grid-cols-6 xl:gap-5">
      {products?.map((product, index) => (
        <CardProduct key={`product-${index}`} href={`/product/${product._id}`} product={product} />
      ))}
    </div>
  );
}
