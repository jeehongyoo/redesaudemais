"use client";

import { useEffect, useState } from "react";

/** FAB WhatsApp bottom-right: recolhe quando o rodapé entra em tela. */
export function Fab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.05 });
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href="/unidades"
      aria-label="Agendar pelo WhatsApp — ver unidades"
      title="Agendar pelo WhatsApp"
      className={`motion-comp group fixed z-30 flex min-h-[48px] items-center gap-2 rounded-full bg-[#00A9C5] py-3 pl-4 pr-4 font-semibold text-white hover:bg-[#008AA1] fab-breathe ${
        hidden ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{ insetInlineEnd: "clamp(16px, 2vw, 28px)", bottom: "calc(20px + env(safe-area-inset-bottom))" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="hidden text-sm sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
