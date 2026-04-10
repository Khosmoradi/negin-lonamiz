"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import type { LightboxArtwork } from "./Lightbox";

const artworks = [
  {
    id: 1,
    title: "Goodbye Blue Sky Series",
    year: "2023",
    technique: "Mixed Media on Canvas",
    dimensions: "213 × 194 cm",
    image: "/artworks/IMG_8801.jpg",
    width: 800,
    height: 730,
    alt: "Goodbye Blue Sky Series — Negin Lonamiz",
  },
  {
    id: 2,
    title: "Goodbye Blue Sky Series",
    year: "2023",
    technique: "Mixed Media on Canvas",
    dimensions: "194 × 173 cm",
    image: "/artworks/IMG_8802.jpg",
    width: 800,
    height: 713,
    alt: "Goodbye Blue Sky Series — Negin Lonamiz",
  },
  {
    id: 3,
    title: "Untitled",
    year: "2024",
    technique: "Mixed Media on Canvas",
    dimensions: "152 × 110 cm",
    image: "/artworks/IMG_8798.jpg",
    width: 800,
    height: 579,
    alt: "Untitled — Negin Lonamiz",
  },
  {
    id: 4,
    title: "Untitled",
    year: "2024",
    technique: "Mixed Media on Canvas",
    dimensions: "121 × 110 cm",
    image: "/artworks/IMG_8799.jpg",
    width: 800,
    height: 727,
    alt: "Untitled — Negin Lonamiz",
  },
  {
    id: 5,
    title: "Wish You Were Here Series",
    year: "2022",
    technique: "Mixed Media on Canvas",
    dimensions: "195 × 154 cm",
    image: "/artworks/Hedayat One_1.jpg",
    width: 800,
    height: 632,
    alt: "Wish You Were Here Series — Negin Lonamiz",
  },
  {
    id: 6,
    title: "Wish You Were Here Series",
    year: "2022",
    technique: "Mixed Media on Canvas",
    dimensions: "180 × 150 cm",
    image: "/artworks/IMG_2528.jpg",
    width: 800,
    height: 667,
    alt: "Wish You Were Here Series — Negin Lonamiz",
  },
  {
    id: 7,
    title: "Wish You Were Here Series",
    year: "2022",
    technique: "Papier mâché, Wood",
    dimensions: "30 × 17 × 12 cm",
    image: "/artworks/IMG_8805.jpg",
    width: 600,
    height: 800,
    alt: "Wish You Were Here Series — Negin Lonamiz",
  },
  {
    id: 8,
    title: "Wish You Were Here Series",
    year: "2022",
    technique: "Papier mâché, Wood",
    dimensions: "26 × 24 × 5 cm",
    image: "/artworks/IMG_8806.jpg",
    width: 800,
    height: 667,
    alt: "Wish You Were Here Series — Negin Lonamiz",
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
  const [lightboxArtwork, setLightboxArtwork] = useState<LightboxArtwork | null>(null);

  return (
    <section id="oeuvres" className="relative bg-background py-16 md:py-24">
      <Lightbox
        artwork={lightboxArtwork}
        isOpen={!!lightboxArtwork}
        onClose={() => setLightboxArtwork(null)}
      />
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
              <ArtworkCard artwork={artworks[0]} priority sizeHint="large" onClick={() => setLightboxArtwork(artworks[0])} />
            </motion.article>
            <motion.article
              custom={1}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[35%]"
            >
              <ArtworkCard artwork={artworks[1]} priority sizeHint="small" onClick={() => setLightboxArtwork(artworks[1])} />
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
              <ArtworkCard artwork={artworks[2]} sizeHint="small" onClick={() => setLightboxArtwork(artworks[2])} />
            </motion.article>
            <motion.article
              custom={3}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[65%]"
            >
              <ArtworkCard artwork={artworks[3]} sizeHint="large" onClick={() => setLightboxArtwork(artworks[3])} />
            </motion.article>
          </div>

          {/* Row 3: large (65%) + small (35%) */}
          <div className="mb-4 flex gap-4">
            <motion.article
              custom={4}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[65%]"
            >
              <ArtworkCard artwork={artworks[4]} sizeHint="large" onClick={() => setLightboxArtwork(artworks[4])} />
            </motion.article>
            <motion.article
              custom={5}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[35%]"
            >
              <ArtworkCard artwork={artworks[5]} sizeHint="small" onClick={() => setLightboxArtwork(artworks[5])} />
            </motion.article>
          </div>

          {/* Row 4: centered, max 40% each */}
          <div className="flex justify-center gap-4">
            <motion.article
              custom={6}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-[40%]"
            >
              <ArtworkCard artwork={artworks[6]} sizeHint="narrow" onClick={() => setLightboxArtwork(artworks[6])} />
            </motion.article>
            <motion.article
              custom={7}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-[40%]"
            >
              <ArtworkCard artwork={artworks[7]} sizeHint="narrow" onClick={() => setLightboxArtwork(artworks[7])} />
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
              <ArtworkCard artwork={artwork} priority={index < 2} onClick={() => setLightboxArtwork(artwork)} />
            </motion.article>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-8 md:hidden">
          {artworks.map((artwork, index) => (
            <motion.article
              key={artwork.id}
              custom={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ArtworkCard artwork={artwork} priority={index < 2} onClick={() => setLightboxArtwork(artwork)} />
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
  onClick,
}: {
  artwork: (typeof artworks)[0];
  priority?: boolean;
  sizeHint?: "large" | "small" | "narrow";
  constrainedHeight?: boolean;
  onClick?: () => void;
}) {
  const sizes =
    sizeHint === "large"
      ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 65vw"
      : sizeHint === "narrow"
        ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 35vw";

  return (
    <div
      className={`group overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg ${constrainedHeight ? "flex flex-col items-center" : ""}`}
    >
      <div
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
        onClick={onClick}
        className={`relative flex min-h-0 shrink-0 cursor-zoom-in items-center justify-center overflow-hidden bg-[var(--color-bg-warm)] p-4 ${constrainedHeight ? "max-h-[70vh] w-full max-w-full" : ""}`}
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
