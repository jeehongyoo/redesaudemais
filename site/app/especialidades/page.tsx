import { SPECIALTIES } from "@/lib/data";
import { SPECIALTY_ICONS } from "@/lib/iconMap";
import { IconTile } from "@/components/IconTile";

export const metadata = { title: "Especialidades", description: "Clínico Geral, Cardiologia, Neurologia, Pediatria, Ginecologia, Nutrição e mais. Convênio e particular." };

const card = "motion-comp card-premium p-6 duration-200 sm:p-7";

export default function Page() {
  return (
    <section className="section-rythm">
      <div className="container-site">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Cuidado completo</p>
        <h1 data-words className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-4xl">Especialidades</h1>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <p data-reveal="text" className="sec-sub measure text-[#333333]/80">Marque via WhatsApp da unidade mais próxima. Aceitamos convênio e particular.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
          {SPECIALTIES.map((s, i) => (
            <div key={s.slug} data-reveal="mask" data-tilt data-reveal-i={String(i)} className={`${card}${i === 0 ? " bento-featured sm:col-span-2 lg:col-span-2" : ""}`}>
              <IconTile Icon={SPECIALTY_ICONS[s.slug]} label={s.name} />
              <p className={`mt-5 font-heading font-semibold text-[#162B4D] ${i === 0 ? "text-2xl md:text-[28px]" : "text-lg"}`}><span className="card-title-line">{s.name}</span></p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#333333]/80">{s.desc}</p>
              {i === 0 && <span aria-hidden="true" className="mt-5 inline-block h-[3px] w-10 rounded-full bg-[#C9A96A]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
