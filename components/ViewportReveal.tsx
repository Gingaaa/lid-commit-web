"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ViewportRevealProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delayMs?: number;
}

export function ViewportReveal({ children, id, className = "", delayMs = 0 }: ViewportRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 filter-none"
          : "opacity-0 translate-y-8 scale-[0.98] blur-[2px] pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
