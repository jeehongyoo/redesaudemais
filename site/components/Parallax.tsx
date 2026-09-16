"use client";

import { motion, useScroll, useTransform, useReducedMotion, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function Parallax({
  children,
  offset = 32,
  className,
  style,
}: {
  children: React.ReactNode;
  offset?: number; // 20-40px amplitude sutil
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const [canParallax, setCanParallax] = useState(false);

  // Só ativa will-change quando em viewport
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (isInView) {
      setCanParallax(true);
      const el = ref.current;
      if (el) el.style.willChange = "transform";
      return () => {
        if (el) el.style.willChange = "auto";
      };
    } else {
      setCanParallax(false);
      if (ref.current) ref.current.style.willChange = "auto";
    }
  }, [isInView, shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Easing de desaceleração (ease-out) via spring — não movimento linear constante
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  const y = useTransform(smooth, [0, 1], shouldReduceMotion ? [0, 0] : [offset, -offset]);

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}

// Filete dourado com parallax muito sutil
export function ParallaxLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <Parallax offset={16} className={className} style={style}>
      <div className="h-full w-px bg-[#C9A96A]/45" />
    </Parallax>
  );
}
