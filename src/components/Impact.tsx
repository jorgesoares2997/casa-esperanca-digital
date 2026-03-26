import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/contexts/LanguageContext";

const Impact = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

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
    if (!api || testimonials.length <= 1 || isPaused) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [api, testimonials.length, isPaused]);

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
          <div className="mb-10 flex items-center justify-between gap-4">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {t("impact.testimonials")}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start", duration: 30 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <blockquote className="space-y-6 rounded-xl border border-border bg-card p-6 md:p-8 h-full">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic">
                      "{t(testimonial.textKey)}"
                    </p>
                    <footer>
                      <p className="font-semibold text-foreground text-sm">{t(testimonial.nameKey)}</p>
                      <p className="text-muted-foreground text-sm">{t(testimonial.roleKey)}</p>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Impact;
