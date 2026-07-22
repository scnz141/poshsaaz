import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const PRODUCT_DATA = [
  {
    id: "hairband-pink",
    title: "Rose Bloom Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹499",
    images: [
      "https://cdn.manus.im/manus-storage/collection_hairbands_light_b336896c.png",
      "https://cdn.manus.im/manus-storage/hairband_pink_closeup_8db1a35f.png",
      "https://cdn.manus.im/manus-storage/hairband_purple_variant_813bef00.png",
    ],
    description: "Vibrant pink floral rosettes with pearl accents on a navy velvet band. Lightweight and comfortable for all-day wear.",
  },
  {
    id: "hairband-purple",
    title: "Lavender Dreams Hairband",
    category: "Hairbands",
    badge: "Made to Order",
    price: "Starting ₹549",
    images: [
      "https://cdn.manus.im/manus-storage/hairband_purple_variant_813bef00.png",
      "https://cdn.manus.im/manus-storage/hairband_pink_closeup_8db1a35f.png",
      "https://cdn.manus.im/manus-storage/collection_hairbands_light_b336896c.png",
    ],
    description: "Soft lavender purple florals with delicate pearl centers. A dreamy accessory for weddings and special occasions.",
  },
  {
    id: "bouquet-tulips",
    title: "Tulip Garden Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹799",
    images: [
      "https://cdn.manus.im/manus-storage/collection_bouquets_light_358442a2.png",
      "https://cdn.manus.im/manus-storage/bouquet_tulips_closeup_6ff84abe.png",
      "https://cdn.manus.im/manus-storage/collection_packaging_light_a5de0a94.png",
    ],
    description: "Everlasting tulip bouquet in pink, lavender, and white. Wrapped in kraft paper with satin ribbon — blooms that never wilt.",
  },
  {
    id: "bouquet-mixed",
    title: "Mixed Floral Bouquet",
    category: "Bouquets",
    badge: "Custom Order",
    price: "Starting ₹899",
    images: [
      "https://cdn.manus.im/manus-storage/bouquet_tulips_closeup_6ff84abe.png",
      "https://cdn.manus.im/manus-storage/collection_bouquets_light_358442a2.png",
      "https://cdn.manus.im/manus-storage/gift_box_open_e041f661.png",
    ],
    description: "A curated mix of handcrafted flowers in warm pastels. Perfect as home decor or a thoughtful, lasting gift.",
  },
  {
    id: "clips-set",
    title: "Floral Clips Collection",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹349",
    images: [
      "https://cdn.manus.im/manus-storage/clips_collection_7e386f6d.png",
      "https://cdn.manus.im/manus-storage/collection_details_light_249aad21.png",
      "https://cdn.manus.im/manus-storage/hairband_pink_closeup_8db1a35f.png",
    ],
    description: "Set of delicate hair clips with miniature floral arrangements. Gold-tone hardware with pastel petals and pearl centers.",
  },
  {
    id: "clips-comb",
    title: "Pearl Blossom Comb",
    category: "Clips & Combs",
    badge: "Made to Order",
    price: "Starting ₹399",
    images: [
      "https://cdn.manus.im/manus-storage/collection_details_light_249aad21.png",
      "https://cdn.manus.im/manus-storage/clips_collection_7e386f6d.png",
      "https://cdn.manus.im/manus-storage/hero_light_premium_1c63cd25.png",
    ],
    description: "Decorative hair comb with cascading floral design. Gold leaves and pearl accents create timeless bridal elegance.",
  },
  {
    id: "gift-premium",
    title: "Premium Gift Box",
    category: "Gift Sets",
    badge: "Custom Order",
    price: "Starting ₹1,299",
    images: [
      "https://cdn.manus.im/manus-storage/gift_box_open_e041f661.png",
      "https://cdn.manus.im/manus-storage/collection_packaging_light_a5de0a94.png",
      "https://cdn.manus.im/manus-storage/collection_bouquets_light_358442a2.png",
    ],
    description: "Curated gift set with hairband, clips, and mini bouquet in elegant packaging. Ready to delight on any occasion.",
  },
  {
    id: "gift-bridal",
    title: "Bridal Collection Box",
    category: "Gift Sets",
    badge: "Custom Order",
    price: "Starting ₹1,599",
    images: [
      "https://cdn.manus.im/manus-storage/collection_packaging_light_a5de0a94.png",
      "https://cdn.manus.im/manus-storage/gift_box_open_e041f661.png",
      "https://cdn.manus.im/manus-storage/clips_collection_7e386f6d.png",
    ],
    description: "Complete bridal accessory set — tiara hairband, decorative combs, and matching clips. Custom colors available.",
  },
];

