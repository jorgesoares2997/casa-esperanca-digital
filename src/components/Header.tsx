import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Nossos Serviços", id: "servicos" },
    { label: "Como Ajudar", id: "como-ajudar" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={isScrolled || theme === 'dark' ? "/logotipo1.png" : "/logotipo2.png"} 
              alt="Instituto Casa" 
              className="w-32 h-auto transition-all duration-300" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || theme === 'dark'
                    ? "text-primary hover:text-secondary" 
                    : "text-white hover:text-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4 border-l border-primary/20 pl-4 lg:pl-6">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${
                  isScrolled || theme === 'dark'
                    ? "text-primary hover:bg-primary/10" 
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Button
                variant="default"
                onClick={() => scrollToSection("como-ajudar")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Doe Agora
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${
                isScrolled || theme === 'dark'
                  ? "text-primary hover:bg-primary/10" 
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={isScrolled || theme === 'dark' ? "text-foreground" : "text-white"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border mt-2 rounded-b-xl shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 transition-colors text-foreground hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 mt-4">
              <Button
                variant="default"
                onClick={() => scrollToSection("como-ajudar")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Doe Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
