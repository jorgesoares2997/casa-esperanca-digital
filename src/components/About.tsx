import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, BRAND } from "@/components/BrandPatterns";
import logoCircular from "@/assets/logo-circular.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="quem-somos" className="relative py-20 md:py-32 bg-muted/50 overflow-hidden">
      {/* Decorative brand chevrons */}
      <div className="absolute top-12 right-8 md:right-16 opacity-[0.06] flex gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <ChevronRight key={i} className="w-8 h-12" color={BRAND.orange} />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              {t("about.tag")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              {t("about.title")}
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Instituto Casa</strong> {t("about.p1").replace("O Instituto Casa ", "").replace("Instituto Casa ", "")}
            </p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
