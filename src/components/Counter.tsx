"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function Counter({ value, duration = 5, className = "text-[#000000] text-[64px] font-[650] leading-[1.1]", suffix = "+" }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop; 
  }, [value, duration, count]);

  return (
    <span className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix && (
        <span style={{ fontSize: "1.0em", marginLeft: 2 }}>{suffix}</span>
      )}
    </span>
  );
}
