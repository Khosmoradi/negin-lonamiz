"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ARTWORKS = [
  "/artworks/IMG_8801.jpg",
  "/artworks/IMG_8802.jpg",
  "/artworks/IMG_8798.jpg",
  "/artworks/IMG_8799.jpg",
  "/artworks/Hedayat One_1.jpg",
  "/artworks/IMG_2528.jpg",
  "/artworks/IMG_8805.jpg",
  "/artworks/IMG_8806.jpg",
];

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    setSelectedImage(ARTWORKS[Math.floor(Math.random() * ARTWORKS.length)]);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

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
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
        >
          {selectedImage && (
            <motion.div
              className="relative"
              style={{ width: "50vw", height: "50vh", maxWidth: "50vw", maxHeight: "50vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Artwork"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
