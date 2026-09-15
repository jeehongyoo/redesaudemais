"use client";

import { useEffect } from "react";

/** Barra de progresso + fio lateral. JS só liga em desktop sem reduced-motion. */
export function ScrollChrome() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 1280) return;
    document.body.classList.add("has-thread");
    return () => document.body.classList.remove("has-thread");
  }, []);
  return (
    <>
      <div id="read-progress" aria-hidden="true" />
      <div id="thread-rail" aria-hidden="true">
        <svg width="40" height="100%" viewBox="0 0 40 1000" preserveAspectRatio="none" style={{ height: "100vh" }}>
          <path
            d="M20,0 C34,120 6,220 20,340 C34,460 6,560 20,680 C34,800 6,900 20,1000"
            fill="none" stroke="rgba(0,169,197,.22)" strokeWidth="2"
          />
          <path
            id="thread-progress"
            d="M20,0 C34,120 6,220 20,340 C34,460 6,560 20,680 C34,800 6,900 20,1000"
            fill="none" stroke="#00A9C5" strokeWidth="2.5" strokeLinecap="round"
          />
          {[120, 340, 560, 780].map((y) => (
            <circle key={y} cx="20" cy={y} r="3.5" fill="none" stroke="#C9A96A" strokeWidth="1.5" opacity="0.7" />
          ))}
        </svg>
      </div>
    </>
  );
}
