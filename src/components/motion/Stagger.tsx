import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function Stagger({ children, className, stagger = 0.12 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger
          }
        }
      }}>
      {children}
    </motion.div>
  );
}
