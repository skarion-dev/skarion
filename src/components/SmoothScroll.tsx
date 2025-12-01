"use client";

import { useEffect, useRef, PropsWithChildren } from "react";
import Lenis from "lenis";
import { ScrollContainerContext } from "./Common/ScrollContainerContext";

type SmoothScrollProps = PropsWithChildren<{
  duration?: number;
  className?: string;
}>;

export default function SmoothScroll({
  children,
  duration = 1.5,
  className = "",
}: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      duration,
      wrapper: containerRef.current,
      content: containerRef.current,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, [duration]);

  return (
    <ScrollContainerContext.Provider value={containerRef}>
      <div id="smooth-scroll-container" ref={containerRef} className={`h-[100vh] w-full overflow-y-auto ${className}`}>
        {children}
      </div>
    </ScrollContainerContext.Provider>
  );
}
