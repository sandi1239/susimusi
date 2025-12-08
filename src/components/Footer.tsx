import { Heart, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-cream">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Šuši Muši logo" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-heading font-bold">Šuši Muši</h3>
            </div>
            <p className="text-cream/70 mb-6 leading-relaxed text-sm md:text-base">
              Unikatni ročni izdelki iz lesa, ki vašemu domu dodajo 
              toplino in prazničen čar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Hitre povezave</h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {[
                { href: "#domov", label: "Domov" },
                { href: "#o-nas", label: "O nas" },
                { href: "#izdelki", label: "Izdelki" },
                { href: "#mnenja", label: "Mnenja" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/70 hover:text-cream transition-colors text-sm md:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-cream/50 flex-shrink-0" />
                <a
                  href="mailto:jerneja@susimusi.si"
                  className="text-cream/70 hover:text-cream transition-colors text-sm md:text-base break-all"
                >
                  jerneja@susimusi.si
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-cream/50 flex-shrink-0" />
                <span className="text-cream/70 text-sm md:text-base">
                  Budinci, Prekmurje<br />
                  Slovenija
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cream/50">
            <p>
              © {currentYear} Šuši Muši. Vse pravice pridržane.
            </p>
            <p className="flex items-center gap-1">
              Izdelano z <Heart className="w-4 h-4 text-christmas-red fill-christmas-red" /> v Sloveniji
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
