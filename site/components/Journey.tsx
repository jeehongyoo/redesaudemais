const STEPS = [
  { n: "01", title: "Agendamento", desc: "Pré-agendamento pelo WhatsApp." },
  { n: "02", title: "Consulta", desc: "Consulta com especialistas." },
  { n: "03", title: "Exames", desc: "Exames no mesmo espaço." },
  { n: "04", title: "Retorno", desc: "Retorno em até 30 dias no particular." },
];

/** Jornada do paciente: timeline horizontal (desktop) / vertical (mobile). */
export function Journey() {
  return (
    <section className="section-rythm">
      <div className="container-site">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Como funciona</p>
        <h2 data-reveal="title" className="sec-title font-display text-3xl font-bold text-[#162B4D] md:text-[40px]">Jornada do paciente</h2>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <ol id="j-list" className="j-track mt-12 grid gap-10 lg:grid-cols-4 lg:gap-6" style={{ ["--jp" as string]: 0 }}>
          <span aria-hidden="true" className="j-line hidden lg:block" />
          <span aria-hidden="true" className="j-line lg:hidden" />
          <span aria-hidden="true" id="j-fill" className="j-fill" />
          {STEPS.map((s) => (
            <li key={s.n} className="j-step relative flex gap-5 lg:flex-col lg:gap-0">
              <span aria-hidden="true" className="j-dot relative z-[1]">{s.n}</span>
              <div className="lg:mt-6">
                <p className="j-title font-display text-xl font-semibold text-[#333333]">{s.title}</p>
                <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-[#333333]/80">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
