import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const CATEGORIES = [
  {
    name: 'Running',
    image: 'category-running.png',
  },
  {
    name: 'Tennis',
    image: 'category-tennis.png',
  },
  {
    name: 'Basketball',
    image: 'category-basketball.png',
  },
  {
    name: 'Football',
    image: 'category-football.png',
  },
  {
    name: 'Badminton',
    image: 'category-badminton.png',
  },
  {
    name: 'Swimming',
    image: 'category-swimming.png',
  },
];

export default function CategoriesSection() {
  return (
    <section id="category-section" className="container mx-auto mb-20">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {CATEGORIES.map((category, index) => (
          <div
            key={`categories-${index}`}
            className="flex justify-center w-full aspect-square rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7]"
          >
            <div className="self-center">
              <Image
                src={`/categories/${category.image}`}
                alt={category.name}
                width={86}
                height={86}
                className="mb-2.5"
              />
              <span className="text-xl text-center text-primary font-medium">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
