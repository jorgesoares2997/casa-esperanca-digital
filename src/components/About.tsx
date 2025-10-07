import { Heart, Users, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Compaixão",
      description: "Guiados pelos princípios cristãos, acolhemos cada pessoa com amor incondicional."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos laços e construímos uma rede de apoio mútuo e solidariedade."
    },
    {
      icon: BookOpen,
      title: "Esperança e Fé",
      description: "Inspiramos transformação através da fé e do apoio em momentos de vulnerabilidade."
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
              crianças e adolescentes, assistência jurídica, apoio nutricional e muito mais. Cada serviço é 
              oferecido com amor, respeito e dedicação, refletindo nosso compromisso com a dignidade humana.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-soft p-8 text-center hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
