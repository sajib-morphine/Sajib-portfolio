import { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        {
          /*triger animation when element is in viewport */
        }
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible, threshold]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionProperty: "opacity",
        transitionTimingFunction: "ease-out",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${isVisible ? delay : 0}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
