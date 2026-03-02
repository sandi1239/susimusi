import { useState } from "react";
import { X } from "lucide-react";

// Zimska kolekcija
import gnomesImage from "@/assets/gnomes.jpg";
import santaSignImage from "@/assets/santa-sign.jpg";
import snowmanReindeerImage from "@/assets/snowman-reindeer.jpg";
import adventCandlesImage from "@/assets/advent-candles.jpg";
import grinchTreesImage from "@/assets/grinch-trees.jpg";
import ornamentsImage from "@/assets/ornaments.jpg";
import snowmanCoupleImage from "@/assets/snowman-couple.jpg";
import lineupImage from "@/assets/lineup.jpg";

// Spomladanska kolekcija
import easterLineupImage from "@/assets/easter-lineup.jpg";
import easterBunniesBasketsImage from "@/assets/easter-bunnies-baskets.jpg";
import easterCoupleImage from "@/assets/easter-couple.jpg";
import easterScarvesImage from "@/assets/easter-scarves.jpg";
import easterEggBunniesImage from "@/assets/easter-egg-bunnies.jpg";
import easterPolkaDotImage from "@/assets/easter-polka-dot.jpg";
import easterCoolBunniesImage from "@/assets/easter-cool-bunnies.jpg";
import easterBunnyChickImage from "@/assets/easter-bunny-chick.jpg";
import easterFullCollectionImage from "@/assets/easter-full-collection.jpg";
import easterBunnyChick2Image from "@/assets/easter-bunny-chick2.jpg";

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type Collection = {
  key: string;
  label: string;
  products: Product[];
};

const collections: Collection[] = [
  {
    key: "spring",
    label: "🐣 Spomladanska",
    products: [
      { id: 101, image: easterLineupImage, title: "Velikonočna kolekcija", description: "Vesela druščina zajčkov in piščančkov z jajčki" },
      { id: 102, image: easterBunniesBasketsImage, title: "Zajčka s košaricama", description: "Par zajčkov s klobukom in košarico pisanih jajčk" },
      { id: 103, image: easterCoupleImage, title: "Elegantni zajčji par", description: "Zajčka v elegantnih oblačilih z rumenim klobukom" },
      { id: 104, image: easterScarvesImage, title: "Zajčka z jajčki", description: "Dva zajčka s košarico in pisanim jajčkom" },
      { id: 105, image: easterEggBunniesImage, title: "Zajčka z velikim jajčkom", description: "Prikupna zajčka ob zelenem pisanem jajčku" },
      { id: 106, image: easterPolkaDotImage, title: "Pikčasta zajčka", description: "Zajčka v pikčastih oblačilih z rumenim jajčkom" },
      { id: 107, image: easterCoolBunniesImage, title: "Kul zajčka", description: "Zajček v avtomobilu in zajček z modnimi supergi" },
      { id: 108, image: easterBunnyChickImage, title: "Zajček in piščanček", description: "Zajček z očali in piščanček s sončnimi očali" },
      { id: 109, image: easterFullCollectionImage, title: "Celotna spomladanska kolekcija", description: "Vsi spomladanski leseni unikatni izdelki skupaj" },
      { id: 110, image: easterBunnyChick2Image, title: "Zajček, račka in piščanček", description: "Ljubka kombinacija zajčka, račke in piščančka v jajčku" },
    ],
  },
  {
    key: "winter",
    label: "❄️ Zimska",
    products: [
      { id: 1, image: gnomesImage, title: "Leseni škratki", description: "Prikupni škratki z darili v različnih velikostih" },
      { id: 2, image: santaSignImage, title: "Božiček s tablico", description: "Vesele praznike - dekorativna tabla z Božičkom in jelenom" },
      { id: 3, image: snowmanReindeerImage, title: "Snežak in jelenček", description: "Ljubka zimska dekoracija za pred hišo ali v vrt" },
      { id: 4, image: adventCandlesImage, title: "Adventne sveče", description: "Ročno poslikane lesene adventne sveče in venčki" },
      { id: 5, image: grinchTreesImage, title: "Smrečice in Grinch", description: "Moderne lesene smrečice in Grinch dekoracije" },
      { id: 6, image: ornamentsImage, title: "Lesene bunkice", description: "Pisane lesene bunkice z okraski in pentljami" },
      { id: 7, image: snowmanCoupleImage, title: "Snežaka", description: "Par snežakov - popolna zimska dekoracija" },
      { id: 8, image: lineupImage, title: "Praznična kolekcija", description: "Celotna kolekcija prazničnih lesenih figur" },
    ],
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  const [activeCollection, setActiveCollection] = useState("spring");

  const currentCollection = collections.find((c) => c.key === activeCollection)!;

  return (
    <section id="izdelki" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-christmas-red bg-christmas-red/10 rounded-full">
            Naši izdelki
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Galerija <span className="text-primary">unikatov</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Vsak izdelek je ročno izdelan in unikaten. Oglejte si nekaj naših 
            najljubših kreacij, ki so že polepšale domove po vsej Sloveniji.
          </p>
        </div>

        {/* Collection Tabs */}
        <div className="flex justify-center gap-3 mb-8 md:mb-12">
          {collections.map((collection) => (
            <button
              key={collection.key}
              onClick={() => setActiveCollection(collection.key)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeCollection === collection.key
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border"
              }`}
            >
              {collection.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {currentCollection.products.map((product, index) => (
            <div
              key={product.id}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-warm hover:shadow-warm-lg transition-all duration-500 animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
              onClick={() => setSelectedImage(product)}
            >
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-sm sm:text-base md:text-lg font-heading font-semibold text-cream mb-0.5 sm:mb-1">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/80 hidden sm:block">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Želite unikaten izdelek po vaših željah?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Pošljite povpraševanje →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wood-dark/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Zapri"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <div
            className="relative max-w-4xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg shadow-warm-lg"
            />
            <div className="mt-3 sm:mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-cream">
                {selectedImage.title}
              </h3>
              <p className="text-cream/70 text-sm sm:text-base">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
