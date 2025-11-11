"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ThreeHero from "./ThreeHero";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const o  = useTransform(scrollYProgress, [0, 1], [1, .4]);

  return (
    <section ref={ref} className="bg-orb rounded-3xl overflow-hidden">
      <div className="container py-16 text-center space-y-8">
        <motion.h1 style={{ y: y2, opacity: o }} className="text-4xl sm:text-6xl font-semibold tracking-tight">
          UI & 3D <span className="text-brand-400">web3</span> eCommerce
        </motion.h1>
        <motion.p style={{ y: y2, opacity: o }} className="text-white/70 max-w-2xl mx-auto">
          Smooth scroll, reveal-on-view, hover tilt, marquee, and a floating 3D hero.
        </motion.p>
        <motion.div style={{ y: y2, opacity: o }} className="flex justify-center gap-3">
          <a href="/shop" className="btn">Explore Products</a>
          <a href="/checkout" className="btn-outline">Checkout Demo</a>
        </motion.div>
        <motion.div style={{ y: y1 }}>
          <ThreeHero />
        </motion.div>
      </div>
    </section>
  );
}
