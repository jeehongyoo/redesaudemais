import Image from "next/image";
import { CONVENIOS } from "@/lib/data";

export const metadata = { title: "Convênios", description: "Postal Saúde, BRB, GEAP, Camed, Care Plus e mais. Atendemos convênios e particular." };

export default function Page() {
  return (
    <section className="section-rythm">
      <div className="container-site">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Cobertura</p>
        <h1 data-words className="sec-title font-display text-3xl font-bold text-[#162B4D] md:text-4xl">Convênios</h1>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <p data-reveal="text" className="sec-sub measure text-[#333333]/80">Atendemos convênios e particular. Consulte nossos canais de atendimento para cobertura de cada plano.</p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4" style={{ gridAutoRows: "1fr" }}>
          {CONVENIOS.map((c, i) => (
            <div key={c.name} data-reveal="card" data-reveal-i={String(i)} className="motion-comp rounded-[14px] border border-[#E6EAF0] bg-white p-5 text-center shadow-[0_1px_2px_rgba(16,24,40,.04)]">
              <Image src={c.img} alt={c.name} width={200} height={100} className="mx-auto h-16 w-auto object-contain" />
              <p className="mt-3 text-sm font-semibold text-[#162B4D]">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
