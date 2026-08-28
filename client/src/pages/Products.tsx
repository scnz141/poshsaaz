import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, MessageCircle, Instagram, Search, ZoomIn, Sparkles, Check, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { products as PRODUCT_DATA, Product } from "@/lib/products";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

const CATEGORIES = ["All", "Money Bouquets", "Earrings", "Bouquets", "Bookmarks", "Charger Covers", "Mobile Covers", "Keychains", "Wall Décor", "Hairbands", "Clips & Combs"];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductLightbox({ product, onClose }: { product: Product; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const whatsappInquiryUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'm interested in ordering the "${product.title}" (${product.price}, Category: ${product.category}). Can you please share customization details and availability?`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-modal max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#e8e0d8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Main Image Viewport & Carousel */}
          <div className="md:col-span-6 relative aspect-square md:aspect-auto md:min-h-[500px] bg-[#f5f0eb] flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                src={product.images[currentImage] || product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Badges on top of image */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.15em] uppercase font-medium shadow-sm">
                  {product.badge}
                </span>
              )}
              <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[11px] tracking-wide font-semibold shadow-sm">
                {product.price}
              </span>
            </div>

            {/* Navigation Arrows for multi-images */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  aria-label="Previous image"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#4a2040] flex items-center justify-center hover:bg-white shadow-md transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % product.images.length)}
                  aria-label="Next image"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#4a2040] flex items-center justify-center hover:bg-white shadow-md transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    aria-label={`View photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentImage ? "bg-[#4a2040] w-6" : "bg-white/80 w-2 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Inquiries */}
          <div className="md:col-span-6 p-7 sm:p-9 md:p-11 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold">
                  {product.category}
                </p>
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f0ebe5] text-[#6b5a5a] hover:bg-[#4a2040] hover:text-white transition-all duration-300"
                >
                  <X size={18} />
                </button>
              </div>

              <h2
                className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-[1.1] mb-3 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
              >
                {product.title}
              </h2>

              <p className="text-[14.5px] leading-[1.75] text-[#5c4a4a] mb-5">
                {product.description}
              </p>

              {product.details && (
                <p className="text-[13.5px] leading-[1.65] text-[#786464] mb-6 p-4 rounded-2xl bg-[#f5f0eb] border border-[#e8e0d8]/80">
                  {product.details}
                </p>
              )}

              {product.features && product.features.length > 0 && (
                <div className="mb-6 space-y-2">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#2d1a2d] font-semibold mb-2.5">Key Attributes</p>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#554343]">
                      <div className="w-4 h-4 rounded-full bg-[#f0ebe5] flex items-center justify-center flex-shrink-0 text-[#4a2040]">
                        <Check size={11} strokeWidth={2.5} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#e8e0d8]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#25d366] text-white text-[13px] tracking-[0.08em] font-medium hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <MessageCircle size={18} />
                <span>Order via WhatsApp ({PHONE_NUMBER})</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {product.instagramUrl && (
                <a
                  href={product.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#4a2040] text-white text-[13px] tracking-[0.08em] font-medium hover:bg-[#33142c] transition-colors group"
                >
                  <Instagram size={17} />
                  <span>View Reel on Instagram</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {product.images && product.images.length > 1 && (
          <div className="border-t border-[#e8e0d8] p-4 flex gap-3 overflow-x-auto bg-[#f8f5f0]">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === currentImage ? "ring-2 ring-[#4a2040] shadow-md scale-105" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d1a2d] selection:bg-[#4a2040]/15 selection:text-[#4a2040]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-4 sm:py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#4a2040] hover:opacity-80 transition-opacity group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span
              className="text-2xl sm:text-3xl tracking-[0.03em] font-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Poshsaaz
            </span>
          </Link>
          <nav className="flex items-center gap-6 sm:gap-9">
            <Link href="/" className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Custom Order
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366] text-white text-[11px] tracking-[0.1em] uppercase font-medium shadow-sm"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductLightbox product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      {/* Main Catalog Viewport */}
      <main className="pt-32 sm:pt-36 pb-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Header */}
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-3">Artisan Catalogue</p>
                <h1
                  className="text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1.05] font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                >
                  Handcrafted Creations
                </h1>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b6f6f]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, flowers..."
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#e8e0d8] text-[13.5px] text-[#2d1a2d] placeholder:text-[#a08f8f] focus:outline-none focus:border-[#4a2040] shadow-sm transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8b6f6f] hover:text-[#2d1a2d]"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>
          </RevealSection>

          {/* Category Filter Pills */}
          <RevealSection delay={0.1}>
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-[12px] tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-300 font-medium ${
                    activeCategory === cat
                      ? "text-[#faf8f5]"
                      : "text-[#6b5a5a] hover:text-[#4a2040] bg-white border border-[#e8e0d8]"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#4a2040] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8 text-[13px] text-[#8b6f6f]">
            <p>
              Showing <span className="font-semibold text-[#4a2040]">{filteredProducts.length}</span> handcrafted items
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </div>

          {/* Responsive Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center glass-card rounded-3xl p-12">
              <Sparkles size={32} className="mx-auto text-[#c48b71] mb-4" />
              <h3 className="text-2xl font-normal text-[#2d1a2d] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                No creations found
              </h3>
              <p className="text-[14px] text-[#8b6f6f] mb-6">
                Try searching with another keyword or browsing all categories.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="px-6 py-2.5 rounded-full bg-[#4a2040] text-white text-[12px] tracking-[0.1em] uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group cursor-pointer glass-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Product Media */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ebe5]">
                      <img
                        src={product.images[0] || product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#4a2040] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <ZoomIn size={20} />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3.5 left-3.5 flex flex-col gap-2 z-10">
                        {product.badge && (
                          <span className="px-3 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] text-[9.5px] tracking-[0.14em] uppercase font-medium shadow-sm">
                            {product.badge}
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[10.5px] tracking-wide font-semibold shadow-sm">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-[11px] tracking-[0.18em] uppercase text-[#8b6f6f] font-semibold">{product.category}</p>
                          <ArrowUpRight size={17} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                        <h3
                          className="text-2xl leading-[1.2] mb-2 font-normal"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                        >
                          {product.title}
                        </h3>
                        <p className="text-[13px] leading-[1.6] text-[#736060] line-clamp-2">{product.description}</p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#e8e0d8]/80 flex items-center justify-between text-[12px] text-[#4a2040] font-medium">
                        <span>Click for Details & Inquiry</span>
                        <MessageCircle size={15} className="text-[#25d366]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-5 sm:px-8 md:px-12 border-t border-[#e8e0d8] bg-[#f7f4ee]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8b6f6f]">
          <p>Handmade with love, from Kashmir &bull; {PHONE_NUMBER}</p>
          <p>&copy; {new Date().getFullYear()} Poshsaaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
