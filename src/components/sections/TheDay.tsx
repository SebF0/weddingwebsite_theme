import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

/**
 * Horizontal timeline section showing the day's schedule.
 * Icons are simple SVGs; times and labels come from config/content.ts.
 */
export default function TheDay() {
  const { heading, timeline, dresscode, children, ceremony, reception } = SITE_CONTENT.theDay;

  return (
    <section
      id="the-day"
      className="bg-cream py-16 md:py-24 lg:py-30"
    >
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-16">
        {/* Section heading */}
        <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
          {heading}
        </h2>

        {/* Ceremony */}
        <p className="mx-auto mt-4 max-w-lg font-script text-xl text-olive/70 md:text-2xl">
          {ceremony}
        </p>

        {/* Reception */}
        <p className="mx-auto mt-4 max-w-lg font-script text-xl text-olive/70 md:text-2xl">
          {reception}
        </p>

        {/* Timeline */}
        <div className="mt-10 mb-14 flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-14">
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
              <p className="mt-3 font-serif-main text-sm uppercase tracking-wider text-olive/60 md:text-base">
                {item.time}
              </p>

              {/* Label */}
              <p className="mt-1 font-serif-main text-sm text-olive md:text-base">
                {item.label}
              </p>
            </div>
          ))}
                   
        </div>
 {/* Dresscode */}
 <p className="mx-auto mt-4 max-w-lg font-script text-xl text-olive/70 md:text-2xl">
          {dresscode}
        </p>
                {/* Chldren */}
                <p className="mx-auto mt-4 max-w-lg font-script text-xl text-olive/70 md:text-2xl">
          {children}
        </p>
      </div>
    </section>
  );
}
