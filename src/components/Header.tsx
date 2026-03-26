import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      setIsDarkTheme(true);
      return;
    }

    if (theme === "light") {
      setIsDarkTheme(false);
      return;
    }

    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [theme]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("nav.inicio"), id: "inicio" },
    { label: t("nav.quemSomos"), id: "quem-somos" },
    { label: t("nav.servicos"), id: "servicos" },
    { label: t("nav.impacto"), id: "impacto" },
    { label: t("nav.contato"), id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection("inicio")} className="flex items-center">
            <img
              src={isDarkTheme ? "/logotipo2.png" : isScrolled ? "/logotipo1.png" : "/logotipo2.png"}
              alt="Instituto Casa"
              className="h-8 md:h-10 w-auto transition-all duration-300"
            />
          </button>

          <div className="flex items-center gap-3 md:gap-4">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isScrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <ThemeToggle />

            <button
              className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
