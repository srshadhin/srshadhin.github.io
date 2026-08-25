"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    if (as === "li") return <li className={className}>{children}</li>;
    return <div className={className}>{children}</div>;
  }

  const transition = { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const };
  const initial = { opacity: 0, y: 14 };
  const animate = { opacity: 1, y: 0 };
  const viewport = { once: true, margin: "-64px" };

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial={initial}
        whileInView={animate}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
