import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#domov", label: "Domov" },
    { href: "#o-nas", label: "O nas" },
    { href: "#izdelki", label: "Izdelki" },
    { href: "#mnenja", label: "Mnenja" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm py-2"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#domov"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#domov");
            }}
            className="flex items-center gap-2 md:gap-3 transition-transform hover:scale-105"
          >
            <div className={`transition-all duration-300 ${
                isScrolled ? "w-10 h-10 md:w-11 md:h-11" : "w-11 h-11 md:w-12 md:h-12"
              } rounded-full overflow-hidden bg-background shadow-warm`}>
              <img 
                src={logoImage} 
                alt="Šuši Muši logo" 
                className="w-full h-full object-cover"
                style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
              />
            </div>
            <span className={`font-heading font-bold text-primary transition-all duration-300 ${
              isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            }`}>
              Šuši Muši
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zapri meni" : "Odpri meni"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-4 bg-background/95 backdrop-blur-md rounded-xl p-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
