import { SITE, UNITS } from "@/lib/data";
import { Magnetic } from "@/components/Magnetic";

export const metadata = { title: "Contato", description: "Fale no WhatsApp da unidade mais próxima. Sem formulário, sem espera." };

export default function Page() {
  return (
    <section className="section-rythm">
      <div className="container-site">
        <p data-reveal="eyebrow" className="sec-eyebrow text-xs font-semibold uppercase tracking-[0.08em] text-[#008AA1]">Atendimento</p>
        <h1 data-words className="sec-title font-display text-3xl font-bold text-[#162B4D] md:text-4xl">Contato</h1>
        <div aria-hidden="true" data-reveal="cta" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <p data-reveal="text" className="sec-sub measure text-[#333333]/80">Fale direto no WhatsApp da unidade — sem formulário, sem espera.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
          {UNITS.map((u, i) => (
            <div key={u.id} data-reveal="card" data-tilt data-reveal-i={String(i)} className="flex flex-col rounded-[14px] border border-[#E6EAF0] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,.04)]">
              <p className="font-display font-semibold text-[#162B4D]">{u.label}</p>
              <p className="mt-1 text-sm text-[#333333]/80">{u.address}</p>
              <Magnetic className="mt-auto block pt-4">
                <div className="grid gap-2">
                  {u.phones.map((p) => (
                    <a key={p.display} href={p.href} target="_blank" rel="noreferrer" className="btn btn--primary w-full text-sm" style={{ textTransform: "none", fontSize: 14 }}>{p.display}{p.whatsapp ? " · WhatsApp" : ""}</a>
                  ))}
                </div>
              </Magnetic>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#333333]/80">E-mail: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      </div>
    </section>
  );
}
