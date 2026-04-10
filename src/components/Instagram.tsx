"use client";

import BeholdWidget from "@behold/react";
import AnimatedSection from "./AnimatedSection";

export default function Instagram() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg-warm)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="mb-2 text-center font-heading text-3xl font-medium text-foreground md:text-4xl">
            Suivez-moi sur Instagram
          </h2>
          <p className="mb-10 text-center font-body">
            <a
              href="https://www.instagram.com/neginlonamizstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-2 transition-opacity hover:opacity-80"
            >
              @neginlonamizstudio
            </a>
          </p>

          <div className="mx-auto max-w-5xl">
            <BeholdWidget feedId="UUMKsk3UdsFxdlxCAxa6" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
