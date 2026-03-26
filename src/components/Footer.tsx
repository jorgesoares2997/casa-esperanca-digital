import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Instituto Casa. {t("footer.rights")}
        </p>
        <p className="text-sm text-muted-foreground">
          CNPJ: 00.000.000/0001-00 · Jaboatão dos Guararapes – PE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
