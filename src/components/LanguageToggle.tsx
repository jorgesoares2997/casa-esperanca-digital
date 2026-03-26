import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      <span className="text-xs font-semibold tracking-wider uppercase text-foreground">
        {language === "pt" ? "EN" : "PT"}
      </span>
    </button>
  );
};

export default LanguageToggle;
