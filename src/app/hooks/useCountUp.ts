import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  duration?: number;
  margin?: any;
}

export function useCountUp(target: number, options?: UseCountUpOptions) {
  const { duration = 1800, margin = "-60px" } = options || {};
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const t0 = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); 
      setVal(Math.round(target * eased));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);


  return {
    ref,
    value: val,
    formattedValue: val.toLocaleString("fa-IR"),
  };
}
