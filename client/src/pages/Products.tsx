import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";
import ProductModal from "@/components/ProductModal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Hairbands", "Bouquets", "Details", "Packaging"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const cards = containerRef.current?.querySelectorAll(".product-card");
    cards?.forEach((card: any, idx: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: idx * 0.1,
          ease: "back.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.2,
          },
        }
      );
    });
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container px-4 md:px-0">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 md:mb-6 animate-slide-up">
            Our Collections
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light animate-slide-up">
            Explore our complete range of handcrafted floral accessories.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 md:mb-16 flex flex-wrap gap-3 md:gap-4 animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "border border-gray-900 text-gray-900 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card group cursor-pointer"
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-4 md:mb-6 bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300 mb-2">
                {product.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        productId={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
