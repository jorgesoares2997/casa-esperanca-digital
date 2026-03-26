import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: "h2" | "p" | "span";
}

const ScrollRevealText = ({ text, className = "", as: Tag = "h2" }: ScrollRevealTextProps) => {
  const { ref, progress } = useScrollReveal(0.1);
  
  const words = text.split(" ");
  
  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const wordProgress = i / words.length;
          const isVisible = progress > wordProgress * 0.7 + 0.05;
          const opacity = isVisible ? 1 : 0.08;
          const translateY = isVisible ? 0 : 8;
          
          return (
            <span
              key={i}
              style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                transition: "opacity 0.5s ease, transform 0.4s ease",
                display: "inline-block",
                marginRight: "0.3em",
              }}
            >
              {word}
            </span>
          );
        })}
      </Tag>
    </div>
  );
};

export default ScrollRevealText;
