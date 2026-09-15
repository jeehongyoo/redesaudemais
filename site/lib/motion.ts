"use client";

/**
 * Motion — vocabulário portado do DS HeadFiscal (GSAP + ScrollTrigger + Lenis),
 * adaptado à Rede Saúde Mais. Sem preloader, sem cursor, sem pin.
 * Conteúdo sempre visível no HTML; animação é progressive enhancement.
 * `prefers-reduced-motion` desliga tudo.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const EASE_OUT = "power3.out";

const PRESET: Record<string, gsap.TweenVars> = {
  title: { opacity: 0, y: 40, filter: "blur(8px)", duration: 1, ease: EASE_OUT, clearProps: "filter" },
  titleSm: { opacity: 0, y: 32, filter: "blur(8px)", duration: 0.9, ease: EASE_OUT, clearProps: "filter" },
  eyebrow: { opacity: 0, x: -24, duration: 0.8, ease: EASE_OUT, clearProps: "transform" },
  text: { opacity: 0, y: 30, duration: 0.9, ease: EASE_OUT, clearProps: "transform" },
  cta: { opacity: 0, y: 24, duration: 0.8, ease: EASE_OUT, clearProps: "transform" },
  /** Hero/LCP: sem blur, curto, dispara imediato — nunca atrasa o first paint */
  hero: { opacity: 0, y: 24, duration: 0.7, ease: EASE_OUT, clearProps: "transform" },
  card: { opacity: 0, y: 40, duration: 0.8, ease: EASE_OUT, clearProps: "transform" },
  cardPop: { opacity: 0, y: 36, scale: 0.96, duration: 0.8, ease: EASE_OUT, clearProps: "transform" },
  /** Reveal via clip-path (conteúdo sempre com opacity 1) */
  mask: { duration: 0.9, ease: EASE_OUT },
};

/** Reveal declarativo: data-reveal="title|eyebrow|text|cta|card" data-reveal-i="n" data-reveal-start="top 82%" */
export function initReveals(root: ParentNode = document) {
  if (REDUCED) return;
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  els.forEach((el) => {
    if (el.dataset.revealDone) return;
    el.dataset.revealDone = "1";
    const name = el.dataset.reveal || "card";
    const trigger = { trigger: el, start: el.dataset.revealStart || "top 82%", once: true };
    if (name === "mask") {
      gsap.fromTo(
        el,
        { clipPath: "inset(14% 8% 14% 8% round 24px)" },
        { clipPath: "inset(0% 0% 0% 0% round 16px)", duration: 0.9, ease: EASE_OUT, scrollTrigger: trigger }
      );
      return;
    }
    if (name === "draw") {
      const paths = el.tagName === "path" ? [el as unknown as SVGPathElement] : Array.from(el.querySelectorAll("path"));
      paths.forEach((p, k) => {
        const len = p.getTotalLength();
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.4, delay: k * 0.2, ease: EASE_OUT, scrollTrigger: trigger });
      });
      return;
    }
    if (name === "draw-scrub") {
      const paths = el.tagName === "path" ? [el as unknown as SVGPathElement] : Array.from(el.querySelectorAll("path"));
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 45%", scrub: true } });
      });
      return;
    }
    const preset = { ...(PRESET[name] || PRESET.card) };
    const i = parseFloat(el.dataset.revealI || "0");
    const stagger = parseFloat(el.dataset.revealStagger || "0.08");
    const delay = parseFloat(el.dataset.revealDelay || "0") + Math.min(i, 3) * stagger;
    gsap.from(el, { ...preset, delay, scrollTrigger: trigger });
  });
}

/** Contadores: <span data-count="11">11</span> — HTML traz o valor final; anima de 90% ao entrar. */
export function initCounters(root: ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
  els.forEach((el) => {
    if (el.dataset.countDone) return;
    el.dataset.countDone = "1";
    const target = parseFloat(el.dataset.count || "0");
    if (Number.isNaN(target)) return;
    const fmt = (v: number) => String(Math.round(v));
    if (REDUCED) {
      el.textContent = fmt(target);
      return;
    }
    const obj = { v: Math.round(target * 0.9) };
    el.textContent = fmt(obj.v);
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => (el.textContent = fmt(obj.v)),
          onComplete: () => {
            el.textContent = fmt(target);
            gsap.fromTo(el, { scale: 1.05 }, { scale: 1, duration: 0.5, ease: "back.out(2)", clearProps: "transform" });
          },
        }),
    });
  });
}

let lenis: Lenis | null = null;

/** Lenis smooth scroll (duration 1.2, easing expo). Âncoras internas passam por ele. */
export function initLenis() {
  if (REDUCED || lenis) return lenis;
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  lenis.on("scroll", ScrollTrigger.update);
  const raf = (t: number) => lenis?.raf(t * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    if (a.dataset.lenisBound) return;
    a.dataset.lenisBound = "1";
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis?.scrollTo(target as HTMLElement);
      }
    });
  });
  return lenis;
}

