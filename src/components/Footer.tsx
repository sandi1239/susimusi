import { Heart, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-cream">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Šuši Muši</h3>
            <p className="text-cream/70 mb-6 leading-relaxed">
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
            <nav className="space-y-3">
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
                  className="block text-cream/70 hover:text-cream transition-colors"
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
                <Mail className="w-5 h-5 mt-0.5 text-cream/50" />
                <a
                  href="mailto:jerneja@susimusi.si"
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  jerneja@susimusi.si
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-cream/50" />
                <span className="text-cream/70">
                  Budinci, Prekmurje<br />
                  Slovenija
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
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
