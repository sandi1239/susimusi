import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import lineupImage from "@/assets/lineup.jpg";
import collageBg from "@/assets/collage-bg.jpg";

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
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-[center_-10%] bg-no-repeat sm:hidden"
        style={{ backgroundImage: `url(${collageBg})` }}
      />
      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{ backgroundImage: `url(${lineupImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-medium/60 to-wood-dark/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 md:w-20 h-16 md:h-20 rounded-full bg-christmas-red/20 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-christmas-green/20 blur-3xl animate-float delay-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 md:pt-0">
        <div className="animate-fade-up">
          <span className="inline-block px-3 sm:px-4 py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-cream/90 bg-christmas-red/30 backdrop-blur-sm rounded-full border border-cream/20">
            ✨ Unikatni ročni izdelki iz lesa ✨
          </span>
        </div>
        
        <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-cream mb-4 sm:mb-6 text-shadow">
          ŠUŠI MUŠI
        </h1>
        
        <p className="animate-fade-up delay-200 text-lg sm:text-xl md:text-2xl text-cream mb-3 sm:mb-4 font-semibold drop-shadow-md">
          Lesena čarovnija iz srca Prekmurja
        </p>
        
        <p className="animate-fade-up delay-300 text-base sm:text-lg md:text-xl text-cream/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 font-medium drop-shadow-sm">
          Vsak kos je zgodba. Vsak izdelek je unikaten. 
          Ročno izdelane lesene dekoracije, ki vašemu domu dodajo toplino in prazničen čar.
        </p>
        
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            variant="hero"
            onClick={() => scrollToSection("#izdelki")}
            className="w-full sm:w-auto"
          >
            Oglejte si izdelke
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-cream/50 text-cream hover:bg-cream/10 hover:text-cream"
            onClick={() => scrollToSection("#kontakt")}
          >
            Naročite zdaj
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-cream/60" />
      </div>
    </section>
  );
};

export default HeroSection;
