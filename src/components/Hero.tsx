"use client";

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
          className="font-heading font-medium tracking-tight text-foreground"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tanya Lytko
        </motion.h1>

        <motion.p
          className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Art Abstrait Contemporain
        </motion.p>

        <motion.p
          className="mt-2 font-body text-sm italic text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          Aix-les-Bains, France
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="scroll-indicator flex flex-col items-center gap-1">
          <div className="h-10 w-px bg-foreground/30" />
          <div className="h-2 w-2 rounded-full bg-foreground/40" />
        </div>
      </div>

    </section>
  );
}
