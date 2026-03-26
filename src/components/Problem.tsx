const Problem = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            A realidade
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8 text-balance">
            Na periferia de Jaboatão dos Guararapes, centenas de famílias vivem sem acesso a direitos básicos.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Mulheres grávidas sem acompanhamento. Crianças sem reforço escolar. 
              Famílias sem orientação jurídica ou nutricional. Pessoas que esperam 
              horas em filas de postos de saúde sem qualquer apoio.
            </p>
            <p>
              A comunidade de Prazeres carrega desafios estruturais que exigem mais 
              do que políticas públicas — exigem presença, escuta e ação concreta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
