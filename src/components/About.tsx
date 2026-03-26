const About = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Quem somos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              Uma resposta de fé à vulnerabilidade social.
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              O <strong className="text-foreground">Instituto Casa</strong> nasceu do compromisso cristão 
              de servir ao próximo com dignidade e respeito. Atuamos em Prazeres, Jaboatão dos Guararapes, 
              oferecendo assistência integral a famílias que vivem em situação de vulnerabilidade.
            </p>
            <p>
              Nosso trabalho é guiado por quatro pilares: <strong className="text-foreground">Cuidar, Amar, 
              Servir e Acolher</strong> — valores que se traduzem em ações concretas de transformação social, 
              com transparência e responsabilidade em cada projeto.
            </p>
            <p>
              Acreditamos que investir em pessoas é a forma mais eficiente de transformar uma comunidade. 
              Por isso, cada programa que executamos é pensado para gerar impacto mensurável e duradouro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
