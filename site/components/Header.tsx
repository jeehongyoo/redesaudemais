"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/data";

export function Header() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header
      className={`motion-comp sticky top-0 z-50 border-b backdrop-blur ${condensed ? "header-solid border-[#E6EAF0] bg-white/85" : "border-transparent bg-white/95"}`}
      style={{ height: condensed ? 68 : 76 }}
    >
      <div className="container-site flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex min-h-[48px] items-center" onClick={() => setOpen(false)} aria-label="Rede Saúde Mais — início">
          <Image src="/logo.png" alt="Rede Saúde Mais" width={170} height={72} priority className="h-12 w-auto" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-3 py-2 text-[#333333] hover:bg-[#00A9C5]/10 hover:text-[#162B4D]">
              <span className="navlink-lines" aria-hidden="false"><span><span>{n.label}</span><span>{n.label}</span></span></span>
            </Link>
          ))}
          <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="motion-micro ml-1 rounded-[10px] bg-[#162B4D] px-4 py-2 font-semibold text-white hover:bg-[#0E1E38]">
            Resultados de Exames
          </a>
        </nav>

        <button
          type="button"
          className="motion-micro flex min-h-[48px] min-w-[48px] items-center justify-center rounded-[10px] border border-[#E6EAF0] lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 bg-[#162B4D] transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[5px] h-0.5 w-6 bg-[#162B4D] ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[10px] h-0.5 w-6 bg-[#162B4D] transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[68px] z-50 lg:hidden">
          <div className="absolute inset-0 bg-[#0E1E38]/40" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav id="menu-mobile" aria-label="Menu móvel" className="absolute inset-x-0 top-0 max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-[#E6EAF0] bg-white px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block min-h-[48px] rounded-[10px] px-3 py-3 font-semibold text-[#162B4D] hover:bg-[#00A9C5]/10">
                {n.label}
              </Link>
            ))}
            <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="mt-2 block min-h-[48px] rounded-[10px] bg-[#162B4D] px-3 py-3 text-center font-semibold text-white">
              Resultados de Exames
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
