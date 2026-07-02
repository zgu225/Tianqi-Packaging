"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={shouldReduceMotion ? false : { opacity: 0.88, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={shouldReduceMotion ? undefined : { opacity: 0.88, filter: "blur(8px)" }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.28,
          ease: [0.33, 1, 0.68, 1],
        }}
        style={{ willChange: shouldReduceMotion ? "auto" : "opacity, filter" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
