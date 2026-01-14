import CategoriesSection from '@/app/(landing)/_components/Pages/Home/CategoriesSection';
import HeroSection from '@/app/(landing)/_components/Pages/Home/HeroSection';
import ProductsSection from '@/app/(landing)/_components/Pages/Home/ProductsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
