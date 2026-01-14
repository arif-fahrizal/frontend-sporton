import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import { FiFastForward } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section id="hero-section" className="container flex h-screen mx-auto px-4">
      <div className="relative self-center w-full">
        <Image
          src="/images/img-basketball.png"
          alt="Basketball"
          width={423}
          height={423}
          className="absolute hidden grayscale object-contain md:block md:size-80 md:-top-20 md:-left-20 lg:size-105 lg:-top-30 lg:left-0"
        />
        <div className="relative w-full lg:ml-24">
          <span className="py-1 px-2 text-xs text-primary italic rounded-full bg-primary/10 md:text-sm md:py-2 md:px-3 lg:text-base">
            Friday Sale, 50%
          </span>
          <h1 className="mt-1.5 text-4xl text-transparent font-extrabold italic leading-tight bg-linear-to-b from-black to-[#979797] bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            WEAR YOUR <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>
          <p className="text-sm mt-10 leading-loose xs:w-[45ch] lg:w-[55ch]">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium
            fabrics. Unmatched comfort. Limitless motion.
          </p>
          <div className="flex gap-3 mt-14">
            <Button className="py-1! px-2.5! text-sm xs:py-2! xs:px-4! md:py-2.5! md:px-7! lg:py-4! lg:px-9! lg:text-base">
              Explore More <FiFastForward />
            </Button>
            <Button
              variant="ghost"
              className="py-1! px-2.5! text-sm xs:py-2! xs:px-4! md:py-2.5! md:px-7! lg:py-4! lg:px-9! lg:text-base"
            >
              Explore More <Image src="/icons/icon-play-video.svg" alt="Icon Play Video" width={29} height={29} />
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={700}
          height={950}
          className="absolute hidden md:block md:w-140 md:h-160 md:-top-25 md:-right-50 lg:w-150 lg:h-170 lg:-right-40 xl:w-180 xl:h-200 xl:-top-25 xl:-right-50 2xl:-top-32 2xl:right-20"
        />
      </div>
      <Image
        src="/images/img-ornament-hero.svg"
        alt="Hero Pattern"
        width={420}
        height={420}
        className="absolute hidden top-1/2 -right-50 -translate-y-1/2 2xl:block"
      />
    </section>
  );
}
