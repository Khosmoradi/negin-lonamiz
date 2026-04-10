"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] md:min-h-screen flex-col items-center justify-center px-4"
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
          Negin Lonamiz
        </motion.h1>

        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.3, ease: "easeOut" }}
        >
          <div className="h-10 w-px bg-foreground/35" />
          <div className="-mt-px h-2 w-2 rounded-full bg-foreground/35" />
        </motion.div>
      </div>
    </section>
  );
}
