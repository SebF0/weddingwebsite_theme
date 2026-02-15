import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

const RSVP_PHOTO_PATH = "/Assets/seb+lou_beachHug.jpeg";

/**
 * Two-column section: RSVP text on the left, framed photo on the right.
 * Stacks vertically on mobile with photo first.
 */
export default function RSVP() {
  const { heading, description, items, closing } = SITE_CONTENT.rsvp;

  return (
    <section
      id="rsvp"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        {/* ── RSVP text ─────────────────────────────────── */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
            {heading}
          </h2>

          <p className="mt-6 font-serif-main text-base leading-relaxed text-olive/80 md:text-lg">
            {description}
          </p>

          <ul className="mt-6 space-y-2">
            {items.map((item, i) => (
              <li
                key={i}
                className="font-serif-main text-base leading-relaxed text-olive/70 md:text-lg"
              >
                - {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif-main text-base italic leading-relaxed text-olive/80 md:text-lg">
            {closing}
          </p>
        </div>

        {/* ── Photo frame ─────────────────────────────────── */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="border-2 border-olive/70 p-2">
            <div className="border border-white/60 p-1">
              <div className="relative aspect-[4/5] w-64 overflow-hidden bg-olive/80 md:w-72 lg:w-80">
                <Image
                  src={RSVP_PHOTO_PATH}
                  alt="Seb and Lou"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
