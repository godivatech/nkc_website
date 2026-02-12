import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export function StatsCounter({ end, suffix = "", label }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white border border-border/50 hover:border-secondary/30 transition-colors group">
      <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        {count}{suffix}
      </h3>
      <p className="text-muted-foreground uppercase tracking-widest text-xs font-semibold">{label}</p>
    </div>
  );
}
