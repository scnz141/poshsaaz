import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ProductModal from "@/components/ProductModal";
import { products } from "@/lib/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header onProductClick={(id) => setSelectedProduct(id)} />

      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero_light_premium_d4e2f1a9.png"
            alt="Poshsaaz Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4 md:mb-6">
            Bloom with Elegance
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8">
            Handcrafted floral accessories from Kashmir
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
            Explore Collections
          </button>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">
            Our Collections
          </h2>
          <p className="text-gray-600 text-lg mb-12 md:mb-16 max-w-2xl">
            Discover our curated selection of handcrafted floral accessories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
                Handmade with Love
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Each piece in our collection is carefully handcrafted by artisans in Kashmir, using traditional techniques passed down through generations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in creating timeless pieces that celebrate the beauty of handmade craftsmanship and the rich heritage of Kashmir.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <img
                src="/manus-storage/collection_packaging_light.png"
                alt="Handmade Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-12 md:mb-16">
            Why Choose Poshsaaz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artisan Crafted",
                description: "Each piece is handmade by skilled artisans using traditional techniques",
              },
              {
                title: "Premium Quality",
                description: "We use only the finest materials to ensure lasting beauty",
              },
              {
                title: "Sustainable",
                description: "Eco-friendly practices in every step of our creation process",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Ready to Bloom?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our full collection and find the perfect piece for any occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
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
