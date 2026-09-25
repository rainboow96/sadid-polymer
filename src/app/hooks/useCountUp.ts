import { useEffect, useRef, useState } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

interface UseCountUpOptions {
  duration?: number;
  margin?: UseInViewOptions["margin"];
  start?: number;
}

export function useCountUp<T extends HTMLElement = HTMLSpanElement>(
  target: number,
  options?: UseCountUpOptions
) {
  const { duration = 1800, margin = "-60px", start = 0 } = options || {};
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin });
  const [val, setVal] = useState(start);

  useEffect(() => {
    if (!inView) return;

    if (duration <= 0) {
      setVal(target);
      return;
    }

    const t0 = performance.now();
    let raf: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - t0;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.round(start + (target - start) * eased));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, start]);

  return {
    ref,
    value: val,
    formattedValue: val.toLocaleString("fa-IR"),
  };
}
