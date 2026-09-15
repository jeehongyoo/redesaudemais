"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Container com stagger para irmãos
export function RevealGroup({
  children,
  stagger = 0.1,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Evita CLS no SSR: sem animação até mount, mas sem layout shift (opacity/transform only)
  if (!mounted) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Acima da dobra: hero entra direto (sem whileInView). Este componente é só para abaixo da dobra.
  // Para evitar CLS, initial usa transform/opacity apenas.
  if (!mounted) return <div className={className}>{children}</div>;

  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y };
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  // @ts-expect-error framer motion polymorphic
  const MTag = motion[Tag] || motion.div;

  return (
    <MTag
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </MTag>
  );
}

// Hero: sem animação de scroll, entra direto sem CLS
export function HeroReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
