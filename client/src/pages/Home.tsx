import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import AnimatedGallery from "@/components/sections/AnimatedGallery";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import ProductModal from "@/components/ProductModal";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header onProductClick={(id) => setSelectedProduct(id)} />
      <HeroSection />
      <PortfolioGrid onProductClick={(id) => setSelectedProduct(id)} />
      <AnimatedGallery />
      <CTASection />
      <Footer />
      <ProductModal
        productId={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
