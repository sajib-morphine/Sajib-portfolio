import useScrollReveal from "../../hooks/useScrollReveal";
const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0 });
  const animationClasses = {
    fadeUp: "translate-y-8 opacity-0",
    fadein: "opacity-0",
    slideleft: "-translate-x-12 opacity-0",
    slideright: "translate-x-12 opacity-0",
    scaleIn: "scale-90 opacity-0",
  };
  const visibleClass = "translate-y-0 opacity-100 translate-x-0 scale-100";
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-all ${animationClasses[animation]} ${
        isVisible ? visibleClass : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
