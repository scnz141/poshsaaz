import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, MessageCircle, Instagram, Search, ZoomIn, Sparkles, Check, ArrowUpRight, SlidersHorizontal, LayoutGrid, Rows } from "lucide-react";
import { Link } from "wouter";
import { products as PRODUCT_DATA, Product } from "@/lib/products";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

const CATEGORIES = ["All", "Curtain Tiebacks", "Flower Pots", "Car Charms", "Earrings", "Hairbands", "Wall Décor", "Hand Cuffs", "Bouquets", "Money Bouquets", "Bookmarks", "Keychains", "Charger Covers", "Mobile Covers", "Hampers"];

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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const whatsappInquiryUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'm interested in ordering the "${product.title}" (${product.price}, Category: ${product.category}). Can you please share customization details and availability?`
  )}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!product.images || product.images.length <= 1) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="glass-modal relative max-w-5xl w-full max-h-[92dvh] overflow-y-auto rounded-3xl shadow-2xl border border-[#e8e0d8] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button - ALWAYS visible on mobile & desktop */}
        <button
          onClick={onClose}
          aria-label="Close product dialog"
          className="absolute top-3.5 right-3.5 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-white/95 text-[#2d1a2d] hover:bg-white shadow-lg backdrop-blur-md active:scale-90 transition-transform"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 flex-grow">
          {/* Main Image Viewport & Carousel with swipe support */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="md:col-span-6 relative aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[500px] max-h-[42vh] md:max-h-none bg-[#f5f0eb] flex flex-col justify-between overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                src={product.images[currentImage] || product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Badges on top of image */}
            <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] text-[9.5px] tracking-[0.15em] uppercase font-medium shadow-sm">
                  {product.badge}
                </span>
              )}
              <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[11px] tracking-wide font-semibold shadow-sm">
                {product.price}
              </span>
            </div>

            {/* Navigation Arrows for multi-images (Desktop/Tablet) */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  aria-label="Previous image"
                  className="hidden sm:flex absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#4a2040] items-center justify-center hover:bg-white shadow-md active:scale-95 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % product.images.length)}
                  aria-label="Next image"
                  className="hidden sm:flex absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#4a2040] items-center justify-center hover:bg-white shadow-md active:scale-95 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-xs">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    aria-label={`View photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentImage ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Inquiries */}
          <div className="md:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-2">
                {product.category}
              </p>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] mb-3 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
              >
                {product.title}
              </h2>

              <p className="text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5c4a4a] mb-4">
                {product.description}
              </p>

              {product.details && (
                <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-[#786464] mb-5 p-3.5 rounded-2xl bg-[#f5f0eb] border border-[#e8e0d8]/80">
                  {product.details}
                </p>
              )}

              {product.features && product.features.length > 0 && (
                <div className="mb-6 space-y-2">
                  <p className="text-[10.5px] tracking-[0.15em] uppercase text-[#2d1a2d] font-semibold mb-2">Key Attributes</p>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[12.5px] sm:text-[13px] text-[#554343]">
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
            <div className="space-y-2.5 pt-4 border-t border-[#e8e0d8]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25d366] text-white text-[12.5px] tracking-[0.08em] font-medium hover:bg-[#20ba59] active:scale-[0.98] shadow-md transition-all group"
              >
                <MessageCircle size={17} />
                <span>Order via WhatsApp ({PHONE_NUMBER})</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {product.instagramUrl && (
                <a
                  href={product.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-[#faf0f3] text-[#e1306c] border border-[#e1306c]/30 text-[12px] tracking-[0.08em] font-medium hover:bg-[#e1306c] hover:text-white active:scale-[0.98] transition-all group"
                >
                  <Instagram size={16} />
                  <span>View Reel on Instagram</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip with smooth touch scrolling */}
        {product.images && product.images.length > 1 && (
          <div className="border-t border-[#e8e0d8] p-3 sm:p-4 flex gap-2.5 overflow-x-auto bg-[#f8f5f0] scroll-touch no-scrollbar">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Lock body scroll on mobile when product lightbox is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

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
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-3.5 sm:py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[#4a2040] hover:opacity-80 active:scale-95 transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span
              className="text-2xl sm:text-3xl tracking-[0.03em] font-normal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Poshsaaz
            </span>
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link href="/" className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors py-1">
              Home
            </Link>
            <Link href="/contact" className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors py-1">
              Custom Order
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366] text-white text-[11px] tracking-[0.1em] uppercase font-medium shadow-sm hover:bg-[#20ba59] active:scale-95 transition-all"
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
      <main className="pt-28 sm:pt-36 pb-28 px-4 sm:px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Header */}
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <p className="text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-2 sm:mb-3">Artisan Catalogue</p>
                <h1
                  className="text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[1.05] font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                >
                  Handcrafted Creations
                </h1>
              </div>

              {/* Search Bar with iOS zoom-prevention (>=16px on mobile) */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b6f6f]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search creations, flowers..."
                  className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-[#e8e0d8] text-[16px] sm:text-[13.5px] text-[#2d1a2d] placeholder:text-[#a08f8f] focus:outline-none focus:border-[#4a2040] shadow-xs transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#8b6f6f] hover:text-[#2d1a2d] active:scale-90"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>
          </RevealSection>

          {/* Category Filter Pills */}
          <RevealSection delay={0.1}>
            <div className="relative mb-8 sm:mb-12">
              <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scroll-touch no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11.5px] sm:text-[12px] tracking-[0.08em] uppercase whitespace-nowrap transition-all duration-300 font-medium active:scale-95 ${
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
            </div>
          </RevealSection>

          {/* Results Summary & Mobile Layout Switcher */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 text-[12.5px] sm:text-[13px] text-[#8b6f6f]">
            <p>
              Showing <span className="font-semibold text-[#4a2040]">{filteredProducts.length}</span> handcrafted items
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>

            {/* Mobile View Switcher (2-Column Grid vs 1-Column List) */}
            <div className="flex sm:hidden items-center gap-1 bg-white border border-[#e8e0d8] p-1 rounded-full shadow-xs">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="2 column compact grid view"
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "grid" ? "bg-[#4a2040] text-white" : "text-[#8b6f6f]"
                }`}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="Single column detailed view"
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "list" ? "bg-[#4a2040] text-white" : "text-[#8b6f6f]"
                }`}
              >
                <Rows size={15} />
              </button>
            </div>
          </div>

          {/* Wedding Season Money Bouquet Editorial Note */}
          {(activeCategory === "Money Bouquets" || searchQuery.toLowerCase().includes("money") || searchQuery.toLowerCase().includes("wedding")) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 sm:p-7 rounded-2xl bg-[#f7f4ee] border border-[#ded5cb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div>
                <p className="text-[10.5px] tracking-[0.2em] uppercase text-[#8b6f6f] font-semibold mb-1">
                  Wedding Season Atelier &bull; Shagun & Nikah Presentation
                </p>
                <h3
                  className="text-xl sm:text-2xl font-light text-[#2d1a2d] mb-1.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Bespoke Currency Origami Bouquets
                </h3>
                <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a] max-w-2xl">
                  Real Indian banknotes meticulously pleated without pins or tears. Notes remain completely intact and spendable, centered with an everlasting plush velvet rose. Custom ₹100 and ₹500 denominations available for grand presentations.
                </p>
              </div>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I would like to reserve a Wedding Season Currency Origami Bouquet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-6 py-3 rounded-full bg-[#4a2040] text-[#faf8f5] text-[11.5px] tracking-[0.12em] uppercase font-medium hover:bg-[#33142c] active:scale-95 transition-all shadow-xs flex items-center gap-2 flex-shrink-0"
              >
                <MessageCircle size={15} />
                <span>Reserve on WhatsApp</span>
              </a>
            </motion.div>
          )}

          {/* Responsive Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center glass-card rounded-3xl p-8 sm:p-12 border border-[#e8e0d8]">
              <Sparkles size={32} className="mx-auto text-[#c48b71] mb-4" />
              <h3 className="text-2xl font-normal text-[#2d1a2d] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                No creations found
              </h3>
              <p className="text-[14px] text-[#8b6f6f] mb-6">
                Try searching with another keyword or browsing all categories.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="px-6 py-2.5 rounded-full bg-[#4a2040] text-white text-[12px] tracking-[0.1em] uppercase active:scale-95 transition-transform"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                    className="group cursor-pointer glass-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col justify-between"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Product Media */}
                    <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-[#f0ebe5]">
                      <img
                        src={product.images[0] || product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#4a2040] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
                          <ZoomIn size={18} />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 flex flex-col gap-1.5 z-10">
                        {product.badge && (
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#4a2040] text-[#faf8f5] text-[8.5px] sm:text-[9.5px] tracking-[0.12em] uppercase font-medium shadow-xs">
                            {product.badge}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[9.5px] sm:text-[10.5px] tracking-wide font-semibold shadow-xs">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3.5 sm:p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#8b6f6f] font-semibold truncate max-w-[80%]">
                            {product.category}
                          </p>
                          <ArrowUpRight size={15} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors flex-shrink-0" />
                        </div>
                        <h3
                          className="text-[15px] sm:text-2xl leading-[1.2] mb-1.5 font-normal line-clamp-2"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                        >
                          {product.title}
                        </h3>
                        <p className="hidden sm:block text-[13px] leading-[1.6] text-[#736060] line-clamp-2">{product.description}</p>
                      </div>

                      <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-[#e8e0d8]/80 flex items-center justify-between text-[11px] sm:text-[12px] text-[#4a2040] font-medium">
                        <span className="truncate">Details & Inquiry</span>
                        <MessageCircle size={14} className="text-[#25d366] flex-shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      {/* Floating WhatsApp Button with safe-area spacing */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${PHONE_NUMBER}`}
        className="fixed z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all p-3.5"
        style={{
          bottom: "max(1.25rem, calc(1rem + env(safe-area-inset-bottom, 0px)))",
          right: "max(1.25rem, calc(1rem + env(safe-area-inset-right, 0px)))",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.a>

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
