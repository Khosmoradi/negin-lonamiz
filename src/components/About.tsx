"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bioText = `Tanya Lytko est une artiste peintre ukrainienne contemporaine, née en 1986 dans la région d'Odessa. Depuis 2013, elle explore l'abstraction et l'expressionnisme abstrait à travers des toiles vibrantes chargées d'émotion.
Ses œuvres se distinguent par des couleurs intenses, des lignes brisées et des compositions profondément expressives. Elles figurent dans des collections privées en Europe, aux États-Unis et en Ukraine.
Depuis 2024, Tanya vit et travaille à Aix-les-Bains, en France, où la lumière et les paysages alpins nourrissent sa pratique artistique.`;

export default function About() {
  return (
    <section id="biographie" className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left column: Artist photo */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="relative w-full max-w-md"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div
                className="overflow-hidden rounded-none"
                style={{
                  border: "2px solid var(--color-accent-soft)",
                }}
              >
                <Image
                  src="/profile/tanya.jpg"
                  alt="Tanya Lytko — Artiste peintre"
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>

          {/* Right column: Biography text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
              Biographie
            </h2>
            <div className="mt-4 mb-6 h-0.5 w-[60px] bg-accent-warm" />
            <div className="font-body leading-relaxed text-[var(--color-text-muted)] [&>p]:mb-4">
              {bioText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
