"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxArtwork {
  id: number;
  title: string;
  year: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}

interface LightboxProps {
  artwork: LightboxArtwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_SENSITIVITY = 0.001;
const ZOOM_INDICATOR_FADE_DELAY = 1000;
const HINT_TEXT = "Faites défiler pour zoomer";

function getDistance(touches: TouchList | React.TouchList) {
  return Math.hypot(
    touches[1].clientX - touches[0].clientX,
    touches[1].clientY - touches[0].clientY
  );
}

function getCenter(touches: TouchList | React.TouchList) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  };
}

export default function Lightbox({ artwork, isOpen, onClose }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasZoomed, setHasZoomed] = useState(false);
  const [showZoomIndicator, setShowZoomIndicator] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const lastPinchRef = useRef({ distance: 0, center: { x: 0, y: 0 }, zoom: 1, pan: { x: 0, y: 0 } });
  const zoomIndicatorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPanningRef = useRef(false);
  const zoomPanRef = useRef({ zoom: 1, pan: { x: 0, y: 0 } });

  useEffect(() => {
    zoomPanRef.current = { zoom, pan };
  }, [zoom, pan]);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const handleClose = useCallback(() => {
    resetZoom();
    setHasZoomed(false);
    setShowHint(true);
    onClose();
  }, [onClose, resetZoom]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      resetZoom();
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
      if (zoomIndicatorTimeoutRef.current) {
        clearTimeout(zoomIndicatorTimeoutRef.current);
      }
    };
  }, [isOpen, handleClose, resetZoom]);

  const showZoomLevel = useCallback(() => {
    setShowZoomIndicator(true);
    if (zoomIndicatorTimeoutRef.current) {
      clearTimeout(zoomIndicatorTimeoutRef.current);
    }
    zoomIndicatorTimeoutRef.current = setTimeout(() => {
      setShowZoomIndicator(false);
      zoomIndicatorTimeoutRef.current = null;
    }, ZOOM_INDICATOR_FADE_DELAY);
  }, []);

  const zoomTowardPoint = useCallback(
    (clientX: number, clientY: number, delta: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = clientX - centerX;
      const relY = clientY - centerY;

      const newZoom = Math.min(
        MAX_ZOOM,
        Math.max(MIN_ZOOM, zoom + delta * zoom * ZOOM_SENSITIVITY)
      );
      if (newZoom === zoom) return;

      setHasZoomed(true);
      setShowHint(false);

      const scaleFactor = newZoom / zoom;
      setPan((prev) => ({
        x: relX - (relX - prev.x) * scaleFactor,
        y: relY - (relY - prev.y) * scaleFactor,
      }));
      setZoom(newZoom);
      showZoomLevel();
    },
    [zoom, showZoomLevel]
  );

  // Wheel zoom - must use passive: false to preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      if (!artwork) return;
      e.preventDefault();
      const delta = -e.deltaY;
      zoomTowardPoint(e.clientX, e.clientY, delta);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isOpen, artwork, zoomTowardPoint]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      setPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isPanningRef.current = false;
      const { zoom: z, pan: p } = zoomPanRef.current;
      lastPinchRef.current = {
        distance: getDistance(e.touches),
        center: getCenter(e.touches),
        zoom: z,
        pan: { ...p },
      };
    } else if (e.touches.length === 1 && zoomPanRef.current.zoom > 1) {
      isPanningRef.current = true;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const { distance, center, zoom: lastZoom, pan: lastPan } = lastPinchRef.current;
      const newDistance = getDistance(e.touches);
      const newCenter = getCenter(e.touches);
      const scale = newDistance / distance;
      const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, lastZoom * scale));

      const container = containerRef.current;
      let newPan = lastPan;
      if (container) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const relX = newCenter.x - centerX;
        const relY = newCenter.y - centerY;
        const scaleFactor = newZoom / lastZoom;
        newPan = {
          x: relX - (relX - lastPan.x) * scaleFactor,
          y: relY - (relY - lastPan.y) * scaleFactor,
        };
      }

      lastPinchRef.current = {
        distance: newDistance,
        center: newCenter,
        zoom: newZoom,
        pan: newPan,
      };
      zoomPanRef.current = { zoom: newZoom, pan: newPan };
      setZoom(newZoom);
      setPan(newPan);
      setHasZoomed(true);
      setShowHint(false);
      showZoomLevel();
    } else if (e.touches.length === 1 && zoomPanRef.current.zoom > 1 && isPanningRef.current) {
      e.preventDefault();
      const dx = e.touches[0].clientX - lastMouseRef.current.x;
      const dy = e.touches[0].clientY - lastMouseRef.current.y;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setPan((prev) => {
        const newPan = { x: prev.x + dx, y: prev.y + dy };
        zoomPanRef.current = { ...zoomPanRef.current, pan: newPan };
        return newPan;
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      isPanningRef.current = false;
    }
    if (e.touches.length === 1) {
      const { zoom: z, pan: p } = zoomPanRef.current;
      lastPinchRef.current = {
        distance: 0,
        center: { x: 0, y: 0 },
        zoom: z,
        pan: { ...p },
      };
    }
  };

  const handleDoubleClick = () => {
    resetZoom();
    setShowZoomIndicator(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (zoom <= 1) {
        handleClose();
      }
    }
  };

  const cursorStyle =
    zoom <= 1
      ? "cursor-default"
      : isDragging
        ? "cursor-grabbing"
        : "cursor-grab";

  return (
    <AnimatePresence>
      {isOpen && artwork && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label="Fermer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <motion.div
            ref={containerRef}
            className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{ touchAction: "none" }}
          >
            <div
              ref={imageWrapperRef}
              className={`relative flex max-h-[85vh] max-w-[90vw] items-center justify-center select-none ${cursorStyle}`}
              onMouseDown={handleMouseDown}
              onDoubleClick={handleDoubleClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                }}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.alt}
                  width={artwork.width}
                  height={artwork.height}
                  className="max-h-[85vh] max-w-[90vw] object-contain pointer-events-none"
                  sizes="90vw"
                  style={{ maxHeight: "85vh", maxWidth: "90vw" }}
                  draggable={false}
                />
              </div>

              {/* Zoom level indicator */}
              <motion.div
                className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-sm text-white/90"
                initial={false}
                animate={{
                  opacity: showZoomIndicator ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {zoom.toFixed(1)}x
              </motion.div>

              {/* Hint text */}
              <AnimatePresence>
                {showHint && zoom <= 1 && !hasZoomed && (
                  <motion.p
                    className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-black/40 px-3 py-1.5 text-sm text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {HINT_TEXT}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 text-center text-white">
              <span className="font-heading text-lg font-medium md:text-xl">
                {artwork.title}
              </span>
              {artwork.year && (
                <span className="ml-2 text-white/80">({artwork.year})</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
