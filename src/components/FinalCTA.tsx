import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronGrid, LCornerGrid, ChevronDivider, BRAND } from "@/components/BrandPatterns";
import logoIcon from "@/assets/logo-icon.png";

const FinalCTA = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    const phoneNumber = "5581973183247";
    const message = encodeURIComponent(
      "Olá, gostaria de saber mais sobre como apoiar o Instituto Casa."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-24 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      {/* Brand patterns as decorative backgrounds */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 opacity-[0.06]">
        <ChevronGrid className="w-36 md:w-52" variant="mixed" />
      </div>
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 opacity-[0.05]">
        <LCornerGrid className="w-40 md:w-56" />
      </div>
      {/* Subtle corner chevrons */}
      <div className="absolute top-6 right-8 opacity-20">
        <ChevronDivider color={BRAND.orange} />
      </div>
      {/* Logo icon watermark */}
      <div className="absolute bottom-12 left-12 ">
        <img src={logoIcon} alt="" aria-hidden="true" className="w-20 md:w-28" />
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
            {t("cta.subtitle")}
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-md text-base hover:opacity-90 transition-opacity duration-200 group"
          >
            {t("cta.button")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
