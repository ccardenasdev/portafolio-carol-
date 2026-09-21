"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealVariant = "default" | "hero" | "header";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}

export default function Reveal({
  children,
  delay = 0,
  variant = "default",
  as: Tag = "div",
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );
    observer.observe(el);

    // Some elements (large above-the-fold cards, images still loading) can end
    // up with a zero-size bounding box on first paint and never cross the
    // intersection threshold. Force-reveal as a safety net so content never
    // stays permanently invisible.
    const fallback = window.setTimeout(() => setRevealed(true), 700);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [revealed]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      data-reveal={variant === "default" ? "" : variant}
      data-revealed={revealed ? "" : undefined}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Component>
  );
}
