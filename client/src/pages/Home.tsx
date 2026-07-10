import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import AnimatedGallery from "@/components/sections/AnimatedGallery";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f]">
      <Header />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <AnimatedGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
