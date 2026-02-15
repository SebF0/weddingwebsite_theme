/**
 * Reusable stub section for future content.
 * Pass an id, heading, and optional description to render a placeholder.
 * Replace the placeholder with real content when ready.
 */

interface SectionStubProps {
  id: string;
  heading: string;
  description?: string;
}

export default function SectionStub({ id, heading, description }: SectionStubProps) {
  return (
    <section
      id={id}
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10 lg:px-16">
        <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 font-serif-main text-base text-olive/60 md:text-lg">
            {description}
          </p>
        )}
        {/* Replace this placeholder with section-specific content */}
        <div className="mt-10 rounded border border-dashed border-olive/20 px-8 py-12">
          <p className="font-serif-main text-sm italic text-olive/40">
            Content coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
