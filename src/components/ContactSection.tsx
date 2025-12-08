import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Ime mora vsebovati vsaj 2 znaka").max(50, "Ime je predolgo"),
  lastName: z.string().trim().min(2, "Priimek mora vsebovati vsaj 2 znaka").max(50, "Priimek je predolg"),
  phone: z.string().trim().min(9, "Vnesite veljavno telefonsko številko").max(20, "Telefonska številka je predolga"),
  email: z.string().trim().email("Vnesite veljaven e-poštni naslov").max(100, "E-pošta je predolga"),
  message: z.string().trim().min(10, "Sporočilo mora vsebovati vsaj 10 znakov").max(1000, "Sporočilo je predolgo"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Sporočilo poslano!",
      description: "Hvala za vaše povpraševanje. Odgovorili vam bomo v najkrajšem možnem času.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-christmas-green bg-christmas-green/10 rounded-full">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Naročite svoj <span className="text-primary">unikat</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Imate idejo za poseben izdelek? Želite naročiti darilo za bližnje? 
              Pošljite mi sporočilo in skupaj bova ustvarila nekaj čarobnega.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-pošta</h3>
                  <a
                    href="mailto:jerneja@susimusi.si"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                  >
                    jerneja@susimusi.si
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Lokacija</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Budinci, Prekmurje, Slovenija
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Ime *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Vaše ime"
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Priimek *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Vaš priimek"
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+386 XX XXX XXX"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-pošta *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas.email@primer.si"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Sporočilo *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opišite, kakšen izdelek si želite..."
                  rows={4}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Pošiljam..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Pošlji povpraševanje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
