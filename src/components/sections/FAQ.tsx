"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONTENT } from "@/config/content";

/**
 * FAQ section with accordion-style collapsible questions.
 * Light cream theme with dynamic content from config.
 */
export default function FAQ() {
  const { heading, questions } = SITE_CONTENT.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <h2 className="text-center font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl">
          {heading}
        </h2>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4 md:mt-16">
          {questions.map((faq, index) => (
            <div
              key={index}
              className="border-b border-olive/20"
            >
              {/* Question button */}
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-olive/70"
              >
                <h3 className="font-serif-main text-lg font-semibold uppercase text-olive md:text-xl">
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-4 flex-shrink-0 text-olive/60 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Answer content */}
              {openIndex === index && (
                <div className="pb-6 pr-8">
                  <div className="space-y-4">
                    {faq.answer.map((item, i) => {
                      if (item.type === "subtitle") {
                        return (
                          <p
                            key={i}
                            className="font-serif-main text-base font-semibold text-olive md:text-lg"
                          >
                            {item.content}
                          </p>
                        );
                      }

                      if (item.type === "text") {
                        return (
                          <p
                            key={i}
                            className="font-serif-main text-base leading-relaxed text-olive/80 md:text-lg"
                          >
                            {item.content}
                          </p>
                        );
                      }

                      if (item.type === "image") {
                        return (
                          <div
                            key={i}
                            className="relative mt-6 aspect-video w-full overflow-hidden rounded border border-olive/30 bg-cream-dark"
                          >
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 800px"
                            />
                          </div>
                        );
                      }

                      if (item.type === "link") {
                        return (
                          <a
                            key={i}
                            href={item.url}
                            className="inline-block font-serif-main text-base font-semibold text-olive underline transition-colors hover:text-olive/70 md:text-lg"
                          >
                            {item.text}
                          </a>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
