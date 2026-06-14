import { ChevronGrid, LCornerGrid } from "@/components/BrandPatterns";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary">
        {/* Brand pattern watermarks */}
        <div className="absolute top-8 left-8 opacity-10">
          <ChevronGrid className="w-28 md:w-40" variant="mixed" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-10">
          <LCornerGrid className="w-28 md:w-40" />
        </div>
        <img
          src="/logotipo1.png"
          alt="Instituto Casa"
          className="absolute left-1/2 -translate-x-1/2 top-[25%] w-80 md:w-[32rem] object-contain opacity-20 brightness-0 invert"
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
