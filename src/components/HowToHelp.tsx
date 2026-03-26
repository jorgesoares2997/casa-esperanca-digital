const HowToHelp = () => {
  const ways = [
    {
      title: "Parceria institucional",
      description:
        "Empresas e organizações podem apoiar programas específicos, vincular sua marca a impacto social real e receber relatórios de resultados.",
    },
    {
      title: "Doação recorrente",
      description:
        "Torne-se um mantenedor com contribuições mensais. Cada real investido é direcionado com transparência para os programas que transformam vidas.",
    },
    {
      title: "Doação de materiais",
      description:
        "Alimentos, roupas, itens para gestantes e produtos de higiene são sempre necessários e fazem diferença imediata na vida das famílias.",
    },
    {
      title: "Voluntariado",
      description:
        "Professores, advogados, nutricionistas e psicólogos podem doar tempo e conhecimento para fortalecer nossos programas.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Como apoiar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Investir em pessoas é a forma mais eficiente de gerar impacto.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Existem diferentes formas de contribuir com a missão do Instituto Casa. 
            Cada tipo de apoio cumpre um papel essencial na sustentabilidade dos nossos programas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
          {ways.map((way, index) => (
            <div key={index} className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {way.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {way.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
