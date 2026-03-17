"use client";

import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8">
      <AnimatedSection direction="none">
      <p className="text-center text-sm text-[var(--color-text-muted)]">
        © 2026 Tanya Lytko. Tous droits réservés.
      </p>
      </AnimatedSection>
    </footer>
  );
}
