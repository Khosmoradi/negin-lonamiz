"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const artworks = [
  {
    id: 1,
    title: "Back to Breath",
    year: "2025",
    technique: "Acrylique et techniques mixtes sur toile",
    dimensions: "100 × 80 cm",
    image: "/artworks/Back to Breath.jpg",
    width: 1000,
    height: 800,
    alt: "Peinture abstraite Back to Breath par Tanya Lytko",
  },
  {
    id: 2,
    title: "Between Seasons",
    year: "",
    technique: "Acrylique et techniques mixtes sur papier",
    dimensions: "42 × 30 cm",
    image: "/artworks/Between Seasons.jpg",
    width: 420,
    height: 300,
    alt: "Peinture abstraite Between Seasons par Tanya Lytko",
  },
  {
    id: 3,
    title: "REFLECTIONS",
    year: "",
    technique: "Acrylique et techniques mixtes sur toile",
    dimensions: "80 × 60 cm",
    image: "/artworks/REFLECTIONS.jpg",
    width: 800,
    height: 600,
    alt: "Peinture abstraite REFLECTIONS par Tanya Lytko",
  },
  {
    id: 4,
    title: "The Gate",
    year: "",
    technique: "Acrylique et techniques mixtes sur papier",
    dimensions: "42 × 30 cm",
    image: "/artworks/The Gate.jpg",
    width: 420,
    height: 300,
    alt: "Peinture abstraite The Gate par Tanya Lytko",
  },
  {
    id: 5,
    title: "FEUILLES",
    year: "",
    technique: "Acrylique et techniques mixtes sur toile",
    dimensions: "60 × 60 cm",
    image: "/artworks/FEUILLES.jpg",
    width: 600,
    height: 600,
    alt: "Peinture abstraite FEUILLES par Tanya Lytko",
  },
  {
    id: 6,
    title: "Whisper of Warmth",
    year: "",
    technique: "Acrylique et techniques mixtes sur toile",
    dimensions: "90 × 70 cm",
    image: "/artworks/Whisper of Warmth.jpg",
    width: 900,
    height: 700,
    alt: "Peinture abstraite Whisper of Warmth par Tanya Lytko",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAD8A0t//2Q==";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function Gallery() {
  return (
    <section id="oeuvres" className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="mb-12 flex flex-col items-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl font-medium text-foreground md:text-4xl">
            Œuvres
          </h2>
          <div className="mt-4 h-0.5 w-[60px] bg-accent-warm" />
        </motion.div>

        {/* Desktop: asymmetric masonry layout */}
        <div className="hidden lg:block">
          {/* Row 1: large (65%) + small (35%) */}
          <div className="mb-4 flex gap-4">
            <motion.article
              custom={0}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[65%]"
            >
              <ArtworkCard artwork={artworks[0]} priority sizeHint="large" />
            </motion.article>
            <motion.article
              custom={1}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[35%]"
            >
              <ArtworkCard artwork={artworks[1]} priority sizeHint="small" />
            </motion.article>
          </div>

          {/* Row 2: small (35%) + large (65%) */}
          <div className="mb-4 flex gap-4">
            <motion.article
              custom={2}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[35%]"
            >
              <ArtworkCard artwork={artworks[2]} sizeHint="small" />
            </motion.article>
            <motion.article
              custom={3}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[65%]"
            >
              <ArtworkCard artwork={artworks[3]} sizeHint="large" />
            </motion.article>
          </div>

          {/* Row 3: two-column layout like Row 2, constrained height */}
          <div className="flex gap-4">
            <motion.article
              custom={4}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[35%]"
            >
              <ArtworkCard artwork={artworks[4]} sizeHint="small" constrainedHeight />
            </motion.article>
            <motion.article
              custom={5}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[65%]"
            >
              <ArtworkCard artwork={artworks[5]} sizeHint="large" constrainedHeight />
            </motion.article>
          </div>
        </div>

        {/* Tablet: two-column uniform grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:hidden">
          {artworks.map((artwork, index) => (
            <motion.article
              key={artwork.id}
              custom={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ArtworkCard artwork={artwork} priority={index < 2} />
            </motion.article>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-4 md:hidden">
          {artworks.map((artwork, index) => (
            <motion.article
              key={artwork.id}
              custom={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ArtworkCard artwork={artwork} priority={index < 2} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtworkCard({
  artwork,
  priority = false,
  sizeHint = "large",
  constrainedHeight = false,
}: {
  artwork: (typeof artworks)[0];
  priority?: boolean;
  sizeHint?: "large" | "small";
  constrainedHeight?: boolean;
}) {
  const sizes =
    sizeHint === "large"
      ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 65vw"
      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 35vw";

  return (
    <div
      className={`group overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg ${constrainedHeight ? "flex flex-col items-center" : ""}`}
    >
      <div
        className={`relative flex min-h-0 shrink-0 items-center justify-center overflow-hidden bg-[var(--color-bg-warm)] p-4 ${constrainedHeight ? "max-h-[70vh] w-full max-w-full" : ""}`}
        style={{ aspectRatio: `${artwork.width}/${artwork.height}` }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <Image
            src={artwork.image}
            alt={artwork.alt}
            width={artwork.width}
            height={artwork.height}
            sizes={sizes}
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={priority}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-2 py-3">
        <div className="flex items-baseline justify-end gap-2">
          <span className="font-heading text-base italic text-foreground">
            {artwork.title}
          </span>
          {artwork.year && (
            <span className="text-sm text-[var(--color-text-muted)]">
              {artwork.year}
            </span>
          )}
        </div>
        <p className="font-body text-xs text-[var(--color-text-muted)] text-right">
          {artwork.technique} — {artwork.dimensions}
        </p>
      </div>
    </div>
  );
}
