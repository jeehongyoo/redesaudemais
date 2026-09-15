"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REDUCED, initCounters, initJourney, initLenis, initPageLoad, initParallax, initReveals, initScrollChrome, initTilt, initWordReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/** Liga Lenis 1x e re-escaneia reveals/counters a cada navegação. */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    initLenis();
  }, []);

  useEffect(() => {
    if (REDUCED) return;
    const ctx = gsap.context(() => {
      initPageLoad();
      initReveals();
      initWordReveal();
      initCounters();
      initParallax();
      initJourney();
      initScrollChrome();
      initTilt();
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
