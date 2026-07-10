import HeroSection from "@/components/sections/HeroSection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import AnimatedGallery from "@/components/sections/AnimatedGallery";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <AnimatedGallery />
      <CTASection />
      <Footer />
    </div>
  );
}
