import pregnantImage from "@/assets/pregnant-support.jpg";
import schoolImage from "@/assets/school-support.jpg";
import nutritionImage from "@/assets/nutrition.jpg";
import legalImage from "@/assets/legal-aid.jpg";

const Services = () => {
  const services = [
    {
      title: "Apoio a Gestantes",
      description:
        "Acompanhamento integral durante a gestação para mulheres em situação de vulnerabilidade — suporte emocional, orientação e recursos para um período seguro.",
      image: pregnantImage,
    },
    {
      title: "Reforço Escolar",
      description:
        "Educação complementar para crianças e adolescentes da comunidade, com foco no desenvolvimento integral e na construção de um futuro com mais oportunidades.",
      image: schoolImage,
    },
    {
      title: "Assistência Jurídica",
      description:
        "Orientação legal gratuita para garantir acesso à justiça e defesa de direitos fundamentais para quem não pode pagar por um advogado.",
      image: legalImage,
    },
    {
      title: "Nutrição e Saúde",
      description:
        "Acompanhamento nutricional e educação alimentar para promover saúde e bem-estar em todas as fases da vida, além de apoio a quem aguarda atendimento em postos de saúde.",
      image: nutritionImage,
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            O que fazemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Programas que transformam a realidade da comunidade.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
