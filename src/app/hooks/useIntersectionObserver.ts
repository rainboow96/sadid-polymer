import { useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
  initialIsVisible?: boolean;
};

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    root = null,
    rootMargin = "100px",
    threshold = 0,
    freezeOnceVisible = false,
    initialIsVisible = false,
  } = options;

  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(initialIsVisible);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    if (freezeOnceVisible && isVisible) return;

    let mounted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!mounted) return;

        const next = entry.isIntersecting;

        setIsVisible((prev) => (prev === next ? prev : next));

        if (freezeOnceVisible && next) {
          observer.unobserve(entry.target);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);

    return () => {
      mounted = false;
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, freezeOnceVisible, isVisible]);

  return { containerRef, isVisible };
}
