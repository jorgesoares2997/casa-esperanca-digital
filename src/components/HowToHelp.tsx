import { useLanguage } from "@/contexts/LanguageContext";

const HowToHelp = () => {
  const { t } = useLanguage();

  const ways = [
    { titleKey: "help.partnership.title", descKey: "help.partnership.desc" },
    { titleKey: "help.donation.title", descKey: "help.donation.desc" },
    { titleKey: "help.material.title", descKey: "help.material.desc" },
    { titleKey: "help.volunteer.title", descKey: "help.volunteer.desc" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            {t("help.tag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            {t("help.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("help.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
          {ways.map((way, index) => (
            <div key={index} className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(way.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {t(way.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
