import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Determine animation based on direction
  const animationClass = isVisible
    ? `animate-fadeUp opacity-100`
    : `opacity-0 ${direction === "up" ? "translate-y-10" : "translate-x-10"}`;

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-700 ease-out transform ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
