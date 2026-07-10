import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ProductModal from "@/components/ProductModal";
import { products } from "@/lib/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-pink-50 overflow-hidden">
      <Header onProductClick={(id) => setSelectedProduct(id)} />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-amber-50/20 to-rose-100/30" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 leading-tight animate-fade-in">
            Bloom with <span className="font-bold text-rose-600">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-700 mb-12 animate-fade-in-delay">
            Handcrafted floral accessories from Kashmir
          </p>
          <button className="px-10 py-4 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-fade-in-delay-2">
            Explore Collections
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-rose-600"
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
      <section className="py-24 md:py-32 bg-white relative">
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
                className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-pink-100 to-amber-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
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
      <section className="py-24 md:py-32 bg-gradient-to-r from-pink-50 to-amber-50">
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
                Handmade with <span className="font-bold text-rose-600">Love</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Each piece in our collection is carefully handcrafted by artisans in Kashmir, using traditional techniques passed down through generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in creating timeless pieces that celebrate the beauty of handmade craftsmanship and the rich heritage of Kashmir.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
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
            Why Choose <span className="font-bold text-rose-600">Poshsaaz</span>
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
                className="p-8 md:p-10 border-2 border-rose-200 rounded-2xl hover:border-rose-600 hover:shadow-xl transition-all duration-500 group cursor-pointer bg-gradient-to-br from-white to-pink-50/50"
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
      <section className="py-24 md:py-32 bg-gradient-to-r from-rose-600 to-pink-600 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -ml-36 -mb-36" />

        <div className="container px-4 md:px-0 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Ready to <span className="font-bold">Bloom</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Explore our full collection and find the perfect piece for any occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-rose-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Shop Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
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
