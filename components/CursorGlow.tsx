"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "0";
    el.style.width = "240px";
    el.style.height = "240px";
    el.style.borderRadius = "50%";
    el.style.pointerEvents = "none";
    el.style.background = "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 60%)";
    el.style.transform = "translate(-50%, -50%)";
    el.style.zIndex = "20";
    document.body.appendChild(el);
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      el.remove();
    };
  }, []);
  return null;
}