import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, ArrowUpRight, MessageCircle, ZoomIn, Instagram, Sparkles, Star, ChevronLeft, ChevronRight, Check, Heart, ShieldCheck, Truck, Clock } from "lucide-react";
import { Link } from "wouter";
import { products, testimonials, Product } from "@/lib/products";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

const HERO_IMAGES = {
  hero: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784756395/poshsaaz/hero_clips_marble.jpg",
  tieback: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784756852/poshsaaz/curtain_tieback.jpg",
  bouquet: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
  mobile: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241861/poshsaaz/mobile_cover_blue.jpg",
  giftBox: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784756403/poshsaaz/gift_box_pink.jpg",
  details: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg",
  hairband: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754115/poshsaaz/rose_bloom_hairband.jpg",
  craftsmanship: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754105/poshsaaz/craftsmanship.jpg",
};

const FEATURED_COLLECTIONS = [
  {
    id: "curtain-tiebacks",
    title: "Curtain Tiebacks",
    subtitle: "Magnetic Floral Holdbacks",
    description: "Handmade chenille floral holdbacks featuring pastel blossoms, gold leaf details, and cascading pearl drops. Elevates curtains and interior spaces with eternal spring charm.",
    image: HERO_IMAGES.tieback,
    features: ["Strong magnetic closure", "Pastel & lavender blooms", "Dangling pearl embellishments"],
    badge: "Best Seller",
    price: "Starting ₹299",
    category: "Home Decor",
  },
  {
    id: "hairbands",
    title: "Floral Hairbands",
    subtitle: "Pearls & Petals Woven by Hand",
    description: "Meticulously shaped from fuzzy chenille stem wire with delicate pearl embellishments on velvet-wrapped bands. Lightweight, comfortable, and perfect for weddings and special moments.",
    image: HERO_IMAGES.hairband,
    features: ["Lightweight & comfortable fit", "Plush velvet wrapped band", "Available in custom palettes"],
    badge: "Made to Order",
    price: "Starting ₹249",
    category: "Hairbands",
  },
  {
    id: "bouquets",
    title: "Everlasting Bouquets",
    subtitle: "Blooms That Never Wilt",
    description: "Artisan bouquets sculpted from premium pipe cleaners — lavender sprigs, sunshine sunflowers, plush roses, and mixed botanical wonders wrapped in rustic kraft paper with silk ribbon.",
    image: HERO_IMAGES.bouquet,
    features: ["Never wilts or fades", "Lavender, Sunflower & Rose options", "Ready-to-gift presentation"],
    badge: "Custom Order",
    price: "Starting ₹199",
    category: "Bouquets",
  },
  {
    id: "mobile-covers",
    title: "3D Floral Phone Cases",
    subtitle: "Tactile Artisan Art",
    description: "Custom-fitted phone cases adorned with 3D pipe cleaner rosettes, white daisies, and pearl centers. Carry your unique bespoke style with you everywhere you go.",
    image: HERO_IMAGES.mobile,
    features: ["Custom fitted for any phone model", "Tactile 3D chenille floral art", "Shock-absorbent soft framing"],
    badge: "Trending",
    price: "Starting ₹599",
    category: "Mobile Covers",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
  },
  {
    id: "clips-combs",
    title: "Clips & Hair Combs",
    subtitle: "Delicate Miniature Accents",
    description: "Precision-crafted miniature floral clips and side combs featuring gold-tone hardware, pastel petals, and pearl drops for effortless bridal and everyday styling.",
    image: HERO_IMAGES.details,
    features: ["Secure gold-tone hardware", "Miniature floral craftsmanship", "Versatile styling options"],
    badge: "Made to Order",
    price: "Starting ₹149",
    category: "Clips & Combs",
  },
  {
    id: "gift-sets",
    title: "Curated Gift Boxes",
    subtitle: "Thoughtfully Packaged Keepsakes",
    description: "Luxurious bespoke gift sets combining matching hairbands, floral clips, and miniature bouquets nestled in silk tissue paper with signature satin ribbons.",
    image: HERO_IMAGES.giftBox,
    features: ["Signature gift packaging", "Curated matching sets", "Personalized greeting card"],
    badge: "Gift Special",
    price: "Starting ₹799",
    category: "Gift Sets",
  },
];

