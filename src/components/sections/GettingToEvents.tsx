import { SITE_CONTENT } from "@/config/content";
import TimelineIcon from "@/components/icons/TimelineIcon";

/**
 * Light section with travel information.
 * Icons for flying and car hire help break up text content.
 */
export default function GettingToEvents() {
  const { heading, sections } = SITE_CONTENT.gettingToEvents;

  return (
    <section
      id="getting-to-events"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <h2 className="text-center font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
          {heading}
        </h2>

        {/* Travel sections */}
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {sections.map((section) => (
            <div key={section.title} className="text-center md:text-left">
              {/* Icon and title */}
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-olive/30 md:h-16 md:w-16">
                  <TimelineIcon
                    name={section.icon}
                    className="h-7 w-7 text-olive/70 md:h-8 md:w-8"
                  />
                </div>
                <h3 className="font-serif-main text-xl font-semibold uppercase tracking-wide text-olive md:mt-3 md:text-2xl">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="mt-6 space-y-4 text-center md:ml-20 md:text-left">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-serif-main text-base leading-relaxed text-olive/80 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Optional list */}
                {section.list && (
                  <ul className="ml-0 space-y-2 text-left md:ml-6">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="font-serif-main text-base leading-relaxed text-olive/70 md:text-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional note */}
                {section.note && (
                  <p className="font-serif-main text-base italic leading-relaxed text-olive/70 md:text-lg">
                    {section.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
