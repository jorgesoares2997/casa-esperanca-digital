import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const videoUrl = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mov";
  const videoUrlMobile = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamormobile.mov";
  const [showHeroText, setShowHeroText] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

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

  // Se o vídeo já estiver em cache (buffer suficiente), pode disparar antes do mount do listener
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.readyState >= 3) {
      setIsVideoReady(true);
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div ref={topSentinelRef} className="absolute top-0 left-0 right-0 h-1 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover object-center scale-110 transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={() => setIsVideoReady(true)}
        >
          <source src={videoUrlMobile} type="video/quicktime" media="(max-width: 639px)" />
          <source src={videoUrl} type="video/quicktime" />
        </video>
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
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

      <div
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-primary transition-opacity duration-500 ${
          isVideoReady ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-live="polite"
        aria-busy={!isVideoReady}
      >
        <Loader2 className="h-10 w-10 animate-spin text-primary-foreground" aria-hidden />
        <p className="text-sm font-medium tracking-wide text-primary-foreground/90">{t("hero.loading")}</p>
      </div>
    </section>
  );
};

export default Hero;
