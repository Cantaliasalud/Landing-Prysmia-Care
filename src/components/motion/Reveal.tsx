import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up"
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { opacity: 0, x: -50 }
      : direction === "right"
        ? { opacity: 0, x: 50 }
        : { opacity: 0, y: 50 };
  const visible = direction === "up" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : offset}
      whileInView={prefersReducedMotion ? undefined : visible}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}
