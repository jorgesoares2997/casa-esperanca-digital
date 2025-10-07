import { Quote, Users, Heart, BookOpen, Scale } from "lucide-react";

const Impact = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Famílias Atendidas" },
    { icon: Heart, number: "100+", label: "Mulheres Apoiadas" },
    { icon: BookOpen, number: "200+", label: "Crianças em Reforço Escolar" },
    { icon: Scale, number: "150+", label: "Atendimentos Jurídicos" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe Assistida",
      text: "O Instituto Casa foi um verdadeiro presente de Deus na minha vida. Durante minha gravidez, encontrei não apenas apoio material, mas também amor, compreensão e fé. Hoje sou mãe de um bebê saudável e tenho esperança no futuro."
    },
    {
      name: "João Santos",
      role: "Pai de Aluno",
      text: "Meu filho estava com dificuldades na escola e o reforço escolar do Instituto Casa mudou tudo. Hoje ele é um dos melhores alunos da turma. Sou eternamente grato pela dedicação e carinho dos professores."
    },
    {
      name: "Ana Costa",
      role: "Voluntária",
      text: "Fazer parte do Instituto Casa é uma bênção. Ver o impacto real que fazemos na comunidade e nos rostos das pessoas que ajudamos não tem preço. É Cristo em ação através de nós."
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary animate-fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nosso Impacto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary animate-fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Histórias de Transformação
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-soft p-8 hover:shadow-elevated transition-all duration-300 animate-fade-in h-[400px] flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-secondary mb-4 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed italic flex-grow overflow-hidden">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4 mt-6 flex-shrink-0">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
