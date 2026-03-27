import { useEffect, useRef, useState } from "react";
import { ChevronGrid, LCornerGrid, ChevronUp, ChevronDown, ChevronRight } from "@/components/BrandPatterns";
import logoIcon from "@/assets/logo-circular.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const videoUrlDesktop = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mov";
  const videoUrlMobile = "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamormobile.mov";
  const [showHeroText, setShowHeroText] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639px)").matches : false,
  );
  const [isDesktopReady, setIsDesktopReady] = useState(false);
  const [isMobileReady, setIsMobileReady] = useState(false);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

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

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Se o vídeo já estiver em cache (buffer suficiente), pode disparar antes do mount do listener
  useEffect(() => {
    const d = desktopVideoRef.current;
    const m = mobileVideoRef.current;
    if (d?.readyState && d.readyState >= 3) setIsDesktopReady(true);
    if (m?.readyState && m.readyState >= 3) setIsMobileReady(true);
  }, []);

  const isVideoReady = isMobile ? isMobileReady : isDesktopReady;

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div ref={topSentinelRef} className="absolute top-0 left-0 right-0 h-1 pointer-events-none" />
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`w-full h-full object-cover object-center scale-110 transition-opacity duration-500 ${
              isMobileReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onLoadedData={() => setIsMobileReady(true)}
            onCanPlay={() => setIsMobileReady(true)}
            onError={() => setIsMobileReady(true)}
          >
            <source src={videoUrlMobile} type="video/quicktime" />
          </video>
        ) : (
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`w-full h-full object-cover object-center scale-110 transition-opacity duration-500 ${
              isDesktopReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onLoadedData={() => setIsDesktopReady(true)}
            onCanPlay={() => setIsDesktopReady(true)}
            onError={() => setIsDesktopReady(true)}
          >
            <source src={videoUrlDesktop} type="video/quicktime" />
          </video>
        )}
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
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-700 ${
          isVideoReady ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-live="polite"
        aria-busy={!isVideoReady}
      >
        {/* Brand pattern watermarks */}
        <div className="absolute top-8 left-8 opacity-10">
          <ChevronGrid className="w-28 md:w-40" variant="mixed" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-10">
          <LCornerGrid className="w-28 md:w-40" />
        </div>
        <div className="absolute top-12 right-12 opacity-[0.07]">
          <ChevronUp className="w-16 md:w-24" color="hsl(var(--accent))" />
        </div>
        <div className="absolute bottom-12 left-12 opacity-[0.07]">
          <ChevronDown className="w-16 md:w-24" color="hsl(var(--accent))" />
        </div>

        {/* Center content */}
        <div className="relative flex flex-col items-center gap-6">
          <img
            src={logoIcon}
            alt="Instituto Casa"
            className="w-full h-full object-contain animate-pulse brightness-0 invert"
          />
          <div className="flex items-center gap-3">
            <ChevronRight className="w-6 h-8 animate-pulse" color="hsl(var(--accent))" />
            <ChevronRight className="w-6 h-8 animate-pulse [animation-delay:150ms]" color="hsl(24.7 100% 50% / 0.6)" />
            <ChevronRight className="w-6 h-8 animate-pulse [animation-delay:300ms]" color="hsl(24.7 100% 50% / 0.3)" />
          </div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/80">
            {t("hero.loading")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
