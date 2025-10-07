import { Heart, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = {
    navegacao: [
      { label: "Início", id: "inicio" },
      { label: "Quem Somos", id: "quem-somos" },
      { label: "Nossos Serviços", id: "servicos" },
      { label: "Como Ajudar", id: "como-ajudar" },
    ],
    servicos: [
      { label: "Apoio a Mulheres Grávidas", id: "servicos" },
      { label: "Reforço Escolar", id: "servicos" },
      { label: "Assistência Jurídica", id: "servicos" },
      { label: "Nutrição", id: "servicos" },
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Instituto Casa
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Levando esperança e amor à comunidade de Prazeres através da fé cristã.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@institutocasa.org.br"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.navegacao.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {links.servicos.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Prazeres, Jaboatão dos Guararapes - PE</li>
              <li>(81) 9999-9999</li>
              <li>contato@institutocasa.org.br</li>
              <li className="pt-2">
                <strong className="text-primary-foreground">Horário:</strong><br />
                Seg - Sex: 8h às 17h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Instituto Casa. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-secondary" fill="currentColor" />
            <span>para a comunidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
