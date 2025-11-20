"use client";

import { motion, AnimatePresence, Transition } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  variant?:
    | "fade-slide"
    | "fade-scale"
    | "slide"
    | "fade"
    | "blur-fade"
    | "scale-rotate";
}

const transitionVariants = {
  // Option 1: Fade + Slide (Current - Subtle & Clean)
  "fade-slide": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    } as Transition,
  },

  // Option 2: Fade + Scale (Modern & Smooth)
  "fade-scale": {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    } as Transition,
  },

  // Option 3: Slide from Side (Dynamic)
  slide: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    } as Transition,
  },

  // Option 4: Fade Only (Minimal)
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" } as Transition,
  },

  // Option 5: Blur + Fade (Elegant)
  "blur-fade": {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    } as Transition,
  },

  // Option 6: Scale + Rotate (Playful)
  "scale-rotate": {
    initial: { opacity: 0, scale: 0.9, rotate: -2 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.9, rotate: 2 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    } as Transition,
  },
};

export default function PageTransition({
  children,
  variant = "fade-slide",
}: PageTransitionProps) {
  const pathname = usePathname();
  const selectedVariant = transitionVariants[variant];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={selectedVariant.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
