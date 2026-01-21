import CategoriesSection from '@/app/(landing)/_components/Pages/Home/CategoriesSection';
import HeroSection from '@/app/(landing)/_components/Pages/Home/HeroSection';
import ProductsSection from '@/app/(landing)/_components/Pages/Home/ProductsSection';
import { getAllCategories } from '@/services/category.service';
import { getAllProducts } from '@/services/product.service';

export default async function Home() {
  const [categories, products] = await Promise.all([getAllCategories(), getAllProducts()]);

  return (
    <main className="mb-52 overflow-x-hidden">
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
