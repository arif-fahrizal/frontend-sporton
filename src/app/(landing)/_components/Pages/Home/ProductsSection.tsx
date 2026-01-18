'use client';

import CardProduct from '@/app/(landing)/_components/UI/Cards/CardProduct';
import { Product } from '@/types/products.type';

interface TProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: Readonly<TProductsSectionProps>) {
  return (
    <section id="products-section" className="container px-4 mt-32 mx-auto">
      <h2 className="mb-10 text-2xl text-center font-bold italic md:text-3xl lg:text-4xl">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 sm:grid-cols-4 md:gap-3.5 2xl:grid-cols-6 xl:gap-5">
        {products.map((product, index) => (
          <CardProduct key={`product-${index}`} href={`/product/${product._id}`} product={product} />
        ))}
      </div>
    </section>
  );
}
