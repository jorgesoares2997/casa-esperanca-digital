import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

type Translations = {
  [key: string]: { pt: string; en: string };
};

const translations: Translations = {
  // Header
  "nav.inicio": { pt: "Início", en: "Home" },
  "nav.quemSomos": { pt: "Quem Somos", en: "About Us" },
  "nav.servicos": { pt: "O que Fazemos", en: "What We Do" },
  "nav.impacto": { pt: "Impacto", en: "Impact" },
  "nav.contato": { pt: "Contato", en: "Contact" },

  // Hero
  "hero.location": { pt: "Prazeres · Jaboatão dos Guararapes · PE", en: "Prazeres · Jaboatão dos Guararapes · PE" },
  "hero.title": { pt: "Onde a esperança encontra quem mais precisa.", en: "Where hope meets those who need it most." },
  "hero.subtitle": { pt: "Assistência social, acolhimento e dignidade para famílias em situação de vulnerabilidade.", en: "Social assistance, shelter and dignity for vulnerable families." },

  // Problem
  "problem.tag": { pt: "A realidade", en: "The reality" },
  "problem.title": { pt: "Na periferia de Jaboatão dos Guararapes, centenas de famílias vivem sem acesso a direitos básicos.", en: "On the outskirts of Jaboatão dos Guararapes, hundreds of families live without access to basic rights." },
  "problem.p1": { pt: "Mulheres grávidas sem acompanhamento. Crianças sem reforço escolar. Famílias sem orientação jurídica ou nutricional. Pessoas que esperam horas em filas de postos de saúde sem qualquer apoio.", en: "Pregnant women without prenatal care. Children without tutoring. Families without legal or nutritional guidance. People waiting hours in health clinic lines without any support." },
  "problem.p2": { pt: "A comunidade de Prazeres carrega desafios estruturais que exigem mais do que políticas públicas exigem presença, escuta e ação concreta.", en: "The Prazeres community faces structural challenges that require more than public policies they require presence, listening and concrete action." },

  // About
  "about.tag": { pt: "Quem somos", en: "About us" },
  "about.title": { pt: "Uma resposta de fé à vulnerabilidade social.", en: "A faith-driven response to social vulnerability." },
  "about.p1": { pt: "O Instituto Casa nasceu do compromisso cristão de servir ao próximo com dignidade e respeito. Atuamos em Prazeres, Jaboatão dos Guararapes, oferecendo assistência integral a famílias que vivem em situação de vulnerabilidade.", en: "Instituto Casa was born from the Christian commitment to serve others with dignity and respect. We operate in Prazeres, Jaboatão dos Guararapes, offering comprehensive assistance to families living in vulnerable situations." },
  "about.p2": { pt: "Nosso trabalho é guiado por quatro pilares: Cuidar, Amar, Servir e Acolher valores que se traduzem em ações concretas de transformação social, com transparência e responsabilidade em cada projeto.", en: "Our work is guided by four pillars: Care, Love, Serve and Welcome values that translate into concrete social transformation actions, with transparency and responsibility in every project." },
  "about.p3": { pt: "Acreditamos que investir em pessoas é a forma mais eficiente de transformar uma comunidade. Por isso, cada programa que executamos é pensado para gerar impacto mensurável e duradouro.", en: "We believe that investing in people is the most efficient way to transform a community. That's why every program we run is designed to generate measurable and lasting impact." },

  // Services
  "services.tag": { pt: "O que fazemos", en: "What we do" },
  "services.title": { pt: "Programas que transformam a realidade da comunidade.", en: "Programs that transform the community's reality." },
  "services.pregnant.title": { pt: "Apoio a Gestantes", en: "Maternal Support" },
  "services.pregnant.desc": { pt: "Acompanhamento integral durante a gestação para mulheres em situação de vulnerabilidade suporte emocional, orientação e recursos para um período seguro.", en: "Comprehensive support during pregnancy for vulnerable women emotional support, guidance and resources for a safe journey." },
  "services.school.title": { pt: "Reforço Escolar", en: "Tutoring" },
  "services.school.desc": { pt: "Educação complementar para crianças e adolescentes da comunidade, com foco no desenvolvimento integral e na construção de um futuro com mais oportunidades.", en: "Supplementary education for community children and teenagers, focused on holistic development and building a future with more opportunities." },
  "services.legal.title": { pt: "Assistência Jurídica", en: "Legal Aid" },
  "services.legal.desc": { pt: "Orientação legal gratuita para garantir acesso à justiça e defesa de direitos fundamentais para quem não pode pagar por um advogado.", en: "Free legal guidance to ensure access to justice and defense of fundamental rights for those who cannot afford a lawyer." },
  "services.nutrition.title": { pt: "Nutrição e Saúde", en: "Nutrition & Health" },
  "services.nutrition.desc": { pt: "Acompanhamento nutricional e educação alimentar para promover saúde e bem-estar em todas as fases da vida.", en: "Nutritional monitoring and food education to promote health and well-being at all stages of life." },
  "services.psychology.title": { pt: "Apoio Psicológico", en: "Psychological Support" },
  "services.psychology.desc": { pt: "Atendimento psicológico e acolhimento emocional para indivíduos e famílias, promovendo saúde mental e fortalecimento de vínculos.", en: "Psychological care and emotional support for individuals and families, promoting mental health and strengthening bonds." },
  "services.physio.title": { pt: "Fisioterapia", en: "Physiotherapy" },
  "services.physio.desc": { pt: "Reabilitação física e promoção de qualidade de vida através de atendimento fisioterapêutico acessível à comunidade.", en: "Physical rehabilitation and quality of life promotion through accessible physiotherapy for the community." },
  "services.nursing.title": { pt: "Enfermagem", en: "Nursing" },
  "services.nursing.desc": { pt: "Pré-natal de baixo risco e cuidados de enfermagem para gestantes e famílias da comunidade.", en: "Low-risk prenatal care and nursing for expectant mothers and community families." },
  "services.comingSoon": { pt: "Em breve", en: "Coming soon" },
  "services.waitingProfessionals": { pt: "Aguardando profissionais", en: "Waiting for professionals" },
  "services.prenatal": { pt: "Pré-natal de baixo risco", en: "Low-risk prenatal" },

  // Impact
  "impact.tag": { pt: "Nosso impacto", en: "Our impact" },
  "impact.title": { pt: "Números que representam vidas transformadas.", en: "Numbers that represent transformed lives." },
  "impact.families": { pt: "Famílias atendidas", en: "Families served" },
  "impact.children": { pt: "Crianças em reforço escolar", en: "Children in tutoring" },
  "impact.women": { pt: "Mulheres apoiadas", en: "Women supported" },
  "impact.legal": { pt: "Atendimentos jurídicos", en: "Legal consultations" },
  "impact.testimonials": { pt: "Depoimentos", en: "Testimonials" },
  "impact.t1.text": { pt: "O Instituto Casa foi um presente de Deus na minha vida. Durante minha gravidez, encontrei não apenas apoio material, mas amor e compreensão. Hoje sou mãe de um bebê saudável e tenho esperança no futuro.", en: "Instituto Casa was a gift from God in my life. During my pregnancy, I found not only material support, but love and understanding. Today I am a mother of a healthy baby and I have hope for the future." },
  "impact.t1.name": { pt: "Maria S.", en: "Maria S." },
  "impact.t1.role": { pt: "Mãe assistida pelo programa", en: "Mother assisted by the program" },
  "impact.t2.text": { pt: "Meu filho estava com dificuldades na escola e o reforço escolar mudou tudo. Hoje ele é um dos melhores alunos da turma. Sou eternamente grato pela dedicação dos professores.", en: "My son was struggling in school and the tutoring changed everything. Today he is one of the best students in his class. I am forever grateful for the teachers' dedication." },
  "impact.t2.name": { pt: "João P.", en: "João P." },
  "impact.t2.role": { pt: "Pai de aluno do reforço escolar", en: "Father of a tutoring student" },
  "impact.t3.text": {
    pt: "Sou Maria Vaniclea, assistente social no Instituto Casa, e sou grata por servir famílias em situação de vulnerabilidade com acolhimento, orientação e escuta. A cada atendimento, renovo meu compromisso com a justiça social, a esperança e o amor ao próximo, com empatia e responsabilidade.",
    en: "I am Maria Vaniclea, a social worker at Instituto Casa, and I am grateful to support vulnerable families with care, guidance, and active listening. With every appointment, I renew my commitment to social justice, hope, and love for others, with empathy and responsibility."
  },
  "impact.t3.name": { pt: "Maria Vaniclea", en: "Maria Vaniclea" },
  "impact.t3.role": { pt: "Assistente social", en: "Social worker" },

  // HowToHelp
  "help.tag": { pt: "Como apoiar", en: "How to help" },
  "help.title": { pt: "Investir em pessoas é a forma mais eficiente de gerar impacto.", en: "Investing in people is the most efficient way to generate impact." },
  "help.subtitle": { pt: "Existem diferentes formas de contribuir com a missão do Instituto Casa. Cada tipo de apoio cumpre um papel essencial na sustentabilidade dos nossos programas.", en: "There are different ways to contribute to Instituto Casa's mission. Each type of support plays an essential role in the sustainability of our programs." },
  "help.partnership.title": { pt: "Parceria institucional", en: "Institutional partnership" },
  "help.partnership.desc": { pt: "Empresas e organizações podem apoiar programas específicos, vincular sua marca a impacto social real e receber relatórios de resultados.", en: "Companies and organizations can support specific programs, link their brand to real social impact and receive results reports." },
  "help.partnership.button": { pt: "Quero ser parceiro", en: "I want to partner" },
  "help.donation.title": { pt: "Doação recorrente", en: "Recurring donation" },
  "help.donation.desc": { pt: "Torne-se um mantenedor com contribuições mensais. Cada real investido é direcionado com transparência para os programas que transformam vidas.", en: "Become a supporter with monthly contributions. Every real invested is directed with transparency to programs that transform lives." },
  "help.donation.button": { pt: "Quero doar todo mês", en: "I want to donate monthly" },
  "help.material.title": { pt: "Doação de materiais", en: "Material donation" },
  "help.material.desc": { pt: "Alimentos, roupas, itens para gestantes e produtos de higiene são sempre necessários e fazem diferença imediata na vida das famílias.", en: "Food, clothing, items for expectant mothers and hygiene products are always needed and make an immediate difference in families' lives." },
  "help.material.button": { pt: "Quero doar materiais", en: "I want to donate materials" },
  "help.volunteer.title": { pt: "Voluntariado", en: "Volunteering" },
  "help.volunteer.desc": { pt: "Professores, advogados, nutricionistas e psicólogos podem doar tempo e conhecimento para fortalecer nossos programas.", en: "Teachers, lawyers, nutritionists and psychologists can donate time and knowledge to strengthen our programs." },
  "help.volunteer.button": { pt: "Quero me voluntariar", en: "I want to volunteer" },

  // FinalCTA
  "cta.title": { pt: "Você pode transformar a realidade de uma comunidade inteira.", en: "You can transform the reality of an entire community." },
  "cta.subtitle": { pt: "Converse com nossa equipe e descubra como sua contribuição financeira, material ou profissional pode gerar impacto mensurável.", en: "Talk to our team and discover how your contribution financial, material or professional can generate measurable impact." },
  "cta.button": { pt: "Fale com o Instituto Casa", en: "Talk to Instituto Casa" },

  // Contact
  "contact.tag": { pt: "Contato", en: "Contact" },
  "contact.title": { pt: "Estamos abertos ao diálogo.", en: "We are open to dialogue." },

  // Footer
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => null,
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
