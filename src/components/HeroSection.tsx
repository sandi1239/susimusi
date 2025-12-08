import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import lineupImage from "@/assets/lineup.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lineupImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-medium/60 to-wood-dark/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-christmas-red/20 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-christmas-green/20 blur-3xl animate-float delay-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-cream/90 bg-christmas-red/30 backdrop-blur-sm rounded-full border border-cream/20">
            ✨ Unikatni ročni izdelki iz lesa ✨
          </span>
        </div>
        
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-cream mb-6 text-shadow">
          Šuši Muši
        </h1>
        
        <p className="animate-fade-up delay-200 text-xl md:text-2xl text-cream/90 mb-4 font-light">
          Lesena čarovnija iz srca Prekmurja
        </p>
        
        <p className="animate-fade-up delay-300 text-lg md:text-xl text-cream/70 mb-10 max-w-2xl mx-auto">
          Vsak kos je zgodba. Vsak izdelek je unikaten. 
          Ročno izdelane lesene dekoracije, ki vašemu domu dodajo toplino in prazničen čar.
        </p>
        
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            onClick={() => scrollToSection("#izdelki")}
          >
            Oglejte si izdelke
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-cream/50 text-cream hover:bg-cream/10 hover:text-cream"
            onClick={() => scrollToSection("#kontakt")}
          >
            Naročite zdaj
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </div>
    </section>
  );
};

export default HeroSection;
