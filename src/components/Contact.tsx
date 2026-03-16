"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
            Contact
          </h2>
          <div className="mx-auto mt-4 mb-8 h-0.5 w-[60px] bg-accent-warm" />

          <p className="mb-6 font-body leading-relaxed text-foreground">
            Pour toute demande concernant les œuvres ou les expositions :
          </p>

          <div className="flex flex-col gap-4 font-body">
            <a
              href="mailto:tanyalytko@gmail.com"
              className="inline-block text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-2 transition-all hover:decoration-2"
            >
              tanyalytko@gmail.com
            </a>
            <a
              href="https://instagram.com/tanyalytko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-2 transition-opacity hover:opacity-80"
            >
              Instagram: @tanyalytko
            </a>
            <p className="text-[var(--color-text-muted)]">Aix-les-Bains, France</p>
          </div>

          {/* Decorative brush-stroke SVG */}
          <svg
            className="mx-auto mt-12 h-3 w-full max-w-xs"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 6 Q30 2, 60 7 T120 5 T180 8 L200 6"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={0.4}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
