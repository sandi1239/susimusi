import { Heart, Leaf, Star } from "lucide-react";
import logSnowmenImage from "@/assets/log-snowmen.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Z ljubeznijo",
      description: "Vsak izdelek je narejen z ljubeznijo in pozornostjo do detajlov.",
    },
    {
      icon: Leaf,
      title: "Naravni materiali",
      description: "Uporabljamo samo kakovosten les in okolju prijazne barve.",
    },
    {
      icon: Star,
      title: "Unikatnost",
      description: "Nobeden izdelek ni enak - vsak je edinstven in posebej za vas.",
    },
  ];

  return (
    <section id="o-nas" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left opacity-0 order-2 lg:order-1 hidden lg:block" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src={logSnowmenImage}
                alt="Jerneja Lainšček z družino in lesenimi izdelki"
                className="w-full h-auto max-h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/40 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 md:w-24 h-16 md:h-24 border-t-4 border-l-4 border-christmas-red rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 md:w-24 h-16 md:h-24 border-b-4 border-r-4 border-christmas-green rounded-br-2xl" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right opacity-0 order-1 lg:order-2" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-christmas-green bg-christmas-green/10 rounded-full">
              O nas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Kdo stoji za{" "}
              <span className="text-primary">ŠUŠI MUŠI</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Sem <strong>Jerneja Lainšček</strong> iz majhne vasice Budinci v srcu Prekmurja. 
              Z osebno dopolnilno dejavnostjo ustvarjam unikatne lesene izdelke, 
              ki prinašajo toplino in veselje v vsak dom.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Moja strast do lesa in ustvarjanja se je začela pred leti, 
              ko sem prvič vzela v roke kos lesa in ga preoblikovala v nekaj čarobnega. 
              Danes vsak izdelek nastane z ljubeznijo, potrpežljivostjo in s pozornostjo do najmanjših detajlov.
            </p>

            {/* Mobile Image - above features */}
            <div className="relative block lg:hidden mb-6">
              <div className="rounded-xl overflow-hidden shadow-warm">
                <img
                  src={logSnowmenImage}
                  alt="Leseni izdelki ŠUŠI MUŠI"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-christmas-red rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-christmas-green rounded-br-2xl" />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 hover:shadow-warm hover:-translate-y-1"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
