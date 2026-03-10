import { Button } from "@/components/ui/button";
import { DollarSign, Package, Users, Handshake, Heart, ArrowRight } from "lucide-react";

const HowToHelp = () => {
  const ways = [
    {
      icon: DollarSign,
      title: "Doação Financeira",
      description: "Sua contribuição financeira ajuda a manter nossos serviços e expandir nosso alcance na comunidade.",
      cta: "Doar Agora",
      color: "secondary",
      whatsappMsg: "Olá, gostaria de fazer uma doação financeira para o Instituto."
    },
    {
      icon: Package,
      title: "Doação de Materiais",
      description: "Alimentos, roupas, itens para bebê e gestantes e produtos de higiene são sempre bem-vindos.",
      cta: "Saiba Mais",
      color: "accent",
      whatsappMsg: "Olá, gostaria de doar materiais para o Instituto Casa."
    },
    {
      icon: Users,
      title: "Voluntariado",
      description: "Doe seu tempo e talentos. Precisamos de professores, advogados, nutricionistas, psicólogos e mais.",
      cta: "Seja Voluntário",
      color: "info",
      whatsappMsg: "Olá, tenho interesse em ser voluntário no Instituto Casa."
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description: "Empresas e organizações podem fazer parcerias conosco para projetos específicos.",
      cta: "Fazer Parceria",
      color: "primary",
      whatsappMsg: "Olá, gostaria de firmar uma parceria com o Instituto."
    }
  ];

  const openWhatsApp = (message: string) => {
    const phoneNumber = "5581992074377";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="como-ajudar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4 text-secondary" fill="currentColor" />
            <span className="text-sm font-medium text-secondary">Faça a Diferença</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Como Ajudar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Existem várias formas de contribuir com nossa missão. Cada gesto, por menor que seja,
            faz uma diferença enorme na vida de quem precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {ways.map((way, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-soft p-8 hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-${way.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <way.icon className={`w-7 h-7 text-${way.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{way.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{way.description}</p>
              <Button
                variant="outline"
                onClick={() => openWhatsApp(way.whatsappMsg)}
                className="group/btn"
              >
                {way.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white shadow-elevated animate-fade-in">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transforme Vidas Hoje
          </h3>
          <p className="text-lg leading-relaxed mb-8">
            "Porque tive fome, e me destes de comer; tive sede, e me destes de beber;
            era forasteiro, e me acolhestes." - Mateus 25:35
          </p>
          <Button
            size="lg"
            onClick={() => openWhatsApp("Olá, gostaria de entrar em contato com o Instituto.")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
