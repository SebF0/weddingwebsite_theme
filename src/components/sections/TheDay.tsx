import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

/**
 * Horizontal timeline section showing the day's schedule.
 * Icons are simple SVGs; times and labels come from config/content.ts.
 */
export default function TheDay() {
  const { heading, subheading, timeline } = SITE_CONTENT.theDay;

  return (
    <section
      id="the-day"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-16">
        {/* Section heading */}
        <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
          {heading}
        </h2>

        {/* Subheading in script */}
        <p className="mx-auto mt-4 max-w-lg font-script text-lg text-olive/70 md:text-xl">
          {subheading}
        </p>

        {/* Timeline */}
        <div className="mt-14 flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-14">
          {timeline.map((item) => (
            <div
              key={item.label}
              className="flex w-20 flex-col items-center md:w-24"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-olive/30 md:h-16 md:w-16">
                <TimelineIcon
                  name={item.icon}
                  className="h-7 w-7 text-olive/70 md:h-8 md:w-8"
                />
              </div>

              {/* Time */}
              <p className="mt-3 font-serif-main text-xs uppercase tracking-wider text-olive/60 md:text-sm">
                {item.time}
              </p>

              {/* Label */}
              <p className="mt-1 font-serif-main text-xs text-olive md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
