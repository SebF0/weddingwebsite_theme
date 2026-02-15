import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

const COUPLE_PHOTO_PATH = "/Assets/Seb+Lou_RockPool.jpeg";

/**
 * Two-column section: framed couple photo on the left, date & venue on the right.
 * Stacks vertically on mobile.
 */
export default function DateVenue() {
  const { date, preposition, venue } = SITE_CONTENT.dateVenue;

  return (
    <section
      id="date-venue"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        {/* ── Photo frame ─────────────────────────────────── */}
        <div className="flex justify-center">
          <div className="border-2 border-olive/70 p-2">
            <div className="border border-white/60 p-1">
              <div className="relative aspect-[4/5] w-64 overflow-hidden bg-olive/80 md:w-72 lg:w-80">
                <Image
                  src={COUPLE_PHOTO_PATH}
                  alt="Seb and Lou"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Date & venue text ────────────────────────────── */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-script text-4xl text-olive md:text-5xl lg:text-6xl">
            {date}
          </p>
          <p className="mt-2 font-serif-main text-lg font-light italic text-olive/70 md:text-xl">
            {preposition}
          </p>
          <p className="mt-1 font-serif-main text-2xl uppercase tracking-wedding text-olive md:text-3xl">
            {venue}
          </p>
        </div>
      </div>
    </section>
  );
}
