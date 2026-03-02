import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import Sunbeams from "@/components/Sunbeams";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Sunbeams />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <TestimonialsSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
