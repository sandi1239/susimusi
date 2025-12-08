import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const ClosingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-wood-medium">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/20 mb-6 animate-float">
            <Heart className="w-8 h-8 text-cream fill-cream/50" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-cream mb-6">
            Naj vaš dom zadiši po lesu in toplini
          </h2>
          
          <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed">
            Vsak kos lesa ima svojo zgodbo. Dovolite mi, da jo preoblikujem 
            v unikaten izdelek, ki bo krasil vaš dom še leta in leta.
          </p>
          
          <Button
            variant="hero"
            onClick={scrollToContact}
            className="bg-cream text-wood-dark hover:bg-cream/90"
          >
            Začnite svojo zgodbo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
