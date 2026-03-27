import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronGrid, BRAND } from "@/components/BrandPatterns";

const Impact = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  // Brand orange chevron arrows for carousel
  const BrandArrowLeft = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M14.8 6.2L8.2 12L14.8 17.8"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BrandArrowRight = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M9.2 6.2L15.8 12L9.2 17.8"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
    <section id="impacto" className="relative py-24 md:py-40 bg-muted/50 overflow-hidden">
      {/* Decorative brand pattern - top right */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-[0.06]">
        <ChevronGrid className="w-32 md:w-48" variant="navy" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-accent bg-background text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <BrandArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-accent bg-background text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <BrandArrowRight />
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
