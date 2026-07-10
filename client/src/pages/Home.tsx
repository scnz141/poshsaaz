import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ProductModal from "@/components/ProductModal";
import { products } from "@/lib/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero elements on load
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll(".hero-animate");
      heroElements.forEach((el, idx) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(30px)";
        setTimeout(() => {
          (el as HTMLElement).style.transition = "all 1.2s cubic-bezier(0.23, 1, 0.32, 1)";
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "translateY(0)";
        }, idx * 200);
      });
    }

    // Collection cards scroll animation
    if (collectionsRef.current) {
      const cards = collectionsRef.current.querySelectorAll(".collection-card");
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, idx * 100);
          }
        });
      }, observerOptions);

      cards.forEach((card) => {
        (card as HTMLElement).style.opacity = "0";
        (card as HTMLElement).style.transform = "translateY(50px)";
        (card as HTMLElement).style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
        observer.observe(card);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header onProductClick={(id) => setSelectedProduct(id)} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="/manus-storage/hero_light_premium_d4e2f1a9.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="hero-animate text-6xl md:text-8xl font-light mb-6 leading-tight">
            Bloom with <span className="font-bold">Elegance</span>
          </h1>
          <p className="hero-animate text-xl md:text-2xl font-light mb-12 text-gray-300">
            Handcrafted floral accessories from Kashmir
          </p>
          <button className="hero-animate px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Explore Collections
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section ref={collectionsRef} className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-0">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover our curated selection of handcrafted floral accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className="collection-card group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
                Handmade with <span className="font-bold">Love</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Each piece in our collection is carefully handcrafted by artisans in Kashmir, using traditional techniques passed down through generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in creating timeless pieces that celebrate the beauty of handmade craftsmanship and the rich heritage of Kashmir.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/collection_packaging_light.png"
                alt="Handmade Process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-0">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16">
            Why Choose <span className="font-bold">Poshsaaz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artisan Crafted",
                description:
                  "Each piece is handmade by skilled artisans using traditional techniques",
                icon: "✨",
              },
              {
                title: "Premium Quality",
                description:
                  "We use only the finest materials to ensure lasting beauty",
                icon: "💎",
              },
              {
                title: "Sustainable",
                description:
                  "Eco-friendly practices in every step of our creation process",
                icon: "🌿",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 md:p-10 border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-0 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Ready to <span className="font-bold">Bloom</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore our full collection and find the perfect piece for any occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Shop Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ProductModal
        productId={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
