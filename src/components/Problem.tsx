import ScrollRevealText from "@/components/ScrollRevealText";
import { useLanguage } from "@/contexts/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
            {t("problem.tag")}
          </p>
          
          <ScrollRevealText
            text={t("problem.title")}
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 text-balance"
          />
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            <p>{t("problem.p1")}</p>
            <p>{t("problem.p2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
