import ProductActions from '@/app/(landing)/_components/Pages/ProductDetail/ProductActions';
import { getImageUrl } from '@/lib/api';
import { getProductById } from '@/services/product.service';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';

interface TProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: TProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main className="container grid gap-10 mx-auto py-20 px-4 md:grid-cols-[20rem_1fr] lg:py-40 lg:grid-cols-[27.5rem_1fr] xl:grid-cols-[33.5rem_1fr] xl:gap-12 2xl:grid-cols-[40rem_1fr]">
      <div className="flex justify-center items-center aspect-square bg-primary-light lg:max-w-110 xl:max-w-134 2xl:max-w-160">
        <Image
          src={getImageUrl(product.image)}
          alt={product?.name}
          width={550}
          height={550}
          className="w-full aspect-square object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 w-full lg:py-5 xl:py-7 2xl:gap-8">
        <h1 className="text-2xl font-bold lg:text-4xl xl:text-5xl 2xl:text-6xl">{product?.name}</h1>
        <span className="w-fit py-1 px-4 text-primary rounded-full bg-primary-light lg:py-1.5 lg:px-6 xl:py-2.5 2xl:py-2.5 2xl:px-7">
          {product?.category?.name}
        </span>
        <p className="text-sm leading-loose xl:text-base 2xl:text-xl">{product?.description}</p>
        <span className="my-2.5 text-2xl text-primary font-semibold xl:my-5 xl:text-3xl 2xl:text-4xl">
          {formatRupiah(product?.price)}
        </span>
        <ProductActions product={product} />
      </div>
    </main>
  );
}
