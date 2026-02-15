import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

const CHATEAU_IMAGE_PATH = "/Assets/chateau-front-on.png";

/**
 * Dark-themed section with background image showcasing regional destinations.
 * Centered text with dark overlay for readability.
 */
export default function ExploreRegion() {
  const { heading, destinations, note } = SITE_CONTENT.exploreRegion;

  return (
    <section
      id="explore-region"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-olive-light"
        aria-hidden="true"
      >
        <Image
          src={CHATEAU_IMAGE_PATH}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-olive-light/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center md:px-10">
        <div className="mx-auto w-full max-w-4xl bg-olive/60 px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-2xl">
            {/* Heading */}
            <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-white md:text-4xl">
              {heading}
            </h2>

            {/* Destinations */}
            <div className="mt-10 space-y-6 md:mt-12">
              {destinations.map((destination) => (
                <div key={destination.name}>
                  <p className="font-serif-main text-lg font-semibold text-white md:text-xl">
                    {destination.name}
                  </p>
                  <p className="mt-1 font-serif-main text-base leading-relaxed text-white/90 md:text-lg">
                    {destination.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Note about villages */}
            <p className="mt-10 font-serif-main text-base italic leading-relaxed text-white/90 md:text-lg">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