const CATEGORIES = ["All", "Hairbands", "Bouquets", "Clips & Combs", "Gift Sets"];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductLightbox({ product, onClose }: { product: typeof PRODUCT_DATA[0]; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#faf8f5] max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Carousel */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-[#f5f0eb]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.images[currentImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImage ? "bg-[#4a2040] w-6" : "bg-[#4a2040]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:relative md:top-auto md:right-auto md:ml-auto md:mb-8 w-10 h-10 flex items-center justify-center text-[#6b5a5a] hover:text-[#4a2040] transition-colors"
              >
                <X size={20} />
              </button>

              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8b6f6f] mb-3">
                {product.category}
              </p>
              <h2
                className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
              >
                {product.title}
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#6b5a5a] mb-8">
                {product.description}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/918082757627?text=Hi! I'm interested in the ${product.title}. Can you share more details?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-500"
              >
                <MessageCircle size={16} />
                Inquire on WhatsApp
              </a>
              <a
                href="mailto:hashimdar141@gmail.com"
                className="w-full flex items-center justify-center gap-3 py-4 border border-[#4a2040] text-[#4a2040] text-[12px] tracking-[0.15em] uppercase hover:bg-[#4a2040] hover:text-[#faf8f5] transition-all duration-500"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="border-t border-[#e8e0d8] p-4 flex gap-3 overflow-x-auto">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`flex-shrink-0 w-20 h-20 overflow-hidden transition-all ${
                i === currentImage ? "ring-2 ring-[#4a2040]" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCT_DATA[0] | null>(null);

  const filteredProducts = activeCategory === "All"
    ? PRODUCT_DATA
    : PRODUCT_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#faf8f5]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-lg border-b border-[#e8e0d8]/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#4a2040] hover:opacity-70 transition-opacity">
            <ArrowLeft size={18} />
            <span
              className="text-xl tracking-[0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Poshsaaz
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[13px] tracking-[0.06em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-[13px] tracking-[0.06em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductLightbox product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="pt-32 pb-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-4">Our Creations</p>
            <h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
            >
              Product Catalog
            </h1>
          </RevealSection>

          {/* Category Filters */}
          <RevealSection delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-[12px] tracking-[0.1em] uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#4a2040] text-[#faf8f5]"
                      : "bg-transparent border border-[#e8e0d8] text-[#6b5a5a] hover:border-[#4a2040] hover:text-[#4a2040]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#f5f0eb]">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 bg-[#4a2040] text-[#faf8f5] text-[9px] tracking-[0.12em] uppercase">{product.badge}</span>
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.06em]">{product.price}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-[11px] tracking-[0.1em] uppercase text-[#4a2040]">
                        View Details
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-1">{product.category}</p>
                  <h3
                    className="text-lg mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-[13px] text-[#8b6f6f] line-clamp-2">{product.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10 border-t border-[#e8e0d8] bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#8b6f6f]">Handmade with love, from Kashmir</p>
          <p className="text-[11px] text-[#b0a0a0]">&copy; 2025 Poshsaaz. Kashmir, India.</p>
        </div>
      </footer>
    </div>
  );
}
