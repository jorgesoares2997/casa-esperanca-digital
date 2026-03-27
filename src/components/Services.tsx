import { useLanguage } from "@/contexts/LanguageContext";
import { LCornerGrid, ChevronDivider, ChevronRight, BRAND } from "@/components/BrandPatterns";
import pregnantImage from "@/assets/service-pregnant.jpg";
import schoolImage from "@/assets/service-school.jpg";
import nutritionImage from "@/assets/service-nutrition.jpg";
import legalImage from "@/assets/service-legal.jpg";
import psychologyImage from "@/assets/service-psychology.jpg";
import physioImage from "@/assets/service-physio.jpg";
import nursingImage from "@/assets/service-nursing.jpg";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "services.pregnant.title",
      descKey: "services.pregnant.desc",
      image: pregnantImage,
    },
    {
      titleKey: "services.school.title",
      descKey: "services.school.desc",
      image: schoolImage,
    },
    {
      titleKey: "services.legal.title",
      descKey: "services.legal.desc",
      image: legalImage,
      waitingProfessionals: true,
    },
    {
      titleKey: "services.nutrition.title",
      descKey: "services.nutrition.desc",
      image: nutritionImage,
    },
    {
      titleKey: "services.psychology.title",
      descKey: "services.psychology.desc",
      image: psychologyImage,
    },
    {
      titleKey: "services.physio.title",
      descKey: "services.physio.desc",
      image: physioImage,
      comingSoon: true,
    },
    {
      titleKey: "services.nursing.title",
      descKey: "services.nursing.desc",
      image: nursingImage,
      comingSoon: true,
      subtitle: t("services.prenatal"),
    },
  ];

  return (
    <section
      id="servicos"
      className="relative py-20 md:py-32 bg-[#f6f6f6] dark:bg-[#06103a] overflow-hidden transition-colors duration-500"
    >
      {/* Brand L-corner pattern background — subtle watermark */}
      <div className="absolute top-0 right-0 w-72 md:w-[28rem] opacity-[0.04] dark:opacity-[0.08]">
        <LCornerGrid />
      </div>
      <div className="absolute bottom-0 left-0 w-56 md:w-80 opacity-[0.04] dark:opacity-[0.08] rotate-180">
        <LCornerGrid />
      </div>

      {/* Decorative chevron row */}
      <div className="absolute top-6 left-8 md:left-12 opacity-20 dark:opacity-35">
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <ChevronRight key={i} className="w-4 h-6" color={BRAND.orange} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#001A72]/50 dark:text-[#49C5B1]/80 mb-6">
            {t("services.tag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001A72] dark:text-[#e9eeff] leading-tight">
            {t("services.title")}
          </h2>
          {/* Brand chevron divider */}
          <ChevronDivider className="mt-6 opacity-60 dark:opacity-90" color={BRAND.orange} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-[4/3] ${
                index < 2 ? "lg:col-span-1" : ""
              } dark:ring-1 dark:ring-white/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]`}
            >
              <img
                src={service.image}
                alt={t(service.titleKey)}
                loading="lazy"
                width={800}
                height={600}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  service.comingSoon ? "grayscale-[30%]" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent dark:from-black/90 dark:via-black/45 dark:to-black/10" />
              
              {service.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {t("services.comingSoon")}
                  </span>
                </div>
              )}

              {service.waitingProfessionals && (
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {t("services.waitingProfessionals")}
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {t(service.titleKey)}
                </h3>
                {service.subtitle && (
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t(service.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
