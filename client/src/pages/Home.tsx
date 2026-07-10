import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
