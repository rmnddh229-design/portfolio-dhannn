"use client";
import { useRef } from "react";
import clsx from "clsx";

export default function MagneticButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    el.style.transform = `translate(${x*0.15}px, ${y*0.15}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = `translate(0px,0px)`;
  };
  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={clsx("btn", className)}>{children}</button>
  );
}