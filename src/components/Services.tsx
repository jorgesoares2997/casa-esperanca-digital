import pregnantImage from "@/assets/pregnant-support.jpg";
import schoolImage from "@/assets/school-support.jpg";
import nutritionImage from "@/assets/nutrition.jpg";
import legalImage from "@/assets/legal-aid.jpg";
import { Heart, GraduationCap, Scale, Apple } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Apoio a Mulheres Grávidas",
      description: "Acompanhamento completo durante a gestação, oferecendo suporte emocional, orientação e recursos necessários para um período seguro e acolhedor.",
      image: pregnantImage,
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Reforço Escolar",
      description: "Educação de qualidade para crianças e adolescentes da comunidade de Prazeres, com foco no desenvolvimento integral e no futuro promissor.",
      image: schoolImage,
      color: "info"
    },
    {
      icon: Scale,
      title: "Assistência Jurídica",
      description: "Orientação legal gratuita para pessoas em situação de vulnerabilidade, garantindo acesso à justiça e defesa de direitos fundamentais.",
      image: legalImage,
      color: "primary"
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Acompanhamento nutricional e educação alimentar para promover saúde e bem-estar em todas as fases da vida.",
      image: nutritionImage,
      color: "secondary"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos suporte integral com amor e dedicação, transformando vidas através de serviços essenciais 
            para o bem-estar da comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 w-14 h-14 bg-${service.color}/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-${service.color}/20`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-warm rounded-2xl p-8 md:p-12 text-center text-white shadow-elevated animate-fade-in">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Suporte para Pessoas em Postos de Saúde
          </h3>
          <p className="text-lg leading-relaxed">
            Também oferecemos apoio e orientação para pessoas que aguardam atendimento em postos de saúde, 
            levando conforto, informação e esperança em momentos de necessidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
