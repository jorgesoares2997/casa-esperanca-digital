import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import HowToHelp from "@/components/HowToHelp";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorGlow />
      <LanguageToggle />
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <Services />
        <Impact />
        <HowToHelp />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
