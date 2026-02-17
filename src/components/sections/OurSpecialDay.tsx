import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

const OUR_SPECIAL_DAY_IMAGE_PATH = "/Assets/proposal_sebRight2.jpeg";

/**
 * Full-width section with a dark sage-green overlay on a background image.
 * All text is white and centred, creating an elegant break between light sections.
 */
export default function OurSpecialDay() {
  const { heading, paragraphs, closing, signature } =
    SITE_CONTENT.ourSpecialDay;

  return (
    <section
      id="our-special-day"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-olive-light"
        aria-hidden="true"
      >
        <Image
          src={OUR_SPECIAL_DAY_IMAGE_PATH}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-olive-light/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center md:px-10">
        {/* Dark background for text readability — wider than text */}
        <div className="mx-auto w-full max-w-4xl bg-olive/60 px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-2xl">
            {/* Script heading */}
            <h2 className="font-script text-4xl text-white md:text-5xl lg:text-6xl">
              {heading}
            </h2>

            {/* Body paragraphs */}
            <div className="mt-8 space-y-5 md:mt-10">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="font-serif-main text-base leading-relaxed text-white/90 md:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Sign-off */}
            <p className="mt-10 font-serif-main text-base italic text-white/90 md:text-lg">
              {closing}
            </p>
            <p className="mt-2 font-script text-2xl text-white md:text-3xl">
              {signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