const TRUST_PILLARS = [
  {
    icon: Sparkles,
    title: "100% Handcrafted",
    description: "Every petal, leaf, and bead sculpted by hand in Kashmir with meticulous care.",
  },
  {
    icon: Heart,
    title: "Everlasting Beauty",
    description: "Premium chenille wire flowers that never fade, wilt, or lose their vibrant colors.",
  },
  {
    icon: ShieldCheck,
    title: "Bespoke Customization",
    description: "Choose your favorite flowers, exact color scheme, and tailored bundle size.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description: "Carefully wrapped and shipped safely from the heart of Kashmir across the globe.",
  },
];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Product Quick View Lightbox */
function ProductQuickView({ collection, onClose }: { collection: typeof FEATURED_COLLECTIONS[0] | null; onClose: () => void }) {
  if (!collection) return null;

  const whatsappInquiryUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'm interested in the ${collection.title} (${collection.price}). Could you please share more details and available custom colors?`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 glass-modal max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#e8e0d8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#4a2040] hover:bg-[#4a2040] hover:text-white shadow-md transition-all duration-300"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image preview */}
          <div className="md:col-span-6 relative aspect-square md:aspect-auto md:min-h-[480px] bg-[#f5f0eb] overflow-hidden">
            <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.15em] uppercase font-medium shadow-sm">
                {collection.badge}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[11px] tracking-wide font-medium shadow-sm">
                {collection.price}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-6 p-7 sm:p-9 md:p-11 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-medium mb-2">{collection.category}</p>
              <h3
                className="text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.1] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
              >
                {collection.title}
              </h3>
              <p className="text-[13px] text-[#c48b71] font-medium mb-5">{collection.subtitle}</p>
              <p className="text-[14px] leading-[1.8] text-[#6b5a5a] mb-6">{collection.description}</p>

              <div className="mb-8 space-y-2.5">
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#2d1a2d] font-semibold mb-3">Craftsmanship Highlights</p>
                {collection.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-[13px] text-[#554343]">
                    <div className="w-4 h-4 rounded-full bg-[#f0ebe5] flex items-center justify-center flex-shrink-0 text-[#4a2040]">
                      <Check size={11} strokeWidth={2.5} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#e8e0d8]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#25d366] text-white text-[13px] tracking-[0.08em] font-medium hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {collection.instagramUrl ? (
                <a
                  href={collection.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#4a2040] text-[#faf8f5] text-[13px] tracking-[0.08em] font-medium hover:bg-[#33142c] transition-colors group"
                >
                  <Instagram size={17} />
                  Watch Reel on Instagram
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <Link
                  href="/products"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-[#4a2040] text-[#4a2040] text-[13px] tracking-[0.08em] font-medium hover:bg-[#4a2040] hover:text-[#faf8f5] transition-all"
                  onClick={onClose}
                >
                  Explore Full Catalog
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [selectedQuickView, setSelectedQuickView] = useState<typeof FEATURED_COLLECTIONS[0] | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroParallaxY = useTransform(smoothProgress, [0, 0.4], [0, -100]);
  const heroTextParallax = useTransform(smoothProgress, [0, 0.25], [0, -35]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["collections", "story", "testimonials", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuickView = useCallback((collection: typeof FEATURED_COLLECTIONS[0]) => {
    setSelectedQuickView(collection);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d1a2d] relative overflow-x-hidden selection:bg-[#4a2040]/15 selection:text-[#4a2040]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c48b71] via-[#4a2040] to-[#25d366] origin-left z-50 pointer-events-none"
      />

      {/* Quick View Lightbox */}
      <AnimatePresence>
        {selectedQuickView && (
          <ProductQuickView collection={selectedQuickView} onClose={() => setSelectedQuickView(null)} />
        )}
      </AnimatePresence>

      {/* Floating Ambient Kashmiri Floral Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <div className="absolute top-28 left-[8%] w-48 h-48 rounded-full bg-gradient-to-tr from-pink-200/40 to-purple-200/20 blur-3xl animate-float" />
        <div className="absolute top-[45%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-bl from-rose-200/30 to-amber-100/30 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-purple-200/25 to-pink-100/30 blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
      </div>

      {/* Top Luxury Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-header py-3.5 shadow-sm"
            : "bg-gradient-to-b from-[#faf8f5]/90 to-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-2xl sm:text-3xl tracking-[0.03em] font-normal transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#4a2040" }}
            >
              Poshsaaz
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48b71] mb-3 group-hover:bg-[#4a2040] transition-colors" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {[
              { label: "Collections", href: "#collections" },
              { label: "Catalog", href: "/products", isRoute: true },
              { label: "Our Story", href: "#story" },
              { label: "Reviews", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (!item.isRoute) {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`text-[12px] lg:text-[13px] tracking-[0.14em] uppercase transition-all duration-300 relative py-1 ${
                  activeSection === item.label.toLowerCase().replace(" ", "")
                    ? "text-[#4a2040] font-semibold"
                    : "text-[#6b5a5a] hover:text-[#4a2040]"
                }`}
              >
                {item.label}
                {activeSection === item.label.toLowerCase().replace(" ", "") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4a2040] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#4a2040] text-[#faf8f5] text-[11px] lg:text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-[#33142c] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <MessageCircle size={14} className="text-[#25d366]" />
              <span>WhatsApp Chat</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/80 border border-[#e8e0d8] text-[#4a2040]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden glass-header border-b border-[#e8e0d8] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {[
                  { label: "Collections", href: "#collections" },
                  { label: "Product Catalog", href: "/products", isRoute: true },
                  { label: "Our Story", href: "#story" },
                  { label: "Reviews", href: "#testimonials" },
                  { label: "Custom Orders", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (!item.isRoute) {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }
                      setMenuOpen(false);
                    }}
                    className="text-lg text-[#2d1a2d] py-1 font-normal flex items-center justify-between"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} className="text-[#c48b71]" />
                  </a>
                ))}
                <div className="pt-4 border-t border-[#e8e0d8] flex flex-col gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.1em] uppercase font-medium shadow-md"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp ({PHONE_NUMBER})
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 sm:pb-24 lg:pb-32 pt-32 overflow-hidden bg-[#faf8f5]">
        {/* Parallax Hero Image Canvas */}
        <motion.div style={{ y: heroParallaxY }} className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGES.hero}
            alt="Poshsaaz handcrafted Kashmir pipe cleaner floral accessories"
            className="w-full h-full object-cover object-center transform scale-[1.03]"
          />
          {/* Subtle tailored gradient overlays for clear text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/80 via-[#faf8f5]/30 to-transparent sm:w-2/3" />
        </motion.div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 w-full">
          <motion.div style={{ y: heroTextParallax }} className="max-w-2xl lg:max-w-3xl">
            {/* Craft Origin Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#e8e0d8] shadow-sm mb-5 sm:mb-7"
            >
              <Sparkles size={13} className="text-[#c48b71]" />
              <span className="text-[10.5px] sm:text-[11.5px] tracking-[0.22em] uppercase font-semibold text-[#4a2040]">
                Handcrafted in Kashmir &bull; Everlasting Art
              </span>
            </motion.div>

            {/* Kinetic Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[1.02] tracking-[-0.01em] mb-6 sm:mb-8 font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
            >
              Where petals
              <br />
              <em className="font-normal italic text-[#4a2040]">bloom forever</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[14.5px] sm:text-[16px] md:text-[17px] leading-[1.75] text-[#5c4a4a] mb-8 sm:mb-10 max-w-xl"
            >
              Bespoke handmade floral accessories, curtain tiebacks, everlasting bouquets, and custom keepsakes sculpted from soft chenille stems and shimmering pearls in Srinagar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-[#33142c] shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Explore Catalog</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/90 backdrop-blur-sm border border-[#e8e0d8] text-[#2d1a2d] text-[12px] sm:text-[13px] tracking-[0.12em] uppercase font-medium hover:border-[#4a2040] hover:text-[#4a2040] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MessageCircle size={16} className="text-[#25d366]" />
                <span>Custom Order</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Craftsmanship Pillars */}
      <section className="py-12 sm:py-16 border-y border-[#e8e0d8] bg-[#f7f4ee]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {TRUST_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4a2040] shadow-sm border border-[#e8e0d8]/80 flex-shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#2d1a2d] mb-1">{pillar.title}</h4>
                    <p className="text-[13px] leading-[1.6] text-[#736060]">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section id="collections" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
            <RevealSection>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-3">Signature Creations</p>
              <h2
                className="text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.08] font-light max-w-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
              >
                Each piece, a quiet
                <br />
                <em className="font-normal italic text-[#4a2040]">celebration of craft</em>
              </h2>
            </RevealSection>

            <RevealSection delay={0.2}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.15em] uppercase text-[#4a2040] font-semibold hover:gap-3 transition-all pb-1 border-b border-[#4a2040]/40 w-fit"
              >
                <span>View All 20+ Creations</span>
                <ArrowUpRight size={15} />
              </Link>
            </RevealSection>
          </div>

          {/* Responsive Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {FEATURED_COLLECTIONS.map((col, index) => {
              // Asymmetric span layout for visual rhythm
              const spanClass =
                index === 0
                  ? "md:col-span-7"
                  : index === 1
                  ? "md:col-span-5"
                  : index === 2
                  ? "md:col-span-4"
                  : index === 3
                  ? "md:col-span-4"
                  : index === 4
                  ? "md:col-span-4"
                  : "md:col-span-12";

              const aspectClass =
                index === 0
                  ? "aspect-[4/3] sm:aspect-[16/11]"
                  : index === 1
                  ? "aspect-[4/3] sm:aspect-[4/3]"
                  : index === 5
                  ? "aspect-[16/9] md:aspect-[21/8]"
                  : "aspect-[4/3]";

              return (
                <RevealSection key={col.id} className={spanClass} delay={index * 0.08}>
                  <motion.div
                    onClick={() => openQuickView(col)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative cursor-pointer glass-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
                  >
                    {/* Media Frame */}
                    <div className={`relative ${aspectClass} overflow-hidden bg-[#f0ebe5]`}>
                      <img
                        src={col.image}
                        alt={col.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#4a2040] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <ZoomIn size={22} />
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        <span className="px-3 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium shadow-sm">
                          {col.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-wide font-semibold shadow-sm">
                          {col.price}
                        </span>
                      </div>
                    </div>

                    {/* Meta Footer */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-[11px] tracking-[0.2em] uppercase text-[#8b6f6f] font-semibold">{col.category}</p>
                          <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                        <h3
                          className="text-2xl sm:text-3xl leading-[1.15] mb-2 font-normal"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                        >
                          {col.title}
                        </h3>
                        <p className="text-[13.5px] leading-[1.65] text-[#6b5a5a] line-clamp-2">{col.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artisan Marquee Banner */}
      <section className="py-7 border-y border-[#e8e0d8] overflow-hidden bg-[#f7f4ee]">
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-[clamp(1.2rem,2.8vw,1.9rem)] tracking-[0.08em] font-light flex items-center gap-10"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8b7575" }}
              >
                <span>Handmade with Love</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c48b71]" />
                <span>Kashmir Valley Artistry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c48b71]" />
                <span>Everlasting Florals</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c48b71]" />
                <span>Bespoke Elegance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c48b71]" />
              </span>
            ))}
        </motion.div>
      </section>

      {/* Story & Craftsmanship Section */}
      <section id="story" className="py-24 sm:py-32 lg:py-44 px-5 sm:px-8 md:px-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <RevealSection className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-4">Our Heritage</p>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.1] font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
              >
                Crafted with patience,
                <br />
                <em className="font-normal italic text-[#4a2040]">worn with timeless pride</em>
              </h2>
              <div className="space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a]">
                <p>
                  From the serene valleys of Kashmir, each Poshsaaz creation is born from hours of dedicated handwork. Soft fuzzy chenille stems are sculpted petal by petal, pearls are hand-stitched, and colors are blended to create everlasting blooms.
                </p>
                <p>
                  Unlike fresh flowers that fade within days, our pieces serve as eternal keepsakes for weddings, birthdays, gift hampers, and cozy home spaces.
                </p>
              </div>

              {/* Story Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#e8e0d8]">
                <div>
                  <p className="text-3xl sm:text-4xl font-light text-[#4a2040] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    500+
                  </p>
                  <p className="text-[12px] tracking-[0.1em] uppercase text-[#8b6f6f] font-medium">Bespoke Orders Crafted</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-light text-[#4a2040] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    100%
                  </p>
                  <p className="text-[12px] tracking-[0.1em] uppercase text-[#8b6f6f] font-medium">Kashmir Artisan Made</p>
                </div>
              </div>
            </RevealSection>

            {/* Story Visual Composition */}
            <RevealSection className="lg:col-span-6" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#f0ebe5] border border-[#e8e0d8]">
                  <img
                    src={HERO_IMAGES.craftsmanship}
                    alt="Artisan crafting handmade floral accessories in Kashmir"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Inset Card */}
                <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                  <img src={HERO_IMAGES.tieback} alt="Curtain tieback detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section id="testimonials" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#f7f4ee] border-y border-[#e8e0d8]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-3">Client Love</p>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
            >
              Words from our <em className="font-normal italic text-[#4a2040]">cherished clients</em>
            </h2>
          </RevealSection>

          {/* Testimonial Cards Carousel / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.slice(0, 3).map((item, i) => (
              <RevealSection key={item.id} delay={i * 0.1}>
                <div className="glass-card rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#d4af37] mb-6">
                      {Array(item.rating)
                        .fill(null)
                        .map((_, idx) => (
                          <Star key={idx} size={15} fill="#d4af37" />
                        ))}
                    </div>
                    <p className="text-[15px] leading-[1.75] text-[#4a3939] italic mb-8">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-5 border-t border-[#e8e0d8]/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#2d1a2d]">{item.name}</h4>
                      <p className="text-[12px] text-[#8b6f6f]">{item.role}</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#c48b71]" />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders / Contact CTA Section */}
      <section id="contact" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e8e0d8] shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-4">Custom Concierge</p>
                <h2
                  className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] font-light mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
                >
                  Let us create something
                  <br />
                  <em className="font-normal italic text-[#4a2040]">truly bespoke for you</em>
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a] mb-8 max-w-xl">
                  Have a specific flower in mind? A bridal color palette, matching curtain holdbacks, or custom phone case? Talk directly with our artisan on WhatsApp.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I'd like to discuss a custom handmade order.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25d366] text-white text-[13px] tracking-[0.1em] font-medium hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp ({PHONE_NUMBER})</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#4a2040] text-[#4a2040] text-[13px] tracking-[0.1em] font-medium hover:bg-[#4a2040] hover:text-white transition-all"
                  >
                    <span>Contact Inquiry Form</span>
                  </Link>
                </div>
              </div>

              {/* Inset Photo */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e8e0d8]">
                  <img src={HERO_IMAGES.details} alt="Custom floral craft" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Concierge Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Artisan on WhatsApp: ${PHONE_NUMBER}`}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25d366] text-white shadow-2xl hover:bg-[#20ba59] animate-pulse-glow transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={22} className="text-white flex-shrink-0" />
        <span className="text-[13px] font-medium tracking-wide pr-1 hidden sm:inline-block">Chat on WhatsApp</span>
      </motion.a>

      {/* Luxury Footer */}
      <footer className="py-16 sm:py-20 px-5 sm:px-8 md:px-12 border-t border-[#e8e0d8] bg-[#f7f4ee]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-12">
            <div className="md:col-span-5">
              <span
                className="text-2xl sm:text-3xl block mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
              >
                Poshsaaz
              </span>
              <p className="text-[14px] leading-[1.75] text-[#736060] max-w-sm">
                Everlasting handcrafted floral art, curtain tiebacks, hair accessories, and bespoke phone covers made with pure love in Kashmir.
              </p>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2d1a2d] mb-4">Quick Navigation</h5>
              <div className="flex flex-col gap-2.5 text-[13px] text-[#736060]">
                <Link href="/" className="hover:text-[#4a2040] transition-colors">Home</Link>
                <Link href="/products" className="hover:text-[#4a2040] transition-colors">Product Catalog</Link>
                <a href="#story" className="hover:text-[#4a2040] transition-colors">Artisan Story</a>
                <Link href="/contact" className="hover:text-[#4a2040] transition-colors">Custom Orders</Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <h5 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#2d1a2d] mb-4">Direct Contact</h5>
              <div className="flex flex-col gap-3 text-[13px] text-[#736060]">
                <p>Srinagar, Kashmir, India &bull; Worldwide Shipping</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#4a2040] font-semibold hover:underline">
                  WhatsApp: {PHONE_NUMBER}
                </a>
                <a href="mailto:hashimdar141@gmail.com" className="hover:text-[#4a2040] transition-colors">
                  hashimdar141@gmail.com
                </a>
                <a href="https://www.instagram.com/poshsaaz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#e1306c] hover:opacity-80 transition-opacity">
                  <Instagram size={15} />
                  <span>@poshsaaz on Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#e8e0d8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#9c8989]">
            <p>&copy; {new Date().getFullYear()} Poshsaaz. All rights reserved. Handcrafted in Kashmir.</p>
            <p>Made with love &bull; Preserving Kashmir artisan craft</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
