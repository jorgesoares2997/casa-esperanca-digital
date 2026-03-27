import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDivider, BRAND } from "@/components/BrandPatterns";
import logoIcon from "@/assets/logo-circular.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-border bg-background overflow-hidden">
      {/* Subtle brand chevron accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <ChevronDivider color={BRAND.orange} />
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="Instituto Casa" className="w-8 h-8 " />
          <p className="text-sm text-muted-foreground">
            © {currentYear} Instituto Casa. {t("footer.rights")}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          CNPJ: 60.785.922/0001-83 · Jaboatão dos Guararapes – PE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
