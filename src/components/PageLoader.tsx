"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--color-bg)" }}
          initial={{ opacity: 1 }}
          exit={{
            y: "-100vh",
            transition: {
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
        >
          <span
            className="font-heading text-5xl font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
          >
            TL
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
