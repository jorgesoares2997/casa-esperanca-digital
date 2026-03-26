import heroImage from "@/assets/hero-community.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Comunidade atendida pelo Instituto Casa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <p className="text-white/60 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            {t("hero.location")}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
