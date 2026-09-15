import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, LayoutGrid, Stethoscope, Handshake } from "lucide-react";
import { CONVENIOS, EXAMS, FAQ, HOURS, SITE } from "@/lib/data";
import { EXAM_ICONS } from "@/lib/iconMap";
import { IconTile } from "@/components/IconTile";
import { Magnetic } from "@/components/Magnetic";
import { StatusPill } from "@/components/StatusPill";
import { Journey } from "@/components/Journey";
import { Explorer } from "@/components/Explorer";
import { CurveDivider, KnotMark } from "@/components/Dividers";
import { Faq } from "@/components/Faq";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";

function Section({ eyebrow, title, sub, children, tone = "white" }: { eyebrow?: string; title: string; sub?: string; children: React.ReactNode; tone?: "white" | "surface" }) {
  return (
    <section className={`section-rythm ${tone === "surface" ? "bg-[#F2F7F9]" : ""}`}>
      <div className="container-site">
        <Reveal>
          {eyebrow && <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">{eyebrow}</p>}
          <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">{title}</h2>
          <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          {sub && <p className="sec-sub measure text-[#333333]/80">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

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
      {/* 1 · HERO — editorial, numeral como imagem, sem CLS acima da dobra */}
      <section
        className="relative overflow-hidden bg-[#0A1830] text-white"
        style={{ background: "linear-gradient(135deg, #0A1830 0%, #162B4D 58%, #143a4a 100%)" }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"}} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-[18%] top-[-28%] h-[680px] w-[680px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 50% 50%, #00A9C5 0%, transparent 70%)" }} />
        <div className="container-site relative grid items-center gap-10 pb-24 pt-14 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
          <div className="relative max-w-[34rem] lg:max-w-[36rem]">
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8ecfe0]">
                <span aria-hidden="true" className="mr-3 inline-block h-[2px] w-8 bg-[#C9A96A]" />Desde {SITE.since} · DF e MT
              </span>
              <StatusPill />
            </div>
            {/* filete dourado vertical — vocabulário próprio, com parallax sutil */}
            <Parallax offset={18} className="pointer-events-none absolute left-[15px] top-[28px] hidden h-[72px] w-px lg:block">
              <div className="h-full w-px bg-[#C9A96A]/45" />
            </Parallax>
            <h1 className="mt-6 max-w-[12ch] font-heading text-[42px] font-semibold leading-[0.98] tracking-[-0.015em] text-white md:text-[52px] lg:text-[56px] xl:text-[60px] text-balance">
              Sua saúde merece o melhor
            </h1>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/80 md:text-[17px]">{SITE.tagline} Consultas, exames e especialidades em um único espaço, com atendimento humanizado.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic><Link href="/unidades" className="btn btn--primary">Ver unidades e agendar</Link></Magnetic>
              <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="btn btn--ghost-light">Resultados de exames</a>
            </div>
            <p className="mt-6 text-sm font-medium tracking-[0.02em] text-white/60">{HOURS}</p>
          </div>

          {/* Coluna direita — numeral editorial como imagem, bleed com sobreposição */}
          <div aria-hidden="true" className="hidden select-none lg:flex lg:min-h-[440px] lg:items-center lg:justify-end lg:overflow-visible relative z-10 -mb-10">
            <Parallax offset={32} className="relative translate-x-6 xl:translate-x-2">
              <span className="font-heading text-[240px] leading-[0.82] tracking-[-0.05em] xl:text-[300px]" style={{ color: "transparent", WebkitTextStroke: "1.2px rgba(201,169,106,0.22)", paintOrder: "stroke" }}>08</span>
              <span className="absolute bottom-3 right-[6%] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A96A]">ANOS DE ATUAÇÃO</span>
            </Parallax>
          </div>
        </div>
      </section>

      {/* 2 · PROVA DE ESCALA — bleed alternado (âncora esquerda, numeral sangrando pela esquerda) */}
      <section className="grain relative overflow-visible bg-[#061222] z-0 -mt-6 pt-6" style={{ background: "radial-gradient(900px 480px at 15% 0%, #1d3a68 0%, #0A1830 60%, #070f1f 100%)" }}>
        {/* numeral “03” sangrando pela esquerda, sobrepondo hero — margin negativo + z-index, não absolute solto */}
        <div className="pointer-events-none relative z-0 hidden select-none lg:block -mb-10 ml-[-24px] w-fit" aria-hidden="true">
          <Parallax offset={28}>
            <span className="font-heading text-[200px] leading-none tracking-[-0.05em] xl:text-[240px]" style={{ color: "transparent", WebkitTextStroke: "1px rgba(201,169,106,0.10)" }}>03</span>
          </Parallax>
        </div>
        <div className="container-site relative z-[2] py-20 md:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#C9A96A]">
              <span aria-hidden="true" className="inline-block h-[2px] w-8 bg-[#C9A96A]" />Em números
            </p>
          </Reveal>
          <div className="relative mt-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} y={20} duration={0.6}>
                  <div className="border-t border-white/15 pt-6">
                    <p className="stat-mega"><span data-count={s.value}>{s.value}</span></p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.06em] text-white/70">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from="#070f1f" to="#ffffff" />

      {/* 3 · JORNADA DO PACIENTE — com reveal */}
      <section className="section-rythm">
        <div className="container-site">
          <Reveal>
            <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Como funciona</p>
            <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Jornada do paciente</h2>
            <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          </Reveal>
          <Reveal delay={0.1}>
            <Journey />
          </Reveal>
        </div>
      </section>

      {/* 4 · ESPECIALIDADES — STICKY editorial (título fixo, lista rola ao lado) */}
      <section className="section-rythm bg-white relative overflow-visible z-10">
        {/* numeral “06” sangrando pela direita, atrás da seção — margin negativo */}
        <div className="pointer-events-none relative z-0 hidden select-none lg:block -mt-6 mr-[-24px] ml-auto w-fit -mb-8" aria-hidden="true">
          <Parallax offset={24}>
            <span className="font-heading text-[200px] leading-none tracking-[-0.05em] xl:text-[260px]" style={{ color: "transparent", WebkitTextStroke: "1px rgba(201,169,106,0.09)" }}>06</span>
          </Parallax>
        </div>
        <div className="container-site relative z-10">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Cuidado completo</p>
                <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Especialidades</h2>
                <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
                <p className="sec-sub measure text-[#333333]/80">Consultas com especialistas · convênio e particular.</p>
                <Link href="/especialidades" className="link-arrow hidden lg:inline-flex">Ver todas as especialidades <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Explorer />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · EXAMES — bleed alternado (âncora direita, numeral sangrando pela esquerda) */}
      <section className="section-rythm bg-[#F2F7F9] relative overflow-visible z-10">
        <div className="pointer-events-none relative z-0 hidden select-none lg:block -mt-4 ml-[-24px] w-fit -mb-8" aria-hidden="true">
          <Parallax offset={26}>
            <span className="font-heading text-[200px] leading-none tracking-[-0.05em] xl:text-[240px]" style={{ color: "transparent", WebkitTextStroke: "1px rgba(22,43,77,0.06)" }}>10</span>
          </Parallax>
        </div>
        <div className="container-site relative z-10">
          <Reveal>
            <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Diagnóstico</p>
            <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Exames</h2>
            <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
            <p className="sec-sub measure text-[#333333]/80">Do check-up ao diagnóstico avançado.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" } as React.CSSProperties}>
            {EXAMS.slice(0, 6).map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08} y={20} duration={0.55}>
                <div className={`card-premium p-7 sm:p-8 ${i === 0 ? "bento-featured sm:col-span-2 lg:col-span-2" : ""}`}>
                  <IconTile Icon={EXAM_ICONS[e.name]} label={e.name} />
                  <p className={`mt-5 font-heading font-semibold text-[#162B4D] ${i === 0 ? "text-2xl md:text-[28px]" : "text-lg"}`}>
                    <span className="card-title-line">{e.name}</span>
                  </p>
                  <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#333333]/80">{e.desc}</p>
                  {i === 0 && <span aria-hidden="true" className="mt-5 inline-block h-[3px] w-10 rounded-full bg-[#C9A96A]" />}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link href="/exames" className="link-arrow mt-6">Ver todos os 10 exames <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </Reveal>
        </div>
      </section>

      {/* 6 · COMPROMISSO pilares */}
      <section className="section-rythm">
        <div className="container-site">
          <Reveal>
            <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Nosso compromisso</p>
            <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Por que a Rede Saúde Mais</h2>
            <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08} y={20} duration={0.55}>
                <div className="border-t-2 border-[#C9A96A]/60 pt-6">
                  <p aria-hidden="true" className="font-heading text-sm font-semibold tracking-[0.12em] text-[#008AA1]">{p.n}</p>
                  <p className="mt-3 flex items-center gap-3 font-heading text-xl font-semibold text-[#162B4D]">
                    <p.Icon size={24} strokeWidth={1.5} className="icon-line" aria-hidden="true" />{p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#333333]/80">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CONVÊNIOS — bleed direita */}
      <section className="section-rythm bg-white relative overflow-visible z-10">
        <div className="container-site relative z-10">
          <Reveal>
            <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Cobertura</p>
            <h2 className="sec-title font-heading text-3xl font-semibold text-[#162B4D] md:text-[40px]">Convênios</h2>
            <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
            <p className="sec-sub measure text-[#333333]/80">Atendemos convênios e particular.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="marquee">
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
          </Reveal>
        </div>
        {/* numeral “14” sangrando pela direita, sobrepondo FAQ — margin negativo */}
        <div className="pointer-events-none relative z-0 hidden select-none lg:block ml-auto mr-[-24px] -mt-4 -mb-6 w-fit" aria-hidden="true">
          <Parallax offset={20}>
            <span className="font-heading text-[200px] leading-none tracking-[-0.05em] xl:text-[240px]" style={{ color: "transparent", WebkitTextStroke: "1px rgba(201,169,106,0.08)" }}>14</span>
          </Parallax>
        </div>
      </section>

      {/* 8 · FAQ — lazy-mount abaixo da dobra */}
      <section className="section-rythm bg-[#F2F7F9] relative z-10">
        <div className="container-site">
          <Reveal>
            <p className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-[#008AA1]">Dúvidas</p>
            <h2 className="sec-title font-heading text-2xl font-semibold text-[#162B4D] md:text-3xl">Perguntas frequentes</h2>
            <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={FAQ} />
          </Reveal>
        </div>
      </section>

      <CurveDivider from="#F2F7F9" to="#0A1830" />

      {/* 9 · CTA FINAL — lazy-mount */}
      <section className="grain relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1830 0%, #162B4D 60%, #155e6b 100%)" }}>
        <div className="container-site relative z-[2] py-20 text-center text-white md:py-24">
          <Reveal>
            <div className="flex justify-center"><KnotMark /></div>
            <div className="mt-6 flex justify-center">
              <Image src="/logo.png" alt="Rede Saúde Mais" width={220} height={94} className="h-auto w-44 rounded-2xl bg-white/95 p-3" />
            </div>
            <h2 className="mx-auto mt-6 max-w-[20ch] font-heading text-3xl font-semibold md:text-[40px] text-balance">Agende sua consulta na unidade mais próxima</h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-white/80">Convênio e particular · {HOURS}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic><Link href="/unidades" className="btn btn--primary">Ver unidades e agendar</Link></Magnetic>
              <a href={SITE.resultadosUrl} target="_blank" rel="noreferrer" className="btn btn--ghost-light">Resultados de exames</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
