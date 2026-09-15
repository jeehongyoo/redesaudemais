import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CONVENIOS, NAV, SITE, UNITS } from "@/lib/data";
import { Magnetic } from "@/components/Magnetic";

export function Footer() {
  return (
    <footer className="text-white" style={{ background: "linear-gradient(180deg, #0A1830 0%, #162B4D 40%)" }}>
      <div className="container-site py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#C9A96A]">
              <span aria-hidden="true" className="inline-block h-[2px] w-8 bg-[#C9A96A]" />Desde {SITE.since}
            </p>
            <p className="mt-3 font-heading text-3xl font-semibold md:text-[40px]">Fale com a Rede Saúde Mais</p>
          </div>
          <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">{SITE.tagline} Referência em atendimento humanizado no DF e MT.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
          {UNITS.map((u) => (
            <div key={u.id} className="flex flex-col rounded-[16px] border border-white/15 bg-white/[0.07] p-6 backdrop-blur">
              <p className="flex items-start gap-2 font-heading text-lg font-semibold">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#00A9C5]" aria-hidden="true" />{u.label}
              </p>
              <p className="mt-2 text-sm text-white/70">{u.address}</p>
              <Magnetic className="mt-4 block">
                <div className="grid gap-2">
                  {u.phones.map((p) => (
                    <a key={p.display} href={p.href} target="_blank" rel="noreferrer" className="btn btn--primary w-full" style={{ textTransform: "none", fontSize: 14 }}>
                      {p.display}{p.whatsapp ? " · WhatsApp" : ""}
                    </a>
                  ))}
                </div>
              </Magnetic>
              <div className="mt-auto flex items-center justify-between pt-4 text-sm">
                <a className="underline decoration-[#00A9C5] decoration-2 underline-offset-4" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.mapsQuery)}`}>Ver no mapa</a>
                <span className="flex gap-3">
                  <a href={u.instagram} target="_blank" rel="noreferrer" className="underline">Instagram</a>
                  <a href={u.facebook} target="_blank" rel="noreferrer" className="underline">Facebook</a>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">Convênios atendidos</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {CONVENIOS.map((c) => (
              <Image key={c.name} src={c.img} alt={c.name} title={c.name} width={120} height={40} loading="lazy" className="h-8 w-auto rounded-lg bg-white/95 px-2 py-1 object-contain" />
            ))}
          </div>
        </div>

        <nav aria-label="Mapa do site" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="min-h-[44px] py-2 hover:text-white">{n.label}</Link>
          ))}
          <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="min-h-[44px] py-2 hover:text-white">Resultados de Exames</a>
          <a href={`mailto:${SITE.email}`} className="min-h-[44px] py-2 hover:text-white">{SITE.email}</a>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <Link href="/privacidade" className="underline">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
