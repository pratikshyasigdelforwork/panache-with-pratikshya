"use client";

import { useRef, useEffect, type ReactNode } from "react";

type AnimationType = "fadeInUp" | "fadeIn" | "scaleIn";

export default function AnimatedSection({
  children,
  type = "fadeInUp",
  stagger = false,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  type?: AnimationType;
  stagger?: boolean;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("in-view"), delay * 1000);
          } else {
            el.classList.add("in-view");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const attr: Record<string, string> = stagger
    ? { "data-animate-stagger": "true" }
    : { "data-animate": type };

  return (
    <div ref={ref} {...attr} className={className}>
      {children}
    </div>
  );
}
