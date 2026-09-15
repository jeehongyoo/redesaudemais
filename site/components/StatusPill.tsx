"use client";

import { useEffect, useState } from "react";

/**
 * Status ao vivo calculado do horário do site (Seg–Sex 07–18, Sáb 08–12).
 * SSR entrega fallback estático (horário), cliente hidrata o status — sem LCP shift.
 */
function compute(): { open: boolean; label: string } {
  const now = new Date();
  const d = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  if (d >= 1 && d <= 5 && h >= 7 && h < 18) return { open: true, label: "Atendendo agora" };
  if (d === 6 && h >= 8 && h < 12) return { open: true, label: "Atendendo agora" };
  if (d === 0) return { open: false, label: "Fechado hoje · abrimos segunda às 7h" };
  if (h < 7) return { open: false, label: "Fechado no momento · abrimos às 7h" };
  if (d === 6) return { open: false, label: "Fechado no momento · abrimos segunda às 7h" };
  return { open: false, label: "Fechado no momento · abrimos amanhã às 7h" };
}

export function StatusPill() {
  // Fallback estático idêntico no SSR e no first paint (horário do site); status real hidrata em seguida.
  const [s, setS] = useState({ open: false, label: "Seg–Sex · 07–18h — Sáb · 08–12h" });
  useEffect(() => {
    setS(compute());
    const t = setInterval(() => setS(compute()), 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] backdrop-blur">
      <span
        aria-hidden="true"
        className={`inline-block h-2.5 w-2.5 rounded-full ${s.open ? "status-dot-open bg-green-400" : "bg-white/40"}`}
      />
      <span aria-live="polite">{s.label}</span>
    </span>
  );
}
