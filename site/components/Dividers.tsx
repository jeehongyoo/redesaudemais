/** Divisor curvo entre blocos (entrelaçamento, não linha reta). */
export function CurveDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" style={{ background: from, transform: flip ? "scaleY(-1)" : undefined, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 64 }}>
        <path d="M0,58 C300,108 700,8 1080,48 C1260,66 1360,60 1440,44 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  );
}

/** Nó do fio (fitas entrelaçadas ecoando o logo) — desenha ao entrar. */
export function KnotMark({ className = "" }: { className?: string }) {
  return (
    <svg data-reveal="draw" viewBox="0 0 120 64" fill="none" aria-hidden="true" className={className} style={{ width: 120, height: 64 }}>
      <path d="M8,32 C30,8 50,8 60,32 C70,56 90,56 112,32" stroke="#00A9C5" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8,32 C30,56 50,56 60,32 C70,8 90,8 112,32" stroke="#C9A96A" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="32" r="3" fill="#00A9C5" />
    </svg>
  );
}
