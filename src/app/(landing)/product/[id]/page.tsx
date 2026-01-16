import ProductActions from '@/app/(landing)/_components/Pages/ProductDetail/ProductActions';
import { formatRupiah } from '@/utils/currency.utils';
import Image from 'next/image';

export default function ProductDetailPage() {
  return (
    <main className="container flex gap-12 mx-auto py-40">
      <div className="flex justify-center items-center min-w-130 aspect-square bg-primary-light">
        <Image
          src="/products/shoes-black.png"
          alt="product image"
          width={500}
          height={500}
          className="w-full aspect-square object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 w-full py-7">
        <h1 className="text-5xl font-bold">SportsOn HyperSoccer v2</h1>
        <span className="w-fit py-2 px-6 text-primary rounded-full bg-primary-light">Football</span>
        <p className="leading-loose">
          The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on
          the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats
          don&apos;t just perform—they make a statement. Experience the future of football footwear with v2&apos;s
          enhanced fit and cutting-edge traction.
        </p>
        <span className="my-5 text-3xl text-primary font-semibold">{formatRupiah(458000)}</span>
        <ProductActions />
      </div>
    </main>
  );
}
