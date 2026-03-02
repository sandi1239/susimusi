import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import easterFullCollectionImage from "@/assets/easter-full-collection.jpg";

const ClosingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${easterFullCollectionImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-wood-dark/65" />

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cream/20 mb-4 sm:mb-6 animate-float">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-cream fill-cream/50" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-cream mb-4 sm:mb-6 px-2">
            Naj vaš dom zadiši po lesu in toplini
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-cream/80 mb-8 sm:mb-10 leading-relaxed px-4">
            Vsak kos lesa ima svojo zgodbo. Dovolite mi, da jo preoblikujem 
            v unikaten izdelek, ki bo krasil vaš dom še leta in leta.
          </p>
          
          <Button
            variant="hero"
            onClick={scrollToContact}
            className="bg-cream text-wood-dark hover:bg-cream/90 w-full sm:w-auto"
          >
            Začnite svojo zgodbo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
