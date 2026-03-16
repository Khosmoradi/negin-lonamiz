"use client";

import { motion } from "framer-motion";

const directionOffset = {
  up: 40,
  down: -40,
  left: 40,
  right: -40,
  none: 0,
};

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedSectionProps) {
  const offset = directionOffset[direction];
  const isVertical = direction === "up" || direction === "down";
  const isHorizontal = direction === "left" || direction === "right";

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(isVertical && { y: offset }),
        ...(isHorizontal && { x: offset }),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
