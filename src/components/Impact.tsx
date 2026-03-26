import { useEffect, useState } from "react";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/contexts/LanguageContext";

const Impact = () => {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);

  const stats = [
    { number: "500+", labelKey: "impact.families" },
    { number: "200+", labelKey: "impact.children" },
    { number: "100+", labelKey: "impact.women" },
    { number: "150+", labelKey: "impact.legal" },
  ];

  const testimonials = [
    {
      textKey: "impact.t1.text",
      nameKey: "impact.t1.name",
      roleKey: "impact.t1.role",
    },
    {
      textKey: "impact.t2.text",
      nameKey: "impact.t2.name",
      roleKey: "impact.t2.role",
    },
    {
      textKey: "impact.t3.text",
      nameKey: "impact.t3.name",
      roleKey: "impact.t3.role",
    },
  ];

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  const visibleTestimonials =
    testimonials.length > 1
      ? [testimonials[startIndex], testimonials[(startIndex + 1) % testimonials.length]]
      : testimonials;

  return (
    <section id="impacto" className="py-24 md:py-40 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
            {t("impact.tag")}
          </p>
          <ScrollRevealText
            text={t("impact.title")}
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-10">
            {t("impact.testimonials")}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {visibleTestimonials.map((testimonial, index) => (
              <blockquote key={index} className="space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic">
                  "{t(testimonial.textKey)}"
                </p>
                <footer>
                  <p className="font-semibold text-foreground text-sm">{t(testimonial.nameKey)}</p>
                  <p className="text-muted-foreground text-sm">{t(testimonial.roleKey)}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
