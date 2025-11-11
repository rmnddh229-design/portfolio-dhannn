"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();
  useEffect(() => { if (isInView) controls.start("show"); }, [isInView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut", delay } }
      }}
    >
      {children}
    </motion.div>
  );
}
