"use client";

import { useState } from "react";
import Link from "next/link";
import { SPECIALTIES } from "@/lib/data";
import { SPECIALTY_ICONS } from "@/lib/iconMap";
import { IconTile } from "@/components/IconTile";

/**
 * Explorer de especialidades: hover/focus alimenta o painel lateral (desktop);
 * toque expande inline (mobile). Textos 100% reaproveitados dos cards.
 */
export function Explorer() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const [swap, setSwap] = useState(false);
  const current = SPECIALTIES.slice(0, 6)[active];
  const CurrentIcon = SPECIALTY_ICONS[current.slug];

  const select = (i: number) => {
    if (i === active) return;
    setActive(i);
    setSwap(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setSwap(true)));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-5 sm:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
        {SPECIALTIES.slice(0, 6).map((s, i) => {
          const Icon = SPECIALTY_ICONS[s.slug];
          const isActive = i === active;
          const isOpen = openMobile === i;
          return (
            <div key={s.slug}>
              <button
                type="button"
                data-reveal="mask"
                data-tilt
                data-reveal-i={String(i)}
                aria-expanded={isOpen}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => setOpenMobile(isOpen ? null : i)}
                className={`explorer-mini card-premium flex w-full flex-col items-start p-6 text-left sm:p-7 ${isActive ? "is-active" : ""} ${i === 0 ? "sm:col-span-2 sm:flex-row sm:items-center sm:gap-6" : ""}`}
              >
                <IconTile Icon={Icon} label={s.name} />
                <span className={`font-display font-semibold text-[#162B4D] ${i === 0 ? "mt-4 text-xl sm:mt-0 sm:text-2xl" : "mt-4 text-lg"}`}>
                  <span className="card-title-line">{s.name}</span>
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#008AA1] lg:hidden">
                  {isOpen ? "Fechar" : "Quando procurar"}
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 rounded-[16px] border border-[#E6EAF0] bg-white p-5 text-sm leading-relaxed text-[#333333]/80 lg:hidden">
                  {s.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <aside aria-live="polite" className="hidden lg:block">
        <div className="explorer-panel card-premium p-8">
          <div key={current.slug} className={`explorer-detail ${swap ? "swap" : ""}`}>
            <span className="explorer-detail-icon inline-flex">
              <IconTile Icon={CurrentIcon} label={current.name} />
            </span>
            <p className="mt-5 font-display text-2xl font-semibold text-[#162B4D]">{current.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#333333]/80">{current.desc}</p>
            <Link href="/unidades" className="btn btn--primary mt-6 w-full">Agendar consulta</Link>
            <Link href="/especialidades" className="link-arrow mt-4">Todas as especialidades
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
