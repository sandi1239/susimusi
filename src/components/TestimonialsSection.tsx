import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marija K.",
    location: "Ljubljana",
    rating: 5,
    text: "Naročila sem lesene škratke za pred vhod in so absolutno čudoviti! Vsi sosedje sprašujejo, kje sem jih dobila. Jerneja je res umetnica!",
  },
  {
    id: 2,
    name: "Peter in Ana",
    location: "Maribor",
    rating: 5,
    text: "Za hčerkin rojstni dan smo naročili personalizirano tablo. Izdelek je presegel vsa pričakovanja - tako lep in kvaliteten. Toplo priporočamo!",
  },
  {
    id: 3,
    name: "Tanja M.",
    location: "Murska Sobota",
    rating: 5,
    text: "Že drugo leto zapored naročam božične dekoracije pri Jerneji. Vedno me preseneti z novimi idejami in izjemno kakovostjo. Najboljša izbira!",
  },
  {
    id: 4,
    name: "Janez B.",
    location: "Celje",
    rating: 5,
    text: "Iskal sem unikaten dar za ženo in našel Šuši Muši. Leseni snežaki so sedaj naš najljubši del praznične dekoracije. Hvala za čudovit izdelek!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="mnenja" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-christmas-red bg-christmas-red/10 rounded-full">
            Mnenja strank
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Kaj pravijo naše <span className="text-primary">stranke</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Veseli nas, da naši izdelki prinašajo veselje v domove po vsej Sloveniji.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-warm transition-all duration-500 hover:shadow-warm-lg hover:-translate-y-1 animate-fade-up opacity-0"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary/10">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 mb-4 sm:mb-6 leading-relaxed relative z-10 text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-heading font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
