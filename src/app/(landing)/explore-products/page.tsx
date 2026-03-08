import DisplayProducts from '@/app/(landing)/_components/Pages/ExploreProducts/DisplayProducts';
import HeaderExploreProducts from '@/app/(landing)/_components/Pages/ExploreProducts/HeaderExploreProducts';
import { getAllCategories } from '@/services/category.service';
import { getAllProducts } from '@/services/product.service';
import { unstable_cache } from 'next/cache';

interface SearchParams {
  search?: string;
  sort?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  inStock?: string;
}

const getCachedCategories = unstable_cache(async () => getAllCategories(), ['categories'], { revalidate: 3600 });

export default async function ExploreProductsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const [products, categories] = await Promise.all([getAllProducts({ ...params, limit: '24' }), getCachedCategories()]);

  return (
    <main className="container min-h-[80vh] mx-auto my-5 px-4">
      <HeaderExploreProducts categories={categories || []} />
      {/* <Suspense fallback={<ProductSkeleton />}> */}
      <DisplayProducts products={products || []} />
      {/* </Suspense> */}
    </main>
  );
}
