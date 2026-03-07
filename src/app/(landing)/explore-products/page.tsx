import DisplayProducts from '@/app/(landing)/_components/Pages/ExploreProducts/DisplayProducts';
import HeaderExploreProducts from '@/app/(landing)/_components/Pages/ExploreProducts/HeaderExploreProducts';
import { fetchAPI } from '@/lib/api.client';
import { Product } from '@/types/products.types';

interface SearchParams {
  search?: string;
  sort?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  inStock?: string;
}

export default async function ExploreProductsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const products = await fetchAPI<Product[]>('/products', { params: { ...params } });

  return (
    <main className="container mx-auto my-5 px-4">
      <HeaderExploreProducts />
      <DisplayProducts products={products?.data || []} />
    </main>
  );
}
