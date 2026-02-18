import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

const THE_WEEKEND_VIDEO_DESKTOP = "/Assets/SriLankaCrop2.mov";
const THE_WEEKEND_VIDEO_MOBILE = "/Assets/SriLankaMobileVert.mov";

/**
 * Dark-themed section for Sunday events with vertical timeline.
 * Simple stacked layout with background video and overlay.
 */
export default function TheWeekend() {
  const { heading, subheading, timeline, dresscode, children } = SITE_CONTENT.theWeekend;

  return (
    <section
      id="the-weekend"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background video */}
      <div
        className="absolute inset-0 bg-olive-light"
        aria-hidden="true"
      >
        <video
          src={THE_WEEKEND_VIDEO_DESKTOP}
          autoPlay
          muted
          loop
          playsInline
          className="hidden h-full w-full object-cover md:block"
        />
        <video
          src={THE_WEEKEND_VIDEO_MOBILE}
          autoPlay
          muted
          loop
          playsInline
          className="block h-full w-full object-cover md:hidden"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-olive-light/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center md:px-10">
        <div className="mx-auto w-full max-w-3xl bg-olive/60 px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-2xl">
            {/* Heading */}
            <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-white md:text-4xl">
              {heading}
            </h2>

            {/* Subheading */}
            <p className="mx-auto mt-4 max-w-lg font-script text-lg text-white/90 md:text-xl">
              {subheading}
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-6 text-left md:mt-12">
              {timeline.map((event) => (
                <div
                  key={event.label}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/30 md:h-14 md:w-14">
                    <TimelineIcon
                      name={event.icon}
                      className="h-6 w-6 text-white/70 md:h-7 md:w-7"
                    />
                  </div>

                  {/* Time and description */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-serif-main text-sm uppercase tracking-wider text-white/80 md:text-base">
                        {event.time}
                      </span>
                      <span className="font-serif-main text-base text-white md:text-lg">
                        {event.label}
                      </span>
                    </div>
                    <p className="mt-1 font-serif-main text-sm leading-relaxed text-white/80 md:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dresscode */}
            <p className="mt-8 border-t border-white/20 pt-6 text-center font-serif-main text-sm text-white/90 md:text-base">
              Dresscode: {dresscode}
            </p>

            {/* Children note */}
            <p className="mt-4 text-center font-serif-main text-sm leading-relaxed text-white/90 md:text-base">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