/**
 * Parallax sutil em camadas: data-parallax="0.12" (fração da altura).
 * transform-only, scrub, desligado em touch/reduced-motion.
 */
export function initParallax(root: ParentNode = document) {
  if (REDUCED) return;
  if (window.matchMedia("(hover: none)").matches) return;
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
  els.forEach((el) => {
    if (el.dataset.parallaxDone) return;
    el.dataset.parallaxDone = "1";
    const speed = parseFloat(el.dataset.parallax || "0.1");
    gsap.to(el, {
      y: () => speed * 200,
      ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}

/**
 * Jornada: cada .j-step acende ao entrar em foco; #j-fill preenche via --jp.
 * #read-progress (scaleX) + #thread-progress (dashoffset) seguem o scroll da página.
 * Tudo desligado em touch/reduced-motion (versões estáticas no CSS/HTML).
 */
export function initJourney(root: ParentNode = document) {
  const list = (root instanceof Document ? root : document).querySelector<HTMLElement>("#j-list");
  if (list && !list.dataset.journeyDone) {
    list.dataset.journeyDone = "1";
    const steps = Array.from(list.querySelectorAll(".j-step"));
    steps.forEach((s) => {
      ScrollTrigger.create({
        trigger: s,
        start: "top 72%",
        end: "bottom 30%",
        onToggle: (self) => s.classList.toggle("is-active", self.isActive),
      });
    });
    if (!REDUCED) {
      ScrollTrigger.create({
        trigger: list,
        start: "top 75%",
        end: "bottom 45%",
        scrub: true,
        onUpdate: (self) => list.style.setProperty("--jp", String(self.progress)),
      });
    } else {
      list.style.setProperty("--jp", "1");
      steps.forEach((s) => s.classList.add("is-active"));
    }
  }
}

export function initScrollChrome() {  if (REDUCED) return;
  if (window.matchMedia("(hover: none)").matches) return;
  const bar = document.querySelector<HTMLElement>("#read-progress");
  const rail = document.querySelector<SVGPathElement>("#thread-progress");
  if (!bar && !rail) return;
  let len = 0;
  if (rail) {
    len = rail.getTotalLength();
    rail.style.strokeDasharray = String(len);
    rail.style.strokeDashoffset = String(len);
  }
  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.4,
    onUpdate: (self) => {
      const p = self.progress;
      if (bar) bar.style.transform = `scaleX(${p})`;
      if (rail) rail.style.strokeDashoffset = String(len * (1 - p));
    },
  });
}

/**
 * Reveal por palavra: [data-words] tem o texto fatiado em spans com máscara
 * (fatiamento só no JS — sem JS/reduced-motion o texto aparece intacto).
 */
export function initWordReveal(root: ParentNode = document) {
  if (REDUCED) return;
  const els = Array.from((root instanceof Document ? root : document).querySelectorAll<HTMLElement>("[data-words]"));
  els.forEach((el) => {
    if (el.dataset.wordsDone) return;
    el.dataset.wordsDone = "1";
    const text = (el.textContent || "").trim();
    el.setAttribute("aria-label", text);
    el.innerHTML = text
      .split(/\s+/)
      .map((w) => `<span class="w" aria-hidden="true"><span class="wi">${w}</span></span>`)
      .join(" ");
    gsap.to(el.querySelectorAll(".wi"), {
      y: 0,
      duration: 0.7,
      ease: EASE_OUT,
      stagger: 0.06,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });
}

/**
 * Tilt 3D sutil (máx 4°, pointer fino): transform direto + transição CSS curta.
 * Sem GSAP aqui para não brigar com reveals; sombra/borda do hover seguem no CSS.
 */
export function initTilt(root: ParentNode = document) {
  if (REDUCED) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const els = Array.from((root instanceof Document ? root : document).querySelectorAll<HTMLElement>("[data-tilt]"));
  els.forEach((card) => {
    if (card.dataset.tiltDone) return;
    card.dataset.tiltDone = "1";
    card.style.transformStyle = "preserve-3d";
    card.style.transition = "transform .18s ease-out, box-shadow .22s ease, border-color .22s ease, background-color .22s ease";
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/** Chegada coordenada (<900ms): logo micro-fade/scale + header desliza. */
export function initPageLoad() {
  if (REDUCED) return;
  const header = document.querySelector("header");
  const logo = document.querySelector('header img[alt="Rede Saúde Mais"]');
  const tl = gsap.timeline({ defaults: { ease: EASE_OUT, clearProps: "all" } });
  if (logo) tl.from(logo, { opacity: 0, scale: 0.96, duration: 0.4 });
  if (header) tl.from(header, { y: -16, duration: 0.5 }, "-=0.2");
}
