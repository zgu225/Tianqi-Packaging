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
        initial={shouldReduceMotion ? false : { opacity: 0.96 }}
        animate={{ opacity: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0.96 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.18,
          ease: "easeOut",
        }}
        style={{ willChange: shouldReduceMotion ? "auto" : "opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
