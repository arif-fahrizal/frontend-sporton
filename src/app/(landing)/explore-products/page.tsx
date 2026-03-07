import DisplayProducts from '@/app/(landing)/_components/Pages/ExploreProducts/DisplayProducts';
import HeaderExploreProducts from '@/app/(landing)/_components/Pages/ExploreProducts/HeaderExploreProducts';
import { getAllCategories } from '@/services/category.service';
import { getAllProducts } from '@/services/product.service';

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
  const [products, categories] = await Promise.all([getAllProducts({ ...params, limit: '24' }), getAllCategories()]);

  return (
    <main className="container min-h-[80vh] mx-auto my-5 px-4">
      <HeaderExploreProducts categories={categories || []} />
      <DisplayProducts products={products || []} />
    </main>
  );
}
