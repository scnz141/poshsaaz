import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, ArrowUpRight, MessageCircle, ZoomIn, Instagram } from "lucide-react";
import { Link } from "wouter";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

const IMAGES = {
  hero: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784756395/poshsaaz/hero_clips_marble.jpg",
  tieback: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784756852/poshsaaz/curtain_tieback.jpg",
  hairbands: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754099/poshsaaz/hero.jpg",
  bouquets: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242010/poshsaaz/lavender_bouquet.jpg",
  sunflower: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242034/poshsaaz/sunflower_bouquet.jpg",
  rose: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785242054/poshsaaz/rose_bouquet.jpg",
  bookmark: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241742/poshsaaz/handmade_bookmark.jpg",
  charger: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241756/poshsaaz/charger_cover.jpg",
  mobile: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241841/poshsaaz/mobile_cover.jpg",
  keychain: "https://res.cloudinary.com/dtcy9bbux/image/upload/f_auto,q_auto/v1785241992/poshsaaz/handmade_keychain.jpg",
  wall: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787922120/poshsaaz/wall_decor_autumn_wreath.jpg",
  details: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754165/poshsaaz/floral_clips_collection.jpg",
  packaging: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754155/poshsaaz/mixed_floral_bouquet.jpg",
  craftsmanship: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754105/poshsaaz/craftsmanship.jpg",
  roseHairband: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754115/poshsaaz/rose_bloom_hairband.jpg",
  earrings: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787920961/poshsaaz/earrings_black_heart_pearl.jpg",
};

