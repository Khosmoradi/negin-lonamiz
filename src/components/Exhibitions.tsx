"use client";

import { motion } from "framer-motion";

const exhibitions = [
  { year: "2024", title: "Be Brave Art Show", location: "Austin, Texas, USA" },
  { year: "2024", title: "NFT Show @Rdland", location: "USA" },
  { year: "2023", title: "Forbidden Exhibition", location: "Ukraine" },
  { year: "2023", title: "Ernst & Young Exhibition", location: "Stuttgart, Allemagne" },
  { year: "2022", title: "HTX Houston", location: "USA" },
  { year: "2022", title: "NYC Art Movement", location: "New York, USA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function Exhibitions() {
  return (
    <section id="expositions" className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center font-heading text-3xl font-medium text-foreground md:mb-16 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Expositions
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line - 1px */}
          <div
            className="absolute left-[8px] top-2 bottom-2 w-px md:left-[21px]"
            style={{ backgroundColor: "var(--color-accent-soft)" }}
          />

          <div className="space-y-0">
            {exhibitions.map((entry, index) => (
              <motion.div
                key={`${entry.year}-${entry.title}-${index}`}
                custom={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex flex-col gap-1 pl-10 md:flex-row md:items-baseline md:gap-8 md:pl-16 md:pb-8 last:pb-0"
              >
                {/* Timeline dot - 6px circle, accent color */}
                <div
                  className="absolute left-[5px] top-1.5 h-[6px] w-[6px] shrink-0 rounded-full md:left-[18px] md:top-2"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />

                {/* Year - left on desktop, stacked above on mobile */}
                <div className="shrink-0 md:w-20">
                  <span
                    className="font-heading text-2xl font-bold md:text-3xl"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {entry.year}
                  </span>
                </div>

                {/* Title + location */}
                <div className="font-body">
                  <span className="font-medium text-foreground">
                    {entry.title}
                  </span>
                  <span className="text-[var(--color-text-muted)]">
                    {" — "}
                    {entry.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
