import { EXAMS, SITE } from "@/lib/data";
import { EXAM_ICONS } from "@/lib/iconMap";
import { IconTile } from "@/components/IconTile";

export const metadata = { title: "Exames", description: "MAPA, Holter, Ecocardiograma, Ultrassonografia, Teste Ergométrico, Polissonografia e mais." };

const card = "motion-comp card-premium p-6 duration-200 sm:p-7";

export default function Page() {
  return (
    <section className="section-rythm">
      <div className="container-site">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Diagnóstico</p>
        <h1 data-words className="sec-title font-display text-3xl font-bold text-[#162B4D] md:text-4xl">Exames</h1>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <p data-reveal="text" className="sec-sub measure text-[#333333]/80">Agende pelo WhatsApp. <a className="font-semibold text-[#162B4D] underline decoration-[#00A9C5] decoration-2 underline-offset-4" target="_blank" rel="noreferrer" href={SITE.resultadosUrl}>Acesse seus resultados →</a></p>
        <div className="grid gap-5 md:grid-cols-2" style={{ gridAutoRows: "1fr" }}>
          {EXAMS.map((e, i) => (
            <div key={e.name} data-reveal="mask" data-tilt data-reveal-i={String(i)} className={`${card}${i === 0 ? " bento-featured sm:col-span-2 lg:col-span-2" : ""}`}>
              <IconTile Icon={EXAM_ICONS[e.name]} label={e.name} />
              <p className={`mt-5 font-display font-semibold text-[#162B4D] ${i === 0 ? "text-2xl md:text-[28px]" : "text-lg"}`}><span className="card-title-line">{e.name}</span></p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#333333]/80">{e.desc}</p>
              {i === 0 && <span aria-hidden="true" className="mt-5 inline-block h-[3px] w-10 rounded-full bg-[#C9A96A]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
