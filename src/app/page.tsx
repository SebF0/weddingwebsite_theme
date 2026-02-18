import Hero from "@/components/sections/Hero";
import DateVenue from "@/components/sections/DateVenue";
import OurSpecialDay from "@/components/sections/OurSpecialDay";
import TheDay from "@/components/sections/TheDay";
import TheWeekend from "@/components/sections/TheWeekend";
import GettingToEvents from "@/components/sections/GettingToEvents";
import WhereToStay from "@/components/sections/WhereToStay";
import RSVP from "@/components/sections/RSVP";
import ExploreRegion from "@/components/sections/ExploreRegion";
import AskJeeves from "@/components/sections/AskJeeves";
import FAQ from "@/components/sections/FAQ";

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
      <GettingToEvents />
      <WhereToStay />
      <RSVP />
      <ExploreRegion />
      <AskJeeves />
      <FAQ />
    </>
  );
}
