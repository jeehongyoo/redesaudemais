import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, LayoutGrid, Stethoscope, Handshake } from "lucide-react";
import { CONVENIOS, EXAMS, FAQ, HOURS, SITE, UNITS } from "@/lib/data";
import { EXAM_ICONS } from "@/lib/iconMap";
import { IconTile } from "@/components/IconTile";
import { Magnetic } from "@/components/Magnetic";
import { StatusPill } from "@/components/StatusPill";
import { Journey } from "@/components/Journey";
import { Explorer } from "@/components/Explorer";
import { CurveDivider, KnotMark } from "@/components/Dividers";
import { Faq } from "@/components/Faq";

function Section({ eyebrow, title, sub, children, tone = "white" }: { eyebrow?: string; title: string; sub?: string; children: React.ReactNode; tone?: "white" | "surface" }) {
  return (
    <section className={`section-rythm ${tone === "surface" ? "bg-[#F2F7F9]" : ""}`}>
      <div className="container-site">
        {eyebrow && <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">{eyebrow}</p>}
        <h2 data-reveal="title" className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">{title}</h2>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        {sub && <p data-reveal="text" className="sec-sub measure text-[#333333]/80">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

const card = "motion-comp card-premium p-6 duration-200 sm:p-7";

const STATS = [
  { value: 11, label: "Especialidades médicas" },
  { value: 10, label: "Exames de rotina e diagnóstico" },
  { value: 14, label: "Convênios atendidos" },
  { value: 3, label: "Unidades no DF e MT" },
];

const PILLARS = [
  { n: "01", Icon: HeartHandshake, title: "Atendimento humanizado", desc: "Cuidado próximo em cada consulta e exame." },
  { n: "02", Icon: LayoutGrid, title: "Tudo em um só lugar", desc: "Consultas, exames e especialidades no mesmo espaço." },
  { n: "03", Icon: Stethoscope, title: "Equipe especializada", desc: "Corpo clínico capacitado em 11 especialidades." },
  { n: "04", Icon: Handshake, title: "Convênio e particular", desc: "Atendimento para convênios e particular." },
];

export default function Home() {
  return (
    <>
      {/* 1 · HERO confiança imediata */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #0A1830 0%, #162B4D 55%, #155e6b 100%)" }}
      >
        <div aria-hidden="true" className="blob blob-drift bg-[#00A9C5]/20 blur-3xl" style={{ width: 520, height: 520, top: "-160px", right: "-120px" }} />
        <div aria-hidden="true" className="blob bg-[#C9A96A]/10 blur-3xl" style={{ width: 380, height: 380, bottom: "-140px", left: "30%" }} />
        <div className="container-site relative grid items-center gap-10 pb-24 pt-12 md:pt-16 lg:grid-cols-[1.4fr_1fr]">
          <div data-parallax="0.08">
            <div data-reveal="eyebrow" data-reveal-start="top 95%" className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#00A9C5]">
                <span aria-hidden="true" className="mr-3 inline-block h-[2px] w-8 bg-[#C9A96A]" />Desde {SITE.since} · DF e MT
              </span>
              <StatusPill />
            </div>
            <h1 data-words className="mt-4 font-heading text-5xl font-semibold leading-[1.05] md:text-6xl xl:text-[76px]">Sua saúde merece o melhor</h1>
            <p data-reveal="hero" data-reveal-start="top 95%" className="measure mt-5 text-base leading-relaxed text-white/85 md:text-lg">{SITE.tagline} Consultas, exames e especialidades em um único espaço, com atendimento humanizado.</p>
            <div data-reveal="hero" data-reveal-start="top 95%" className="mt-8 flex flex-wrap gap-3">
              <Magnetic><Link href="/unidades" className="btn btn--primary">Ver unidades e agendar</Link></Magnetic>
              <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="btn btn--ghost-light">Resultados de exames</a>
            </div>
            <p data-reveal="hero" data-reveal-start="top 95%" className="mt-5 text-sm text-white/70">{HOURS}</p>
          </div>

          <div data-parallax="-0.1" data-reveal="hero" data-reveal-start="top 95%" className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/15 p-6 md:p-7"
            style={{ background: "linear-gradient(150deg, rgba(0,169,197,.35) 0%, rgba(22,43,77,.55) 60%, rgba(10,24,48,.75) 100%)", boxShadow: "0 32px 80px -24px rgba(0,0,0,.55)" }}>
            <div aria-hidden="true" className="blob blob-drift bg-[#00A9C5]/30 blur-2xl" style={{ width: 300, height: 300, top: "-90px", right: "-70px" }} />
            <div aria-hidden="true" className="blob bg-[#C9A96A]/20 blur-2xl" style={{ width: 220, height: 220, bottom: "20%", left: "-70px" }} />
            <Image src="/logo.png" alt="Rede Saúde Mais" width={300} height={128} className="relative h-auto w-44 rounded-2xl bg-white/95 p-3" />
            <div className="relative mt-5 flex flex-wrap gap-2">
              {["Desde 2018", "11 especialidades", "Convênio e particular"].map((c) => (
                <span key={c} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] backdrop-blur">{c}</span>
              ))}
            </div>
            <div className="relative mt-5 grid gap-2 text-sm">
              {UNITS.map((u) => (
                <a key={u.id} href={u.phones[0].href} target="_blank" rel="noreferrer" className="motion-micro min-h-[48px] rounded-[12px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur hover:bg-white/20">
                  <span className="font-semibold">{u.label}</span><br /><span className="text-white/85">{u.phones[0].display} · WhatsApp</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 · PROVA DE ESCALA placar vivo */}
      <section className="grain relative overflow-hidden" style={{ background: "radial-gradient(900px 480px at 15% 0%, #1d3a68 0%, #0A1830 60%, #070f1f 100%)" }}>
        <div className="container-site relative z-[2] py-20 md:py-24">
          <p data-reveal="eyebrow" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#C9A96A]">
            <span aria-hidden="true" className="inline-block h-[2px] w-8 bg-[#C9A96A]" />Em números
          </p>
          <div className="relative mt-10">
            <svg data-reveal="draw-scrub" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" className="absolute -top-8 left-0 hidden h-[60px] w-full lg:block">
              <path d="M0,40 C200,10 400,10 600,32 C800,54 1000,50 1200,24" fill="none" stroke="#00A9C5" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              <path d="M0,40 C200,10 400,10 600,32 C800,54 1000,50 1200,24" fill="none" stroke="#C9A96A" strokeWidth="1" strokeLinecap="round" opacity="0.35" transform="translate(0,8)" />
            </svg>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={s.label} data-reveal="mask" data-reveal-i={String(i)} className="border-t border-white/15 pt-6">
                  <p className={`stat-mega ${i % 2 ? "stat-mega-accent" : ""}`}><span data-count={s.value}>{s.value}</span></p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.06em] text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from="#070f1f" to="#ffffff" />

      {/* 3 · JORNADA DO PACIENTE */}
      <Journey />

      {/* 4 · ESPECIALIDADES explorer */}
      <Section eyebrow="Cuidado completo" title="Especialidades" sub="Consultas com especialistas · convênio e particular.">
        <Explorer />
      </Section>

      {/* 5 · EXAMES bento técnico */}
      <Section eyebrow="Diagnóstico" title="Exames" sub="Do check-up ao diagnóstico avançado." tone="surface">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
          {EXAMS.slice(0, 6).map((e, i) => (
            <div key={e.name} data-reveal="mask" data-tilt data-reveal-i={String(i)} className={`card-premium p-7 sm:p-8 ${i === 0 ? "bento-featured sm:col-span-2 lg:col-span-2" : ""}`}>
              <IconTile Icon={EXAM_ICONS[e.name]} label={e.name} />
              <p className={`mt-5 font-heading font-semibold text-[#162B4D] ${i === 0 ? "text-2xl md:text-[28px]" : "text-lg"}`}>
                <span className="card-title-line">{e.name}</span>
              </p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#333333]/80">{e.desc}</p>
              {i === 0 && <span aria-hidden="true" className="mt-5 inline-block h-[3px] w-10 rounded-full bg-[#C9A96A]" />}
            </div>
          ))}
        </div>
        <Link href="/exames" className="link-arrow mt-6">Ver todos os 10 exames <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
      </Section>

      {/* 6 · COMPROMISSO pilares */}
      <section className="section-rythm">
        <div className="container-site">
          <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Nosso compromisso</p>
          <h2 data-reveal="title" className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Por que a Rede Saúde Mais</h2>
          <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <div key={p.n} data-reveal="mask" data-reveal-i={String(i)} className="border-t-2 border-[#C9A96A]/60 pt-6">
                <p aria-hidden="true" className="font-heading text-sm font-semibold tracking-[0.1em] text-[#008AA1]">{p.n}</p>
                <p className="mt-3 flex items-center gap-3 font-heading text-xl font-semibold text-[#162B4D]">
                  <p.Icon size={24} strokeWidth={1.5} className="icon-line" aria-hidden="true" />{p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#333333]/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CONVÊNIOS */}
      <Section eyebrow="Cobertura" title="Convênios" sub="Atendemos convênios e particular.">
        <div className="marquee" data-reveal="text">
          <div className="marquee__track">
            {CONVENIOS.map((c) => (
              <div key={c.name} title={c.name} className="marquee__item">
                <Image src={c.img} alt={c.name} width={150} height={54} className="object-contain" />
              </div>
            ))}
            {CONVENIOS.map((c) => (
              <div key={c.name + "-dup"} title={c.name} aria-hidden="true" className="marquee__item">
                <Image src={c.img} alt="" width={150} height={54} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <Link href="/convenios" className="link-arrow mt-6">Ver lista completa <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
      </Section>

      {/* 8 · FAQ remoção de objeção */}
      <section className="section-rythm bg-[#F2F7F9]">
        <div className="container-site">
          <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Dúvidas</p>
          <h2 data-reveal="title" className="sec-title font-heading text-2xl font-semibold text-[#162B4D] md:text-3xl">Perguntas frequentes</h2>
          <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          <div className="sec-sub" data-reveal="text" />
          <div data-reveal="card"><Faq items={FAQ} /></div>
        </div>
      </section>

      <CurveDivider from="#F2F7F9" to="#0A1830" />

      {/* 9 · CTA FINAL fio convergindo ao logo */}
      <section className="grain relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1830 0%, #162B4D 60%, #155e6b 100%)" }}>
        <div className="container-site relative z-[2] py-20 text-center text-white md:py-24">
          <div className="flex justify-center" data-reveal="draw"><KnotMark /></div>
          <div className="mt-6 flex justify-center" data-reveal="cta">
            <Image src="/logo.png" alt="Rede Saúde Mais" width={220} height={94} className="h-auto w-44 rounded-2xl bg-white/95 p-3" />
          </div>
          <h2 data-words className="mx-auto mt-6 max-w-[20ch] font-heading text-3xl font-semibold md:text-[40px]">Agende sua consulta na unidade mais próxima</h2>
          <p data-reveal="text" className="mx-auto mt-4 max-w-[52ch] text-white/80">Convênio e particular · {HOURS}</p>
          <div data-reveal="cta" className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic><Link href="/unidades" className="btn btn--primary">Ver unidades e agendar</Link></Magnetic>
            <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="btn btn--ghost-light">Resultados de exames</a>
          </div>
        </div>
      </section>
    </>
  );
}
