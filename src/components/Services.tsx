import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LCornerGrid, ChevronDivider, ChevronRight, BRAND } from "@/components/BrandPatterns";
import pregnantImage from "@/assets/service-pregnant.jpg";
import schoolImage from "@/assets/service-school.jpg";
const nutritionImage = "/nutricao.png";
import legalImage from "@/assets/service-legal.jpg";
import psychologyImage from "@/assets/service-psychology.jpg";
import physioImage from "@/assets/service-physio.jpg";
import nursingImage from "@/assets/service-nursing.jpg";

const pregnantVideoUrl = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mov";

type Service = {
  titleKey: string;
  descKey: string;
  image: string;
  videoModal?: boolean;
  comingSoon?: boolean;
  waitingProfessionals?: boolean;
  subtitle?: string;
};

// ─── Modal ────────────────────────────────────────────────────────────────────

const ServiceModal = ({
  service,
  onClose,
}: {
  service: (Service & { title: string; desc: string }) | null;
  onClose: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  useEffect(() => {
    if (service?.videoModal && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }, [service]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media */}
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-black">
          {service.videoModal ? (
            <video
              ref={videoRef}
              controls
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={pregnantVideoUrl} type="video/mp4" />
              <source src={pregnantVideoUrl} />
            </video>
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {(service.comingSoon || service.waitingProfessionals) && (
            <span className="inline-block mb-3 bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              {service.comingSoon ? "Em breve" : "Aguardando profissionais"}
            </span>
          )}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-4">
              {service.subtitle}
            </p>
          )}
          <p className="text-muted-foreground text-base leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────

const Services = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<(Service & { title: string; desc: string }) | null>(null);

  const services: Service[] = [
    {
      titleKey: "services.pregnant.title",
      descKey: "services.pregnant.desc",
      image: pregnantImage,
      videoModal: true,
    },
    {
      titleKey: "services.school.title",
      descKey: "services.school.desc",
      image: schoolImage,
      waitingProfessionals: true,
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

  const openModal = (service: Service) => {
    setActiveService({
      ...service,
      title: t(service.titleKey),
      desc: t(service.descKey),
    });
  };

  return (
    <>
      <section
        id="servicos"
        className="relative py-20 md:py-32 bg-section-light dark:bg-section-dark overflow-hidden transition-colors duration-500"
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
            <p className="text-sm font-medium tracking-widest uppercase text-heading-on-light/50 dark:text-teal/80 mb-6">
              {t("services.tag")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading-on-light dark:text-heading-on-dark leading-tight">
              {t("services.title")}
            </h2>
            {/* Brand chevron divider */}
            <ChevronDivider className="mt-6 opacity-60 dark:opacity-90" color={BRAND.orange} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openModal(service)}
                className={`group relative overflow-hidden rounded-lg aspect-[4/3] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent dark:from-black/90 dark:via-black/45 dark:to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* "Ver mais" hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                    Ver mais
                  </span>
                </div>

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

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                    {t(service.titleKey)}
                  </h3>
                  {service.subtitle && (
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mt-1">
                      {service.subtitle}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  );
};

export default Services;
