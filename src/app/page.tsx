import Hero from "@/components/sections/Hero";
import DateVenue from "@/components/sections/DateVenue";
import OurSpecialDay from "@/components/sections/OurSpecialDay";
import TheDay from "@/components/sections/TheDay";
import TheWeekend from "@/components/sections/TheWeekend";
import SectionStub from "@/components/sections/SectionStub";
import { SITE_CONTENT } from "@/config/content";

/**
 * Home page — assembles all sections in order.
 * Add or reorder sections here. Content is pulled from config/content.ts.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DateVenue />
      <OurSpecialDay />
      <TheDay />
      <TheWeekend />

      {/* ── Stub sections — replace with full components when ready ── */}
      <div className="divide-y divide-olive/10">
        <SectionStub
          id="rsvp"
          heading={SITE_CONTENT.rsvp.heading}
          description={SITE_CONTENT.rsvp.description}
        />
        <SectionStub
          id="accommodation"
          heading={SITE_CONTENT.accommodation.heading}
          description={SITE_CONTENT.accommodation.description}
        />
        <SectionStub
          id="travel"
          heading={SITE_CONTENT.travel.heading}
          description={SITE_CONTENT.travel.description}
        />
        <SectionStub
          id="faq"
          heading={SITE_CONTENT.faq.heading}
          description={SITE_CONTENT.faq.description}
        />
      </div>
    </>
  );
}
