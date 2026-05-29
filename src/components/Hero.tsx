import { ChevronGrid, LCornerGrid } from "@/components/BrandPatterns";
import logoIcon from "@/assets/logo-circular.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-[#49C5B1] via-[#2ba898] to-[#1a8a78]">
        {/* Brand pattern watermarks */}
        <div className="absolute top-8 left-8 opacity-15">
          <ChevronGrid className="w-28 md:w-40" variant="mixed" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-15">
          <LCornerGrid className="w-28 md:w-40" />
        </div>
        <img
          src={logoIcon}
          alt="Instituto Casa"
          className="w-80 md:w-[30rem] h-80 md:h-[30rem] object-contain opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            {t("hero.location")}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