const COLLECTIONS = [
  {
    id: "money-bouquets",
    title: "Currency Origami Bouquets",
    description: "Bespoke money bouquets with hand-folded currency note petals, plush chenille flower core, and luxury gold-bordered matte black wrapping for high-prestige celebrations.",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921259/poshsaaz/money_bouquet_purple_mandala.jpg",
    features: ["Precision origami note petals", "Handmade chenille floral center", "Luxury gold-edge wrapping", "Custom cash denominations"],
    badge: "Prestige Gift",
    price: "Starting ₹1,500",
  },
  {
    id: "earrings",
    title: "Handmade Velvet Earrings",
    description: "Plush velvet chenille botanical blossom dangles, coquette bows, and heart studs embellished with pearls and metallic gold spheres on silk presentation.",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787921633/poshsaaz/earrings_black_blossom_gold_drop.png",
    features: ["Botanical dangles & coquette bows", "Centered pearls & gold spheres", "Hypoallergenic lightweight hooks/studs", "Signature Poshsaaz presentation"],
    badge: "New Arrival",
    price: "₹150 – ₹160",
  },
  {
    id: "tiebacks",
    title: "Floral Curtain Tiebacks",
    description: "Handcrafted chenille floral curtain holdbacks featuring pastel blooms, gold leaf details, and cascading pearl drops. Elevates drapery and living spaces with everlasting spring grace.",
    image: IMAGES.tieback,
    features: ["Magnetic floral holdback", "Soft chenille wire petals", "Dangling pearl accents"],
    badge: "New Arrival",
    price: "Starting ₹299",
  },
  {
    id: "bouquets",
    title: "Everlasting Bouquets",
    description: "Everlasting floral bouquets crafted from pipe cleaners — lavender, sunflowers, roses, mixed arrangements, and single-stem blooms that never wilt. Wrapped in rustic kraft paper with ribbon.",
    image: IMAGES.bouquets,
    features: ["Lavender, Sunflower, Rose & Mixed options", "Never wilts or fades", "Perfect for gifting"],
    badge: "Custom Order",
    price: "Starting ₹199",
  },
  {
    id: "bookmarks",
    title: "Handmade Bookmarks",
    description: "Mark your moments with handmade beauty. Every page deserves a little bloom. Delicate pipe cleaner floral bookmarks with satin tassels.",
    image: IMAGES.bookmark,
    features: ["Page-safe slim design", "Satin tassel charm", "Ideal gift for book lovers"],
    badge: "Made to Order",
    price: "Starting ₹249",
    instagramUrl: "https://www.instagram.com/reel/DbOTtopyZaa/",
  },
  {
    id: "charger",
    title: "Charger Cable Covers",
    description: "Handmade with love, crafted to protect. Make your charger look as beautiful as you are. Spiral chenille floral cable covers with pearl accents.",
    image: IMAGES.charger,
    features: ["Protects against fraying", "Pearl blossom design", "Fits standard cables"],
    badge: "Custom Order",
    price: "Starting ₹399",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
  },
  {
    id: "mobile",
    title: "3D Floral Mobile Covers",
    description: "Carry your style everywhere. Handcrafted phone covers decorated with 3D pipe cleaner flowers and pearl centers designed with love.",
    image: IMAGES.mobile,
    features: ["Custom fitted for any phone", "Tactile 3D floral art", "Unique handcrafted design"],
    badge: "Custom Order",
    price: "Starting ₹599",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
  },
  {
    id: "keychains",
    title: "Custom Keychains",
    description: "Every key deserves a beautiful companion. Custom handmade flower keychains with gold hardware and pearl charms.",
    image: IMAGES.keychain,
    features: ["Gold metal keyring", "Lightweight & durable", "Charming bag accessory"],
    badge: "Made to Order",
    price: "Starting ₹199",
    instagramUrl: "https://www.instagram.com/p/Dahs4ULSWex/",
  },
  {
    id: "wall",
    title: "Handcrafted Wall Décor & Wreaths",
    description: "Artisan-sculpted botanical wall wreaths and floral hoop hangings created with velvety chenille blooms in earthy and vibrant Kashmir palettes.",
    image: IMAGES.wall,
    features: ["Autumn botanical wreath", "Inscribed hanging satin ribbon", "Everlasting home wall art"],
    badge: "New Arrival",
    price: "Starting ₹850",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
  },
  {
    id: "hairbands",
    title: "Floral Hairbands",
    description: "Handcrafted pipe cleaner hairbands adorned with delicate pearls and intricate floral designs. Lightweight, comfortable, and elegant.",
    image: IMAGES.roseHairband,
    features: ["Lightweight & comfortable", "Pearl embellishments", "Available in multiple colors"],
    badge: "Made to Order",
    price: "Starting ₹249",
  },
  {
    id: "clips",
    title: "Hair Clips & Combs",
    description: "Delicate hair clips and decorative combs featuring miniature floral arrangements. Gold-toned hardware paired with soft pastel petals.",
    image: IMAGES.details,
    features: ["Secure gold-tone clips", "Miniature floral details", "Versatile styling"],
    badge: "Made to Order",
    price: "Starting ₹149",
  },
];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Product Lightbox Modal */
function ProductLightbox({ product, onClose }: { product: typeof COLLECTIONS[0] | null; onClose: () => void }) {
  if (!product) return null;

  const whatsappInquiryUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'm interested in ordering the ${product.title} (${product.price}). Can you please share customization details?`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 bg-[#faf8f5] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#e8e0d8] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-[#2d1a2d]"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:min-h-[460px] overflow-hidden bg-[#f5f0eb]">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-[#4a2040] text-[#faf8f5]">
                  {product.badge}
                </span>
                <span className="text-[11px] tracking-[0.1em] font-medium text-[#4a2040]">
                  {product.price}
                </span>
              </div>
              <h3
                className="text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.15] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
              >
                {product.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-[#6b5a5a] mb-6">{product.description}</p>
              <ul className="mb-8 space-y-2.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[13px] text-[#6b5a5a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2040]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#e8e0d8]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-300 group"
              >
                <MessageCircle size={16} />
                Order via WhatsApp
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {product.instagramUrl && (
                <a
                  href={product.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#e1306c] text-white text-[12px] tracking-[0.15em] uppercase hover:bg-[#c1285d] transition-colors duration-300 group"
                >
                  <Instagram size={16} />
                  View Reel on Instagram
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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
  const [lightboxProduct, setLightboxProduct] = useState<typeof COLLECTIONS[0] | null>(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["collections", "story", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = useCallback((id: string) => {
    const product = COLLECTIONS.find((c) => c.id === id);
    if (product) setLightboxProduct(product);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d1a2d]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Product Lightbox */}
      <AnimatePresence>
        {lightboxProduct && (
          <ProductLightbox product={lightboxProduct} onClose={() => setLightboxProduct(null)} />
        )}
      </AnimatePresence>

      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e0d8]/80 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-2xl sm:text-3xl tracking-[0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
            >
              Poshsaaz
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {[
              { label: "Collections", href: "#collections" },
              { label: "Product Catalog", href: "/products", isRoute: true },
              { label: "Our Story", href: "#story" },
              { label: "Custom Orders", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (!item.isRoute) {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                  activeSection === item.label.toLowerCase().replace(" ", "")
                    ? "text-[#4a2040] font-semibold"
                    : "text-[#6b5a5a] hover:text-[#4a2040]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a2040] text-[#faf8f5] text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-[#33142c] transition-colors"
            >
              <MessageCircle size={14} className="text-[#25d366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#4a2040]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#faf8f5] border-t border-[#e8e0d8] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {[
                  { label: "Collections", href: "#collections" },
                  { label: "Product Catalog", href: "/products", isRoute: true },
                  { label: "Our Story", href: "#story" },
                  { label: "Custom Orders", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg text-[#2d1a2d] py-1 font-normal flex items-center justify-between"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    onClick={(e) => {
                      if (!item.isRoute) {
                        e.preventDefault();
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                      setMenuOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} className="text-[#8b6f6f]" />
                  </a>
                ))}
                <div className="pt-3 border-t border-[#e8e0d8]">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.1em] uppercase font-medium"
                  >
                    <MessageCircle size={16} />
                    WhatsApp ({PHONE_NUMBER})
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-28 pt-28 overflow-hidden bg-[#faf8f5]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Poshsaaz handcrafted floral accessories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/85 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/70 via-[#faf8f5]/20 to-transparent sm:w-1/2" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full"
        >
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-4"
            >
              Handcrafted in Kashmir
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-[clamp(2.75rem,8vw,6rem)] leading-[1.03] mb-6 font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
            >
              Where petals
              <br />
              <em className="font-normal italic text-[#4a2040]">bloom forever</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[15px] sm:text-[16px] leading-[1.75] text-[#5c4a4a] mb-8 max-w-lg"
            >
              Handmade floral accessories, curtain holdbacks, everlasting bouquets, and phone covers sculpted with love from pipe cleaner chenille stems in Kashmir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase text-[#4a2040] font-semibold hover:gap-4 transition-all duration-300 py-2 border-b border-[#4a2040]"
              >
                <span>Explore Collections</span>
                <ArrowDown size={14} />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#33142c] transition-colors"
              >
                <span>Product Catalog</span>
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Signature Collections Showcase */}
      <section id="collections" className="py-24 sm:py-36 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
            <RevealSection>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-3">Signature Creations</p>
              <h2
                className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] font-light max-w-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
              >
                Each piece, a quiet
                <br />
                <em className="font-normal italic text-[#4a2040]">celebration</em>
              </h2>
            </RevealSection>

            <RevealSection delay={0.1}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#4a2040] font-medium hover:gap-3 transition-all"
              >
                <span>Browse Entire Catalog</span>
                <ArrowUpRight size={15} />
              </Link>
            </RevealSection>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8">
            {/* 1. Large Left - Curtain Tieback (New) */}
            <RevealSection className="md:col-span-7" delay={0.1}>
              <motion.div
                onClick={() => openLightbox("tiebacks")}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="block group relative cursor-pointer"
              >
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-[#f0ebe5]">
                  <img
                    src={IMAGES.tieback}
                    alt="Floral Curtain Tiebacks"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium">New Arrival</span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹299</span>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                      Floral Curtain Tiebacks
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Magnetic pastel floral holdbacks with pearl accents</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1" />
                </div>
              </motion.div>
            </RevealSection>

            {/* 2. Right Top - Bouquets */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <RevealSection delay={0.2}>
                <motion.div
                  onClick={() => openLightbox("bouquets")}
                  whileHover={{ scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="block group relative cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-[#f0ebe5]">
                    <img
                      src={IMAGES.bouquets}
                      alt="Artisan Bouquets"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                      <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium">Custom Order</span>
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹199</span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                        Everlasting Bouquets
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Lavender, sunflowers & roses that never wilt</p>
                    </div>
                    <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors mt-1" />
                  </div>
                </motion.div>
              </RevealSection>
            </div>

            {/* 3. Three-column grid below */}
            <RevealSection className="md:col-span-4" delay={0.1}>
              <motion.div
                onClick={() => openLightbox("bookmarks")}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="block group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#f0ebe5]">
                  <img
                    src={IMAGES.bookmark}
                    alt="Handmade Bookmarks"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium">Made to Order</span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹249</span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                      Handmade Bookmarks
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Floral stems with satin tassels for readers</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors mt-1" />
                </div>
              </motion.div>
            </RevealSection>

            <RevealSection className="md:col-span-4" delay={0.2}>
              <motion.div
                onClick={() => openLightbox("mobile")}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="block group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#f0ebe5]">
                  <img
                    src={IMAGES.mobile}
                    alt="3D Floral Mobile Covers"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium">Custom Order</span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹599</span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                      3D Mobile Covers
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Custom phone cases with 3D chenille florals</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors mt-1" />
                </div>
              </motion.div>
            </RevealSection>

            <RevealSection className="md:col-span-4" delay={0.3}>
              <motion.div
                onClick={() => openLightbox("hairbands")}
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="block group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#f0ebe5]">
                  <img
                    src={IMAGES.roseHairband}
                    alt="Floral Hairbands"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.12em] uppercase font-medium">Made to Order</span>
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹249</span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                      Floral Hairbands
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Pearls & petals on soft velvet bands</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors mt-1" />
                </div>
              </motion.div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="py-7 border-y border-[#e8e0d8] overflow-hidden bg-[#faf8f5]">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-14 whitespace-nowrap"
        >
          {Array(12).fill(null).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(1.1rem,2.5vw,1.8rem)] tracking-wide font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#bda9a0" }}
            >
              Handmade &nbsp;&middot;&nbsp; Kashmir &nbsp;&middot;&nbsp; Pearls &nbsp;&middot;&nbsp; Petals &nbsp;&middot;&nbsp; Everlasting &nbsp;&middot;&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* Story & Craftsmanship Section */}
      <section id="story" className="py-24 sm:py-36 px-6 md:px-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <RevealSection className="md:col-span-6">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-4">Our Story</p>
              <h2
                className="text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.12] mb-8 font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
              >
                Crafted with patience,
                <br />
                <em className="font-normal italic text-[#4a2040]">worn with pride</em>
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a] mb-6">
                From the valleys of Kashmir, each Poshsaaz creation is born from hours of careful handwork — pipe cleaners twisted into delicate florals, pearls placed one by one, and colors chosen to complement every occasion.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a]">
                We don't just make accessories. We craft keepsakes — pieces that carry the warmth of hands that made them, blooming forever without wilting.
              </p>
            </RevealSection>

            <RevealSection className="md:col-span-6" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-[#f0ebe5] border border-[#e8e0d8]">
                  <img src={IMAGES.craftsmanship} alt="Craftsmanship process" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 md:w-52 md:h-52 overflow-hidden shadow-xl border-4 border-[#faf8f5] hidden sm:block">
                  <img src={IMAGES.tieback} alt="Curtain tieback detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Custom Orders & WhatsApp CTA */}
      <section id="contact" className="py-24 sm:py-36 px-6 md:px-12 bg-[#faf8f5] border-t border-[#e8e0d8]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className="md:col-span-7">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-4">Custom Concierge</p>
                <h2
                  className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] mb-6 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
                >
                  Let us create something
                  <br />
                  <em className="font-normal italic text-[#4a2040]">just for you</em>
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a] mb-10 max-w-lg">
                  Every piece can be tailored — choose your flowers, your colors, your occasion. Connect directly with our artisan on WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I'd like to place a custom order.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-300 group"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp ({PHONE_NUMBER})</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#4a2040] text-[#4a2040] text-[12px] tracking-[0.15em] uppercase hover:bg-[#4a2040] hover:text-[#faf8f5] transition-all duration-300"
                  >
                    <span>Custom Inquiry Form</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 hidden md:block">
                <div className="aspect-[4/5] overflow-hidden border border-[#e8e0d8]">
                  <img
                    src={IMAGES.packaging}
                    alt="Custom gift packaging"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${PHONE_NUMBER}`}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 p-3.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.a>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 border-t border-[#e8e0d8] bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span
                className="text-2xl block mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
              >
                Poshsaaz
              </span>
              <p className="text-[13px] text-[#8b6f6f]">Handmade with love, from Kashmir &bull; Direct: {PHONE_NUMBER}</p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="https://www.instagram.com/poshsaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.08em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors"
              >
                Instagram
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.08em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href="/products"
                className="text-[12px] tracking-[0.08em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors"
              >
                Catalog
              </Link>
            </div>
            <p className="text-[11px] text-[#b0a0a0]">
              &copy; {new Date().getFullYear()} Poshsaaz. Kashmir, India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
