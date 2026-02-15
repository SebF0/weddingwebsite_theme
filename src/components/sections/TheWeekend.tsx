import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

const THE_WEEKEND_IMAGE_PATH = "/Assets/Seb+Lou_CoolBoat.jpeg";

/**
 * Weekend events section with alternating day blocks.
 * Background image with overlay for dramatic styling.
 */
export default function TheWeekend() {
  const { heading, subheading, days } = SITE_CONTENT.theWeekend;

  return (
    <section
      id="the-weekend"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-olive-light"
        aria-hidden="true"
      >
        <Image
          src={THE_WEEKEND_IMAGE_PATH}
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
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        {/* Section heading */}
  {/*       <div className="text-center">
          <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-script text-lg text-white/90 md:text-xl">
            {subheading}
          </p>
        </div> */}

        {/* Day blocks - alternating layouts */}
        <div className="mt-16 space-y-12 md:mt-20 md:space-y-16">
          {days.map((day, index) => {
            const isEven = index % 2 === 0;
            const hasTimeline = "timeline" in day && Array.isArray(day.timeline);

            return (
              <div
                key={day.name}
                className={`flex flex-col gap-6 md:flex-row md:items-stretch md:gap-10 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Day name and title */}
                <div className="flex md:w-1/3">
                  <div className="flex h-full w-full flex-col justify-center bg-olive/60 px-6 py-6 md:px-8 md:py-8">
                    <p className="font-serif-main text-sm uppercase tracking-wedding-wide text-white/70 md:text-base">
                      {day.name}
                    </p>
                    <h3 className="mt-2 font-script text-3xl text-white md:text-4xl">
                      {day.title}
                    </h3>
                  </div>
                </div>

                {/* Day details */}
                <div className="flex md:w-2/3">
                  <div className="flex h-full w-full flex-col bg-olive/60 px-6 py-6 md:px-8 md:py-8">
                    <p className="font-serif-main text-base leading-relaxed text-white/90 md:text-lg">
                      {day.description}
                    </p>

                    {/* Timeline for Sunday */}
                    {hasTimeline && (
                      <div className="mt-6 space-y-4 border-t border-white/20 pt-6">
                        {day.timeline.map((event: any) => (
                          <div
                            key={event.label}
                            className="flex items-start gap-4"
                          >
                            {/* Icon */}
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30">
                              <TimelineIcon
                                name={event.icon}
                                className="h-5 w-5 text-white/70"
                              />
                            </div>

                            {/* Time and description */}
                            <div className="flex-1">
                              <div className="flex flex-wrap items-baseline gap-2">
                                <span className="font-serif-main text-sm uppercase tracking-wider text-white/80">
                                  {event.time}
                                </span>
                                <span className="font-serif-main text-base text-white">
                                  {event.label}
                                </span>
                              </div>
                              <p className="mt-1 font-serif-main text-sm text-white/70">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dresscode */}
                    {"dresscode" in day && (
                      <p className="mt-4 border-t border-white/20 pt-4 font-serif-main text-sm italic text-white/80">
                        Dresscode: {day.dresscode}
                      </p>
                    )}

                    {/* Children note */}
                    {"children" in day && (
                      <p className="mt-3 font-serif-main text-sm text-white/70">
                        {day.children}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
