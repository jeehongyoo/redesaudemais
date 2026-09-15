"use client";

import { useEffect } from "react";

/** Cursor ponto + anel + etiqueta contextual (desktop pointer fino, sem reduced-motion). */
export function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.body.classList.add("cursor-on");
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const tag = document.getElementById("cursor-tag");
    if (!dot || !ring || !tag) return;
    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
      tag.style.left = mx + 18 + "px"; tag.style.top = my + 22 + "px";
      const t = e.target as HTMLElement;
      const clickable = t.closest("a,button,[data-cursor]");
      ring.classList.toggle("is-active", !!clickable);
      const labelled = t.closest<HTMLElement>("[data-cursor-label]");
      if (labelled) {
        tag.textContent = labelled.dataset.cursorLabel || "";
        tag.classList.add("is-visible");
      } else {
        tag.classList.remove("is-visible");
      }
    };
    const loop = () => {
      rx += 0.16 * (mx - rx); ry += 0.16 * (my - ry);
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-on");
    };
  }, []);
  return (
    <>
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <div id="cursor-tag" aria-hidden="true" />
    </>
  );
}
