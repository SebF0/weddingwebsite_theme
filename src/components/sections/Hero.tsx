import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

const HERO_IMAGE_PATH = "/Assets/chateau-swimmingPool.png";
// const HERO_IMAGE_PATH = "/Assets/WaterColourBackground2.png";
const SUNFLOWERS_IMAGE_PATH = "/Assets/Sunflowers.png";
const PLANTS_IMAGE_PATH = "/Assets/Plants.png";

/**
 * Full-viewport hero with a landscape background image.
 * Names use a mix of uppercase serif + decorative script.
 */
export default function Hero() {
  const { name1, name2, conjunction, tagline } = SITE_CONTENT.hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image — chateau venue */}
      <div
        className="absolute inset-0 bg-cream-dark"
        // className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src={HERO_IMAGE_PATH}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Semi-transparent warm overlay for readability */}
      <div
        className="absolute inset-0 bg-sage/60 backdrop-blur-[2px]"
        // className="absolute inset-0"
        aria-hidden="true"
      />

      {/* Sunflowers — lower left */}
{/*       <div
        className="absolute bottom-0 left-0 z-10 h-40 w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
        aria-hidden="true"
      >
        <Image
          src={SUNFLOWERS_IMAGE_PATH}
          alt=""
          fill
          className="object-contain object-left-bottom"
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
        />
      </div>
 */}
    {/* Plants — top right, below navbar */}
{/*       <div
        className="absolute right-0 top-16 z-10 h-40 w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
        aria-hidden="true"
      >
        <Image
          src={PLANTS_IMAGE_PATH}
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
        />
      </div>
 */}
      {/* Hero text block */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Couple names — large serif + script accent */}
        <h1 className="flex flex-col items-center leading-none">
          <span className="font-serif-main  text-5xl uppercase tracking-wedding text-cream md:text-7xl lg:text-8xl">
            {name1}
          </span>
          <span className="font-script -my-2 text-4xl text-cream md:-my-4 md:text-5xl lg:text-6xl">
            {conjunction}
          </span>
          <span className="font-serif-main text-5xl uppercase tracking-wedding text-cream md:text-7xl lg:text-8xl">
            {name2}
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 font-serif-main font-semibold text-sm uppercase tracking-wedding-wide text-cream/80 md:text-xl lg:text-2xl">
          {tagline}
        </p>
      </div>
    </section>
  );
}
