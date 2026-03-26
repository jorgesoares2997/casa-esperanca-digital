import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5581992074377";
    const message = encodeURIComponent(
      "Olá, gostaria de saber mais sobre como apoiar o Instituto Casa."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
            Sua empresa pode transformar a realidade de uma comunidade inteira.
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
            Converse com nossa equipe e descubra como sua contribuição — financeira, 
            material ou profissional — pode gerar impacto mensurável.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-md text-base hover:opacity-90 transition-opacity duration-200 group"
          >
            Fale com o Instituto Casa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
