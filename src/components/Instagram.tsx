"use client";

import AnimatedSection from "./AnimatedSection";

export default function Instagram() {
  const placeholderCount = 6;

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-bg-warm)" }}
    >
      {/* TODO: Connect Instagram Basic Display API or Elfsight widget */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="mb-2 text-center font-heading text-3xl font-medium text-foreground md:text-4xl">
          Suivez-moi sur Instagram
        </h2>
        <p className="mb-10 text-center font-body">
          <a
            href="https://instagram.com/tanyalytko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-2 transition-opacity hover:opacity-80"
          >
            @tanyalytko
          </a>
        </p>

        <div
          className="flex touch-pan-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={i}
              className="h-[250px] w-[250px] shrink-0 rounded-lg"
              style={{
                background: `linear-gradient(135deg, var(--color-accent-soft) 0%, var(--color-accent-amber) 50%, var(--color-bg-warm) 100%)`,
                opacity: 0.9,
              }}
            />
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
