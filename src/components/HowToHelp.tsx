import { useLanguage } from "@/contexts/LanguageContext";

const HowToHelp = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5581973183247";

  const ways = [
    {
      titleKey: "help.partnership.title",
      descKey: "help.partnership.desc",
      buttonKey: "help.partnership.button",
      disabled: true,
    },
    {
      titleKey: "help.donation.title",
      descKey: "help.donation.desc",
      buttonKey: "help.donation.button",
      whatsappMessage: "Olá! Quero contribuir com uma doação recorrente para o Instituto Casa.",
    },
    {
      titleKey: "help.material.title",
      descKey: "help.material.desc",
      buttonKey: "help.material.button",
      whatsappMessage: "Olá! Quero fazer uma doação de materiais para o Instituto Casa.",
    },
    {
      titleKey: "help.volunteer.title",
      descKey: "help.volunteer.desc",
      buttonKey: "help.volunteer.button",
      disabled: true,
    },
  ];

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

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
              <button
                type="button"
                disabled={way.disabled}
                onClick={() => way.whatsappMessage && openWhatsApp(way.whatsappMessage)}
                className="mt-5 inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t(way.buttonKey)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
