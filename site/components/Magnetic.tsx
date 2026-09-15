"use client";

import { useRef, type ReactNode } from "react";

/** Botão magnético sutil (máx 6px, só pointer fino). */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(dx / r.width) * 12}px, ${(dy / r.height) * 12}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className || "inline-flex"}`}
      style={{ transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
