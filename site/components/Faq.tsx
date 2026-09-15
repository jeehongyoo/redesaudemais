"use client";

import { useState } from "react";
import { FAQ } from "@/lib/data";

export function Faq({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="faq-question">{f.q}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </span>
            </button>
            <div className="faq-panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`}>
              <div className="faq-panel-inner">
                <p className="faq-answer">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
