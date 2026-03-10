import { Heart, Users, BookOpen } from "lucide-react";

const About = () => {
  const pilares = [
    {
      icon: Heart,
      title: "Cuidar",
      description: "Demonstrar atenção, zelo e comprometimento com as pessoas e as causas abraçadas pelo Instituto."
    },
    {
      icon: Heart,
      title: "Amar",
      description: "Agir com empatia, solidariedade e compaixão, valorizando o ser humano em sua totalidade."
    },
    {
      icon: Users,
      title: "Servir",
      description: "Colocar-se à disposição da sociedade e da comunidade, promovendo ações que tragam impacto positivo e transformação social."
    },
    {
      icon: Users,
      title: "Acolher",
      description: "Promover um ambiente inclusivo e receptivo, onde todos se sintam valorizados e respeitados."
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Quem Somos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Instituto Casa nasceu do desejo de levar esperança e dignidade às famílias de Prazeres, 
            Jaboatão dos Guararapes. Fundado sobre valores cristãos, dedicamos nosso trabalho a 
            acolher, apoiar e transformar vidas através do amor de Cristo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4 text-primary">Nossa História</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nascemos do coração de uma comunidade que acredita no poder transformador da fé e da solidariedade. 
              Inspirados pelos ensinamentos de Cristo, decidimos criar um espaço onde cada pessoa, independentemente 
              de sua situação, pudesse encontrar acolhimento, apoio e esperança para um futuro melhor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, atendemos mulheres grávidas em situação de vulnerabilidade, oferecemos reforço escolar para 
              crianças e adolescentes, assistência jurídica, apoio psicológico e muito mais. Cada serviço é 
              oferecido com amor, respeito e dedicação, refletindo nosso compromisso com a dignidade humana.
            </p>
          </div>
        </div>

        <div className="text-center mb-10 animate-fade-in">
          <h3 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nossos Pilares
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-soft p-8 text-center hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <pilar.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">{pilar.title}</h4>
              <p className="text-muted-foreground">{pilar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
