import { useEffect, useState, useRef } from "react";
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    once = true,
  } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, root, rootMargin },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { isVisible, elementRef };
};
