import Button from '@/app/(landing)/_components/UI/Button';
import Image from 'next/image';
import { FiFastForward } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section id="hero-section" className="container flex h-screen mx-auto px-4">
      <div className="relative self-center">
        <Image
          src="/images/img-basketball.png"
          alt="Basketball"
          width={423}
          height={423}
          className="absolute -top-20 left-0 grayscale"
        />
        <div className="relative w-full ml-40">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="text-[95px] text-transparent font-extrabold italic leading-tight bg-linear-to-b from-black to-[#979797] bg-clip-text">
            WEAR YOUT <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>
          <p className="w-[43%] mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium
            fabrics. Unmatched comfort. Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Explore More <Image src="/icons/icon-play-video.svg" alt="Icon Play Video" width={29} height={29} />
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={700}
          height={950}
          className="absolute top-1/2 -right-5 -translate-y-1/2"
        />
      </div>
      <Image
        src="/images/img-ornament-hero.svg"
        alt="Hero Pattern"
        width={420}
        height={420}
        className="absolute top-1/2 -right-50 -translate-y-1/2"
      />
    </section>
  );
}
