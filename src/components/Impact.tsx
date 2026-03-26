const Impact = () => {
  const stats = [
    { number: "500+", label: "Famílias atendidas" },
    { number: "200+", label: "Crianças em reforço escolar" },
    { number: "100+", label: "Mulheres apoiadas" },
    { number: "150+", label: "Atendimentos jurídicos" },
  ];

  const testimonials = [
    {
      text: "O Instituto Casa foi um presente de Deus na minha vida. Durante minha gravidez, encontrei não apenas apoio material, mas amor e compreensão. Hoje sou mãe de um bebê saudável e tenho esperança no futuro.",
      name: "Maria S.",
      role: "Mãe assistida pelo programa",
    },
    {
      text: "Meu filho estava com dificuldades na escola e o reforço escolar mudou tudo. Hoje ele é um dos melhores alunos da turma. Sou eternamente grato pela dedicação dos professores.",
      name: "João P.",
      role: "Pai de aluno do reforço escolar",
    },
  ];

  return (
    <section id="impacto" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Nosso impacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Números que representam vidas transformadas.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-10">
            Depoimentos
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, index) => (
              <blockquote key={index} className="space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic">
                  "{t.text}"
                </p>
                <footer>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
