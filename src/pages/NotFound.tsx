import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ChevronGrid,
  LCornerGrid,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ChevronDivider,
  BRAND,
} from "@/components/BrandPatterns";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-primary overflow-hidden">
      {/* Brand pattern decorations */}
      <div className="absolute top-6 left-6 opacity-10">
        <ChevronGrid className="w-32 md:w-48" variant="mixed" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-10">
        <LCornerGrid className="w-32 md:w-48" />
      </div>
      <div className="absolute top-1/4 right-10 opacity-[0.06]">
        <ChevronUp className="w-20 md:w-32" color={BRAND.orange} />
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-[0.06]">
        <ChevronDown className="w-20 md:w-32" color={BRAND.teal} />
      </div>
      <div className="absolute top-10 right-1/3 opacity-[0.05]">
        <ChevronLeft className="w-12 md:w-20" color={BRAND.white} />
      </div>
      <div className="absolute bottom-10 left-1/3 opacity-[0.05]">
        <ChevronRight className="w-12 md:w-20" color={BRAND.white} />
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        {/* 404 number with brand accent */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <ChevronRight className="w-8 h-12 md:w-10 md:h-14" color={BRAND.orange} />
          <h1 className="text-8xl md:text-9xl font-black text-primary-foreground tracking-tighter">
            404
          </h1>
          <ChevronLeft className="w-8 h-12 md:w-10 md:h-14" color={BRAND.orange} />
        </div>

        <ChevronDivider className="justify-center mb-6" color={BRAND.teal} />

        <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-md mx-auto">
          {language === "pt"
            ? "Ops! A página que você procura não foi encontrada."
            : "Oops! The page you're looking for doesn't exist."}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground uppercase tracking-wider transition-all hover:brightness-110 hover:scale-105"
        >
          <ChevronLeft className="w-3 h-5" color="currentColor" />
          {language === "pt" ? "Voltar ao início" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
