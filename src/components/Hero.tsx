"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
      style={{
        background: `linear-gradient(to bottom, var(--color-bg), var(--color-bg-warm))`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.h1
          className="break-words font-heading font-medium tracking-tight text-foreground"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 7rem)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
        >
          Tanya Lytko
        </motion.h1>

        {/* Flower image - relative below heading on mobile, absolute bottom on desktop */}
        <motion.div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 justify-center md:bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 3.3, ease: "easeOut" },
            y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          }}
        >
          <Image
            src="/flower.png"
            alt="Painted flower"
            width={70}
            height={80}
            className="h-auto w-[70px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
