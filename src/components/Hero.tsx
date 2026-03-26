import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const videoUrl = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mov";
  const videoUrlMobile = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamormobile.mov";
  const [showHeroText, setShowHeroText] = useState(false);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = topSentinelRef.current;
    if (!el) return;

    // Estado inicial (caso o usuário abra/retorne a página já com scroll).
    setShowHeroText(window.scrollY > 20);

    // Sentinel controla quando estamos "no topo" (quando ele ainda está visível).
    // rootMargin ajusta o comportamento para "como o header" (aprox. 20px).
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeroText(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "20px 0px 0px 0px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div ref={topSentinelRef} className="absolute top-0 left-0 right-0 h-1 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-110"
          aria-hidden="true"
        >
          <source src={videoUrlMobile} type="video/quicktime" media="(max-width: 639px)" />
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <p
            className={`text-white/60 text-sm md:text-base font-medium tracking-widest uppercase mb-4 transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6 animate-fade-down"
            }`}
          >
            {t("hero.location")}
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6 animate-fade-down"
            }`}
          >
            {t("hero.title")}
          </h1>
          <p
            className={`text-lg md:text-xl text-white/75 leading-relaxed max-w-xl transition-all duration-700 ${
              showHeroText ? "opacity-100 translate-y-0 animate-fade-up" : "opacity-0 translate-y-6 animate-fade-down"
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
