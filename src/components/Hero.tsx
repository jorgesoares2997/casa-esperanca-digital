import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const videoUrl = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mp4";
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowHeroText(window.scrollY > 20);
    };

    // Se o usuário entrar com scroll já avançado
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <p
            className={`text-white/60 text-sm md:text-base font-medium tracking-widest uppercase mb-4 transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6"
            }`}
          >
            {t("hero.location")}
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6"
            }`}
          >
            {t("hero.title")}
          </h1>
          <p
            className={`text-lg md:text-xl text-white/75 leading-relaxed max-w-xl transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6"
            }`}
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
