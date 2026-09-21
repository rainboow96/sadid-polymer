import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverProps = {}
) {
  const { rootMargin = "100px", threshold = 0 } = options;
  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin, threshold }
    );

    const currentElement = containerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return { containerRef, isVisible };
}
