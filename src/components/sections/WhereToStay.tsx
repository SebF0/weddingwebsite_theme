import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

/**
 * Dark-themed section with accommodation information.
 * Uses olive-light background with white text for contrast.
 */
export default function WhereToStay() {
  const { heading, sections } = SITE_CONTENT.whereToStay;

  return (
    <section
      id="where-to-stay"
      className="bg-olive-light py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <h2 className="text-center font-serif-main text-3xl uppercase tracking-wedding text-white md:text-4xl">
          {heading}
        </h2>

        {/* Accommodation sections */}
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {sections.map((section) => (
            <div key={section.title} className="text-left">
              {/* Icon and title */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/30 md:h-16 md:w-16">
                  <TimelineIcon
                    name={section.icon}
                    className="h-7 w-7 text-white/70 md:h-8 md:w-8"
                  />
                </div>
                <h3 className="mt-3 font-serif-main text-xl font-semibold uppercase tracking-wide text-white md:text-2xl">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="mt-6 ml-0 space-y-4 md:ml-20">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-serif-main text-base leading-relaxed text-white/90 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
