"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const bioText = `Negin Lonamiz (née en 1995, Iran) est une peintre basée à Paris. Pour elle, la peinture est une forme d'investigation et de confrontation — une manière de regarder les choses de près et de les comprendre de l'intérieur.

Son travail aborde des thèmes tels que le temps, la nature, l'émotion et la relation entre passé, présent et futur. Ces sujets ne sont pas traités comme des thèmes fixes, mais comme des expériences en évolution qui prennent forme à travers le processus de création.

Son expérience vécue en Iran, marquée par l'instabilité et la tension, a profondément influencé sa perspective. Dans ce contexte, la peinture devient une forme d'endurance — un acte de regard, de maintien et de continuation.

Son approche est ancrée dans l'engagement direct avec les phénomènes : observer, tester et reconstruire. Le matériau, la ligne, la forme et la sensibilité aux processus naturels jouent un rôle central dans l'élaboration de son langage visuel.`;

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="biographie" className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left column: Artist photo — full width on mobile, top */}
          <motion.div
            className="relative order-1 flex justify-center lg:order-1 lg:justify-end"
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
                  src="/profile/negin.jpg"
                  alt="Negin Lonamiz — Artiste peintre"
                  width={500}
                  height={600}
                  className={`h-auto w-full object-cover img-load ${imageLoaded ? "loaded" : ""}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </motion.div>

          {/* Right column: Biography text — below photo on mobile */}
          <motion.div
            className="order-2 flex flex-col justify-center"
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
