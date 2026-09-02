import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, ArrowUpRight, MessageCircle, ZoomIn, Instagram } from "lucide-react";
import { Link } from "wouter";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

const IMAGES = {
  hero: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754085/poshsaaz/hero.jpg",
  bouquets: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951310/poshsaaz/bouquet_royal_crimson_pearl_real.png",
  tieback: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947695/poshsaaz/curtain_holder_green_yellow_lux.jpg",
  flowerPot: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950863/poshsaaz/flower_pot_sunflower_real.jpg",
  carCharm: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947702/poshsaaz/car_charm_lavender_heart_lux.jpg",
  bookmark: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955265/poshsaaz/bookmarks_five_colors_row_real.png",
  charger: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924156/poshsaaz/charger_cover_luxury.jpg",
  mobile: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787924159/poshsaaz/mobile_cover_luxury.jpg",
  keychain: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787950983/poshsaaz/keychain_shaped_collection_branded.jpg",
  wall: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951383/poshsaaz/wall_hanging_pink_cascading_real.jpg",
  handCuff: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787947712/poshsaaz/hand_cuff_black_daisy_lux.jpg",
  details: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787955273/poshsaaz/hairband_clips_red_white_4piece_real.jpg",
  packaging: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951335/poshsaaz/bouquet_pink_blossoms_real.png",
  craftsmanship: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1784754105/poshsaaz/craftsmanship.jpg",
  roseHairband: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951198/poshsaaz/hair_pin_band_tricolor_set.jpg",
  earrings: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787951987/poshsaaz/earrings_black_velvet_gold_drop_clean.png",
};

