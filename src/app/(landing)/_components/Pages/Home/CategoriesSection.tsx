import { getImageUrl } from '@/lib/api';
import { Category } from '@/types/categories.type';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// const CATEGORIES = [
//   {
//     name: 'Running',
//     image: 'category-running.png',
//   },
//   {
//     name: 'Tennis',
//     image: 'category-tennis.png',
//   },
//   {
//     name: 'Basketball',
//     image: 'category-basketball.png',
//   },
//   {
//     name: 'Football',
//     image: 'category-football.png',
//   },
//   {
//     name: 'Badminton',
//     image: 'category-badminton.png',
//   },
//   {
//     name: 'Swimming',
//     image: 'category-swimming.png',
//   },
// ];

interface TCategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({ categories }: Readonly<TCategoriesSectionProps>) {
  return (
    <section id="category-section" className="container mx-auto mb-12 px-4 sm:mb-16 md:mb-20">
      <div className="flex flex-col justify-between items-start gap-4 mb-6 sm:flex-row sm:items-center md:mb-8">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Browse By Categories</h2>
        <Link href="#" className="flex items-center gap-2 text-primary font-medium transition-all hover:gap-3">
          <span className="text-sm sm:text-base">See All Categories</span>
          <FiArrowRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 md:gap-6 lg:gap-8 xl:gap-14">
        {categories.map((category, index) => (
          <Link key={`categories-${index}`} href="#" className="group">
            <div className="flex flex-col justify-center items-center w-full aspect-square p-2 rounded-lg transition-all duration-300 bg-linear-to-br from-[#F1F1F1] to-[#F7F7F7] cursor-pointer hover:shadow-lg hover:scale-105 md:p-3 lg:p-4">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="relative w-16 h-16 mb-2 transition-transform duration-300 group-hover:scale-110 sm:w-18 sm:h-18 sm:mb-2.5 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                  <Image
                    src={getImageUrl(category.imageUrl)}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 86px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-center text-primary font-medium transition-colors group-hover:text-primary/80 sm:text-sm lg:text-xl">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
