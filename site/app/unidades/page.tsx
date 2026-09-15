import Image from "next/image";
import { Camera } from "lucide-react";
import { HOURS, UNITS } from "@/lib/data";
import { Magnetic } from "@/components/Magnetic";

export const metadata = { title: "Unidades", description: "Riacho Fundo I (DF), Mato Grosso e Primavera do Leste (MT). Endereços, WhatsApp e mapas." };

// Ordem editorial no desktop: DF em destaque (7/12), demais empilhadas (5/12). DOM inalterado.
const ORDER: Record<string, string> = {
  "mt-1": "lg:order-2 lg:col-span-5",
  "df-riacho": "lg:order-1 lg:col-span-7 lg:row-span-2",
  "mt-primavera": "lg:order-3 lg:col-span-5",
};
const NUM: Record<string, string> = { "mt-1": "01", "df-riacho": "02", "mt-primavera": "03" };

export default function Page() {
  return (
    <section className="section-rythm grain grain-light relative overflow-hidden" style={{ background: "#F7F3EC" }}>
      {/* Fundo para o glass "pegar": blobs navy/teal sobre papel quente */}
      <div aria-hidden="true" className="blob blob-drift absolute rounded-full bg-[#00A9C5]/15 blur-3xl" style={{ width: 480, height: 480, top: "-140px", right: "-120px" }} />
      <div aria-hidden="true" className="blob absolute rounded-full bg-[#162B4D]/10 blur-3xl" style={{ width: 420, height: 420, bottom: "-160px", left: "-120px" }} />
      <div className="container-site relative">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Onde nos encontrar</p>
        <h1 data-words className="sec-title font-display text-3xl font-bold text-[#162B4D] md:text-4xl">Unidades</h1>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <p data-reveal="text" className="sec-sub measure text-[#333333]/80">{HOURS}</p>

        {/* Prova de escala como tipo grande: só fatos do site (3 unidades, DF/MT, desde 2018) */}
        <div data-reveal="text" className="mb-10 flex flex-wrap items-end gap-x-6 gap-y-2">
          <span aria-hidden="true" className="font-display text-[clamp(88px,12vw,150px)] font-extrabold leading-[0.9] text-[#162B4D]">03</span>
          <p className="max-w-[30ch] pb-3 text-sm font-semibold uppercase leading-relaxed tracking-[0.06em] text-[#333333]/80">
            unidades no DF e MT · desde 2018
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {UNITS.map((u, i) => {
            const featured = u.id === "df-riacho";
            return (
              <div key={u.id} data-reveal="card" data-tilt data-reveal-i={String(i)} className={`motion-comp glass-card relative flex flex-col overflow-hidden rounded-[16px] p-6 duration-200 hover:-translate-y-1 sm:p-7 ${ORDER[u.id]}`}>
                <span aria-hidden="true" className="font-display pointer-events-none absolute -right-2 -top-7 select-none text-[120px] font-extrabold leading-none text-[#162B4D]/[0.07]">
                  {NUM[u.id]}
                </span>
                {/* TODO(fotos): substituir por foto real da unidade — preencher imageUrl no objeto da unidade em lib/data.ts */}
                {u.imageUrl ? (
                  <Image src={u.imageUrl} alt={`Fachada da ${u.label}`} width={640} height={480} className="aspect-[4/3] w-full rounded-[12px] object-cover" />
                ) : (
                  <div aria-hidden="true" className="photo-ph">
                    <Camera size={30} strokeWidth={1.5} opacity={0.35} />
                    <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.06em] opacity-60">Foto da unidade em breve</span>
                  </div>
                )}
                <p className={`mt-6 font-display font-extrabold leading-[1.05] text-[#162B4D] ${featured ? "text-[30px] md:text-[36px]" : "text-[26px] md:text-[30px]"}`}>{u.label}</p>
                <p className="mt-3 text-sm text-[#333333]/80 [text-wrap:pretty]">{u.address}</p>
                <div className="mt-4 space-y-2 text-[15px] font-semibold tabular-nums tracking-[0.03em]">
                  {u.phones.map((p) => (
                    <a key={p.display} href={p.href} target="_blank" rel="noreferrer" className="block min-h-[48px] py-1 text-[#162B4D] underline decoration-[#00A9C5] decoration-2 underline-offset-4">{p.display}{p.whatsapp ? " · WhatsApp" : " · Fixo"}</a>
                  ))}
                </div>
                <div className="mb-5 mt-3 flex gap-4 text-sm">
                  <a href={u.instagram} target="_blank" rel="noreferrer" className="min-h-[48px] py-1 underline">Instagram</a>
                  <a href={u.facebook} target="_blank" rel="noreferrer" className="min-h-[48px] py-1 underline">Facebook</a>
                </div>
                <Magnetic className="mt-auto block">
                  <a data-cursor-label="Abrir mapa" className="btn btn--primary w-full" style={{ textTransform: "none", fontSize: 14 }} target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.mapsQuery)}`}>Ver no mapa</a>
                </Magnetic>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