const COLLECTIONS = [
  {
    id: "tiebacks",
    title: "Floral Curtain Tiebacks",
    description: "Handcrafted chenille velvet floral curtain tiebacks with sculpted petals, centered pearls, and flexible holdback designs. Elevates living rooms and master suites with everlasting spring charm.",
    image: IMAGES.tieback,
    features: ["Amber striped & royal violet petals", "Magnetic & cord wrap closures", "Protects drapery fabric", "Handcrafted in Kashmir"],
    badge: "New Arrival",
    price: "₹200 – ₹300 / pc",
  },
  {
    id: "flower-pots",
    title: "Handmade Flower Pots & Planters",
    description: "Freestanding chenille flower pots featuring plush sunflowers, striped candy heart planters, and royal blue pearl desk blooms that never need watering.",
    image: IMAGES.flowerPot,
    features: ["Sunflowers & candy heart planters", "Pearl-rimmed royal blue pots", "Freestanding home & desk decor", "Everlasting botanical art"],
    badge: "New Arrival",
    price: "₹400",
  },
  {
    id: "car-charms",
    title: "Car Charms & Mini Planters",
    description: "Adorable miniature flower planters in lavender heart, white & brown, and peppermint styles — designed for car dashboards, rearview mirrors, study desks, and compact spaces.",
    image: IMAGES.carCharm,
    features: ["Lavender heart & peppermint styles", "White & brown woodland charm", "Dashboard & desktop size", "₹250"],
    badge: "New Arrival",
    price: "₹250",
  },
  {
    id: "earrings",
    title: "Handmade Velvet Earrings",
    description: "Plush velvet chenille botanical blossom dangles, coquette bows, and heart studs embellished with pearls and metallic gold spheres on silk presentation.",
    image: IMAGES.earrings,
    features: ["Botanical dangles & coquette bows", "Centered pearls & gold spheres", "Hypoallergenic lightweight hooks/studs", "Signature Poshsaaz presentation"],
    badge: "New Arrival",
    price: "₹150 – ₹160",
  },
  {
    id: "money-bouquets",
    title: "Currency Origami Bouquets",
    description: "Bespoke money bouquets with hand-folded currency note petals, plush chenille flower core, and luxury gold-bordered matte black wrapping for high-prestige celebrations.",
    image: "https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954187/poshsaaz/currency_twenty_fan_live.jpg",
    features: ["Precision origami note petals", "Handmade chenille floral center", "Luxury gold-edge wrapping", "Custom cash denominations"],
    badge: "Prestige Gift",
    price: "Starting ₹1,500",
  },
  {
    id: "wall",
    title: "Cascading Wall Hangings & Wreaths",
    description: "Grand double-ring wall hangings with 25+ cascading velvet roses across signature colorways, alongside circular autumn botanical wall wreaths.",
    image: IMAGES.wall,
    features: ["25+ handmade velvet roses", "Double wrapped hoop frame", "Botanical wall wreaths", "₹500 – ₹1,000"],
    badge: "Masterpiece",
    price: "₹500 – ₹1,000",
    instagramUrl: "https://www.instagram.com/p/Dag3gc1ShDn/",
  },
  {
    id: "hand-cuffs",
    title: "Floral Hand Cuffs & Bracelets",
    description: "Handcrafted continuous daisy chain wrist cuffs and sky blue velvet roses draped on lustrous pearl bead strands.",
    image: IMAGES.handCuff,
    features: ["Noir velvet daisy chains", "Pearl bead wrist strands", "Skin-safe soft chenille", "₹200"],
    badge: "New Arrival",
    price: "₹200",
  },
  {
    id: "bouquets",
    title: "Everlasting Bouquets",
    description: "Opulent crimson velvet bouquets in gold-crested black wrap, monochromatic pearl daisy arrangements, and peppermint daisy cup bouquets.",
    image: IMAGES.bouquets,
    features: ["Crimson velvet & pearl roses", "Monochrome pastel daisy bundles", "Never wilts or fades", "₹500 – ₹800"],
    badge: "Best Seller",
    price: "₹500 – ₹800",
  },
  {
    id: "bookmarks",
    title: "Handmade Floral Bookmarks",
    description: "Slender handmade flower stem bookmarks crowned with pearl centers that rest flat between pages. Perfect companion for books and journals.",
    image: IMAGES.bookmark,
    features: ["Page-safe slim design", "Lustrous white pearl center", "Available in 6 vibrant colors", "₹150"],
    badge: "New Arrival",
    price: "₹150",
    instagramUrl: "https://www.instagram.com/reel/DbOTtopyZaa/",
  },
  {
    id: "charger",
    title: "Charger Cable Covers",
    description: "Handmade with love, crafted to protect. Velvet floral cable protector coiled with blush pink blossoms and pearl beads.",
    image: IMAGES.charger,
    features: ["Protective spiral velvet wrap", "Pearl blossom design", "Universal cable fit", "Starting ₹300"],
    badge: "Custom Order",
    price: "Starting ₹300",
    instagramUrl: "https://www.instagram.com/reel/Dapkh2mSd3Z/",
  },
  {
    id: "mobile",
    title: "3D Floral Mobile Covers",
    description: "Carry art in your pocket. Soft 3D chenille flower bouquet sculpted directly onto crystal clear protective phone case.",
    image: IMAGES.mobile,
    features: ["3D raised velvet floral texture", "Drop-protected transparent case", "Custom fitted for any phone", "Starting ₹300"],
    badge: "Custom Order",
    price: "Starting ₹300",
    instagramUrl: "https://www.instagram.com/reel/Dah4wETy-ku/",
  },
  {
    id: "keychains",
    title: "Custom Keychains & Charms",
    description: "Miniature flower bouquets, 3D potted plants, phone charms, and playful shaped charms (Lollipop, Mouse, Rainbow).",
    image: IMAGES.keychain,
    features: ["Mini bouquets & potted plants", "Shaped novelty charms", "Mobile phone lanyard charms", "₹100 – ₹200"],
    badge: "New Arrival",
    price: "₹100 – ₹200",
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
    price: "₹100 – ₹350",
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 bg-[#faf8f5] max-w-4xl w-full max-h-[92dvh] overflow-y-auto rounded-3xl border border-[#e8e0d8] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Always visible mobile-friendly floating close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-[#2d1a2d] shadow-md transition-transform active:scale-90"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 flex-grow">
          {/* Responsive Product Image container */}
          <div className="relative aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[440px] max-h-[42vh] md:max-h-none overflow-hidden bg-[#f5f0eb]">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 md:hidden">
              <span className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] font-medium shadow-sm">
                {product.badge}
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#4a2040] shadow-sm">
                {product.price}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="hidden md:flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#4a2040] text-[#faf8f5] font-medium">
                  {product.badge}
                </span>
                <span className="text-[11px] tracking-[0.1em] font-medium text-[#4a2040]">
                  {product.price}
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] mb-3 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
              >
                {product.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#6b5a5a] mb-5">{product.description}</p>
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[13px] text-[#6b5a5a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a2040] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#e8e0d8]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-md group"
              >
                <MessageCircle size={17} />
                <span>Order via WhatsApp</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {product.instagramUrl && (
                <a
                  href={product.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-6 rounded-full bg-[#faf0f3] text-[#e1306c] border border-[#e1306c]/30 text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#e1306c] hover:text-white active:scale-[0.98] transition-all group"
                >
                  <Instagram size={15} />
                  <span>View Reel on Instagram</span>
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
      setScrolled(window.scrollY > 30);
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

  // Lock body scroll on mobile when menu or modal is open
  useEffect(() => {
    if (menuOpen || lightboxProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxProduct]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e0d8]/80 py-3.5 sm:py-4 shadow-sm"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className="text-2xl sm:text-3xl tracking-[0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
            >
              Poshsaaz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {[
              { label: "Collections", href: "#collections" },
              { label: "Wedding Atelier", href: "#wedding-bouquets" },
              { label: "Product Catalog", href: "/products", isRoute: true },
              { label: "Our Story", href: "#story" },
              { label: "Custom Concierge", href: "/contact", isRoute: true },
            ].map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 text-[#6b5a5a] hover:text-[#4a2040]"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                    activeSection === item.label.toLowerCase().replace(" ", "")
                      ? "text-[#4a2040] font-semibold"
                      : "text-[#6b5a5a] hover:text-[#4a2040]"
                  }`}
                >
                  {item.label}
                </a>
              )
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

          {/* Mobile Menu Trigger Button (Accessible 44x44px target) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-white/80 border border-[#e8e0d8] text-[#4a2040] hover:bg-[#4a2040]/10 active:scale-90 transition-all shadow-sm"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Full-Screen Mobile Drawer Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[60px] bg-black/40 backdrop-blur-xs z-40 md:hidden"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-50 md:hidden bg-[#faf8f5] border-b border-[#e8e0d8] shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
              >
                <div className="px-6 py-6 flex flex-col gap-3">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#8b6f6f] font-semibold">Navigation</p>
                  
                  <Link
                    href="/products"
                    onClick={() => setMenuOpen(false)}
                    className="p-3 rounded-2xl bg-[#4a2040] text-[#faf8f5] flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
                  >
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#e8c0d5] font-medium">Browse All 70+ Items</p>
                      <p className="text-xl font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Product Catalog</p>
                    </div>
                    <ArrowUpRight size={18} className="text-[#faf8f5]" />
                  </Link>

                  <div className="space-y-1 pt-1">
                    {[
                      { label: "Signature Collections", href: "#collections" },
                      { label: "Wedding Atelier (Money Bouquets)", href: "#wedding-bouquets" },
                      { label: "Our Story & Craft", href: "#story" },
                      { label: "Custom Inquiry Form", href: "/contact", isRoute: true },
                    ].map((item) => (
                      item.isRoute ? (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-lg text-[#2d1a2d] py-2.5 px-3 rounded-xl hover:bg-black/5 flex items-center justify-between transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight size={15} className="text-[#8b6f6f]" />
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.querySelector(item.href);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                            setMenuOpen(false);
                          }}
                          className="text-lg text-[#2d1a2d] py-2.5 px-3 rounded-xl hover:bg-black/5 flex items-center justify-between transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          <span>{item.label}</span>
                          <ArrowDown size={14} className="text-[#8b6f6f]" />
                        </a>
                      )
                    ))}
                  </div>

                  {/* Direct Contact Buttons on Mobile */}
                  <div className="pt-3 border-t border-[#e8e0d8] flex flex-col gap-2.5">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.08em] font-medium shadow-sm active:scale-[0.98] transition-transform"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Chat ({PHONE_NUMBER})</span>
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#4a2040]/30 text-[#4a2040] text-[12px] tracking-[0.08em] font-medium hover:bg-[#4a2040]/5 active:scale-[0.98] transition-all"
                    >
                      <span>Direct Call: {PHONE_NUMBER}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-svh min-h-[100dvh] flex items-end pb-16 sm:pb-20 md:pb-28 pt-24 sm:pt-28 overflow-hidden bg-[#faf8f5]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Poshsaaz handcrafted floral accessories"
            className="w-full h-full object-cover object-center sm:object-[70%_center] filter contrast-[1.08] saturate-[1.2] brightness-[0.92]"
          />
          {/* Subtle directional warmth only on the left text zone; leaves the right-side bouquet 100% natural, rich, and unwashed */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[62%] md:w-[54%] bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/60 to-transparent pointer-events-none" />
          
          {/* Subtle bottom seam transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 w-full"
        >
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[10.5px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-3.5"
            >
              Handcrafted in Kashmir
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-[clamp(2.2rem,7.5vw,5.5rem)] leading-[1.04] mb-5 sm:mb-6 font-light break-words"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d", textWrap: "balance" }}
            >
              Where petals
              <br />
              <em className="font-normal italic text-[#4a2040]">bloom forever</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[14.5px] sm:text-[16px] leading-[1.75] text-[#5c4a4a] mb-7 sm:mb-8 max-w-lg"
            >
              Handmade floral accessories, curtain holdbacks, everlasting bouquets, and phone covers sculpted with love from pipe cleaner chenille stems in Kashmir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#33142c] active:scale-[0.98] transition-all shadow-md"
              >
                <span>Browse Entire Catalog</span>
                <ArrowUpRight size={15} />
              </Link>
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-[#4a2040]/30 hover:border-[#4a2040] text-[12px] tracking-[0.14em] uppercase text-[#4a2040] font-medium active:scale-[0.98] transition-all"
              >
                <span>Signature Pieces</span>
                <ArrowDown size={14} />
              </a>
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
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">₹200 – ₹300</span>
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
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">₹500 – ₹800</span>
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
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">₹150</span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-1 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}>
                      Handmade Bookmarks
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Five-color floral stems made for book lovers</p>
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
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">Starting ₹300</span>
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
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4a2040] text-[10px] tracking-[0.08em] font-medium">₹100 – ₹350</span>
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

      {/* Wedding Season Atelier: Currency Origami Bouquets */}
      <section id="wedding-bouquets" className="py-24 sm:py-36 px-6 md:px-12 bg-[#f7f4ee] border-y border-[#e8dfd5] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Editorial Section Header */}
          <RevealSection>
            <div className="max-w-3xl mb-16 sm:mb-20">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#8b6f6f] font-semibold mb-3">
                Wedding Season Atelier &bull; Shagun & Nikah Presentation
              </p>
              <h2
                className="text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[1.08] font-light text-[#2d1a2d] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A Grand Gesture in
                <br />
                <em className="font-normal italic text-[#4a2040]">Currency & Velvet</em>
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a]">
                In Kashmir, the tradition of presenting Shagun and Salami is an intimate blessing. Poshsaaz elevates this customary gift beyond the plain envelope — fifty to one hundred crisp Indian currency notes precision-folded into delicate origami petals around an everlasting velvet bloom, hand-wrapped in Korean gold-embossed noir paper.
              </p>
            </div>
          </RevealSection>

          {/* Exhibition Gallery: 2 Masterpiece Pieces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 mb-16 sm:mb-20">
            {/* Masterpiece 1: Fifty ₹20 Notes */}
            <RevealSection delay={0.1}>
              <div className="group flex flex-col">
                <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden bg-[#ebe4db] border border-[#ded5cb] relative shadow-sm">
                  <img
                    src="https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954187/poshsaaz/currency_twenty_fan_live.jpg"
                    alt="Fifty-Note Currency Origami Bouquet in ₹20 notes"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.14em] uppercase font-medium">
                      Wedding Special
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-1">
                      50 Banknotes &bull; Velvet Daisy Bloom
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl font-light text-[#2d1a2d]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      The 50-Note Circular Shagun Bouquet
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-lg sm:text-xl font-normal text-[#4a2040]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      ₹1,500
                    </span>
                    <p className="text-[11px] text-[#8b6f6f]">Includes ₹1,000 Cash</p>
                  </div>
                </div>

                <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a] mt-3 mb-5">
                  Fifty real ₹20 Indian rupee notes folded into a seamless radial flower disk, centered with an artisanal pearl-dusted white daisy in Korean gold-bordered black wrap.
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-[#e8dfd5]">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I would like to reserve the 50-Note (₹20) Currency Origami Bouquet for an upcoming wedding.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase font-semibold text-[#4a2040] hover:text-[#25d366] transition-colors"
                  >
                    <MessageCircle size={15} />
                    <span>Reserve on WhatsApp</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <Link
                    href="/products"
                    className="text-[12px] tracking-[0.12em] uppercase text-[#8b6f6f] hover:text-[#2d1a2d] transition-colors ml-auto"
                  >
                    View in Catalog
                  </Link>
                </div>
              </div>
            </RevealSection>

            {/* Masterpiece 2: ₹50 Notes */}
            <RevealSection delay={0.2}>
              <div className="group flex flex-col">
                <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden bg-[#ebe4db] border border-[#ded5cb] relative shadow-sm">
                  <img
                    src="https://res.cloudinary.com/dtcy9bbux/image/upload/v1787954192/poshsaaz/currency_fifty_fan_live.jpg"
                    alt="Tiered ₹50 Notes Currency Origami Bouquet"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#4a2040] text-[#faf8f5] text-[10px] tracking-[0.14em] uppercase font-medium">
                      Wedding Special
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-1">
                      Fan-Tiered &bull; Imperial Purple Rose
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl font-light text-[#2d1a2d]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      The Royal Violet Nikah Bouquet
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-lg sm:text-xl font-normal text-[#4a2040]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      ₹1,500
                    </span>
                    <p className="text-[11px] text-[#8b6f6f]">Exclusive Presentation</p>
                  </div>
                </div>

                <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a] mt-3 mb-5">
                  Crisp peacock-blue ₹50 currency notes arranged in tiered fan layers around an imperial violet plush blossom, finished with scalloped gold wrapping and satin ribbons.
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-[#e8dfd5]">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I would like to reserve the ₹50 Currency Origami Bouquet for an upcoming wedding.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase font-semibold text-[#4a2040] hover:text-[#25d366] transition-colors"
                  >
                    <MessageCircle size={15} />
                    <span>Reserve on WhatsApp</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <Link
                    href="/products"
                    className="text-[12px] tracking-[0.12em] uppercase text-[#8b6f6f] hover:text-[#2d1a2d] transition-colors ml-auto"
                  >
                    View in Catalog
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Artisan Principles & Custom Denominations */}
          <RevealSection delay={0.3}>
            <div className="border-t border-[#e0d6cb] pt-12 sm:pt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12">
                <div>
                  <h4 className="text-lg sm:text-xl font-normal text-[#2d1a2d] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Intact, Spendable Banknotes
                  </h4>
                  <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a]">
                    Every banknote is folded strictly using origami techniques with zero staples, glue, or pins. Notes can be gently removed and spent anytime without damage.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-normal text-[#2d1a2d] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    An Everlasting Keepsake
                  </h4>
                  <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a]">
                    Unlike traditional fresh floral bouquets that wither within days, the central plush velvet bloom and Korean wrap endure as a lasting souvenir of the celebration.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-normal text-[#2d1a2d] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Bespoke High Denominations
                  </h4>
                  <p className="text-[13.5px] leading-[1.7] text-[#5c4a4a]">
                    For grand bridal and groom presentations, we create custom pieces using crisp ₹100 or ₹500 notes (₹5,000 to ₹50,000+ total cash value) to match your wedding color palette.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 bg-white/70 border border-[#ded5cb] rounded-2xl">
                <div>
                  <p className="text-base font-medium text-[#2d1a2d]">Planning a Wedding or Nikah Presentation?</p>
                  <p className="text-[13px] text-[#5c4a4a] mt-0.5">Slots are reserved in advance to allow meticulous handcrafting for each wedding date.</p>
                </div>
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Poshsaaz! I would like to inquire about wedding season Currency Origami Bouquets.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-7 py-3.5 rounded-full bg-[#4a2040] text-[#faf8f5] text-[11.5px] tracking-[0.14em] uppercase font-medium hover:bg-[#33142c] active:scale-95 transition-all shadow-sm flex-shrink-0"
                >
                  Consult on WhatsApp
                </a>
              </div>
            </div>
          </RevealSection>
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
