'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Page-level fade+slide animation
const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export function AnimatedPage({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Staggered list container
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// Individual list item
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export function StaggerList({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={staggerContainerVariants} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return <motion.div variants={staggerItemVariants}>{children}</motion.div>;
}

// Card scale-in animation for grid items
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function StaggerGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={cardContainerVariants} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export function StaggerCard({ children }: { children: ReactNode }) {
  return <motion.div variants={cardVariants}>{children}</motion.div>;
}
