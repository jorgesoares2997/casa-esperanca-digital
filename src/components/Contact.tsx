import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, label: "oinstitutocasa@gmail.com" },
    { icon: Phone, label: "(81) 97318-3247" },
    { icon: MapPin, label: "R. Aroazes, 42 — Prazeres, Jaboatão dos Guararapes – PE" },
    { icon: Clock, label: "Terça e quarta, 09h–17h" },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            {t("contact.tag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-10">
            {t("contact.title")}
          </h2>
          <div className="space-y-5 mb-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <info.icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{info.label}</span>
              </div>
            ))}
          </div>
          <a
            href="https://www.instagram.com/oinstitutocasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Instagram className="w-4 h-4" />
            @oinstitutocasa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
