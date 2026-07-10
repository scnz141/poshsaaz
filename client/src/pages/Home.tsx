import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, ArrowUpRight, MessageCircle, ZoomIn } from "lucide-react";

const IMAGES = {
  hero: "/manus-storage/hero_light_premium_e6730c17.png",
  hairbands: "/manus-storage/collection_hairbands_light_4f1cedc3.png",
  bouquets: "/manus-storage/collection_bouquets_light_d773206d.png",
  details: "/manus-storage/collection_details_light_2767e0bf.png",
  packaging: "/manus-storage/collection_packaging_light_3077cd31.png",
};

const COLLECTIONS = [
  {
    id: "hairbands",
    title: "Floral Hairbands",
    description: "Handcrafted pipe cleaner hairbands adorned with delicate pearls and intricate floral designs. Each piece is carefully shaped and assembled to create a unique, lightweight accessory perfect for everyday elegance or special occasions.",
    image: IMAGES.hairbands,
    features: ["Lightweight & comfortable", "Pearl embellishments", "Available in multiple colors"],
  },
  {
    id: "bouquets",
    title: "Artisan Bouquets",
    description: "Everlasting floral bouquets crafted from pipe cleaners — blooms that never wilt. Perfect as home decor, thoughtful gifts, or wedding accessories that preserve the beauty of flowers forever.",
    image: IMAGES.bouquets,
    features: ["Never wilts", "Custom color combinations", "Perfect for gifting"],
  },
  {
    id: "clips",
    title: "Hair Clips & Combs",
    description: "Delicate hair clips and decorative combs featuring miniature floral arrangements. Gold-toned hardware paired with soft pastel petals creates accessories that add a touch of handmade charm to any hairstyle.",
    image: IMAGES.details,
    features: ["Secure gold-tone clips", "Miniature floral details", "Versatile styling"],
  },
  {
    id: "gifts",
    title: "Gift Collections",
    description: "Beautifully curated gift sets presented in elegant packaging. Each collection combines our finest pieces — hairbands, clips, and bouquets — into thoughtful arrangements ready to delight on any occasion.",
    image: IMAGES.packaging,
    features: ["Premium packaging", "Curated combinations", "Ready to gift"],
  },
];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Product Lightbox Modal */
function ProductLightbox({ product, onClose }: { product: typeof COLLECTIONS[0] | null; onClose: () => void }) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 bg-[#faf8f5] max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300"
        >
          <X size={18} className="text-[#2d1a2d]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-3">Collection</p>
            <h3
              className="text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
            >
              {product.title}
            </h3>
            <p className="text-[14px] leading-[1.8] text-[#6b5a5a] mb-8">{product.description}</p>
            <ul className="mb-10 space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-[#6b5a5a]">
                  <span className="w-1 h-1 rounded-full bg-[#4a2040]" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/917006862517?text=Hi!%20I'm%20interested%20in%20your%20handmade%20creations.%20Can%20I%20know%20more%20about%20this%20collection?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-500 group w-fit"
            >
              <MessageCircle size={16} />
              Inquire on WhatsApp
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* WhatsApp Floating Button */
function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          href="https://wa.me/917006862517?text=Hi!%20I'm%20interested%20in%20your%20handmade%20creations."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          style={{ borderRadius: "50px" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[13px] font-medium hidden sm:inline">Order Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxProduct, setLightboxProduct] = useState<typeof COLLECTIONS[0] | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = useCallback((id: string) => {
    const product = COLLECTIONS.find((c) => c.id === id);
    if (product) setLightboxProduct(product);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Product Lightbox */}
      <AnimatePresence>
        {lightboxProduct && (
          <ProductLightbox product={lightboxProduct} onClose={() => setLightboxProduct(null)} />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span
              className="text-xl tracking-[0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
            >
              Poshsaaz
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {["Collections", "Story", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] tracking-[0.06em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors duration-300"
                style={{ fontWeight: 400 }}
              >
                {item}
              </a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#4a2040]">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#faf8f5] border-t border-[#e8e0d8] overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {["Collections", "Story", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg text-[#4a2040]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden bg-[#faf8f5]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Poshsaaz handcrafted floral accessories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/40 to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full"
        >
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-5"
            >
              Handcrafted in Kashmir
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
            >
              Where petals
              <br />
              <em className="font-normal" style={{ fontStyle: "italic" }}>bloom forever</em>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase text-[#4a2040] hover:gap-4 transition-all duration-500"
              >
                Explore
                <ArrowDown size={14} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-28 md:py-44 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-3">Collections</p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] mb-20 max-w-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
            >
              Each piece, a quiet
              <br />
              <em>celebration</em>
            </h2>
          </RevealSection>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Large left */}
            <RevealSection className="md:col-span-7" delay={0.1}>
              <motion.div
                onClick={() => openLightbox("hairbands")}
                whileHover={{ scale: 0.985 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="block group relative cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={IMAGES.hairbands}
                    alt="Floral Hairbands"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}>
                      Floral Hairbands
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Pearls & petals, woven by hand</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1" />
                </div>
              </motion.div>
            </RevealSection>

            {/* Right column */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              <RevealSection delay={0.2}>
                <motion.div
                  onClick={() => openLightbox("bouquets")}
                  whileHover={{ scale: 0.985 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block group relative cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={IMAGES.bouquets}
                      alt="Artisan Bouquets"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                      <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}>
                        Artisan Bouquets
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Everlasting blooms, gifted with love</p>
                    </div>
                    <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1" />
                  </div>
                </motion.div>
              </RevealSection>

              <RevealSection delay={0.3}>
                <motion.div
                  onClick={() => openLightbox("clips")}
                  whileHover={{ scale: 0.985 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block group relative cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={IMAGES.details}
                      alt="Hair Clips & Combs"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                      <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}>
                        Hair Clips & Combs
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Delicate details, timeless grace</p>
                    </div>
                    <ArrowUpRight size={16} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1" />
                  </div>
                </motion.div>
              </RevealSection>
            </div>
          </div>

          {/* Full-width piece */}
          <RevealSection className="mt-8" delay={0.2}>
            <motion.div
              onClick={() => openLightbox("gifts")}
              whileHover={{ scale: 0.995 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="block group relative cursor-pointer"
            >
              <div className="aspect-[21/9] overflow-hidden relative">
                <img
                  src={IMAGES.packaging}
                  alt="Gift Collections"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}>
                    Gift Collections
                  </h3>
                  <p className="text-[13px] text-[#8b6f6f]">Thoughtfully wrapped, ready to delight</p>
                </div>
                <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1" />
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-[#e8e0d8] overflow-hidden bg-[#faf8f5]">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {Array(12).fill(null).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(1.2rem,3vw,2rem)] tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#c9b8b0" }}
            >
              Handmade &nbsp;&middot;&nbsp; Kashmir &nbsp;&middot;&nbsp; Pearls &nbsp;&middot;&nbsp; Petals &nbsp;&middot;&nbsp; Elegance &nbsp;&middot;&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-28 md:py-44 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <RevealSection className="md:col-span-5 md:col-start-1">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-4">Our Story</p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
              >
                Crafted with patience,
                <br />
                <em>worn with pride</em>
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#6b5a5a] mb-6">
                From the valleys of Kashmir, each Poshsaaz creation is born from hours
                of careful handwork — pipe cleaners twisted into delicate florals,
                pearls placed one by one, colors chosen to complement every occasion.
              </p>
              <p className="text-[15px] leading-[1.8] text-[#6b5a5a]">
                We don't just make accessories. We craft keepsakes — pieces that carry
                the warmth of hands that made them.
              </p>
            </RevealSection>

            <RevealSection className="md:col-span-6 md:col-start-7" delay={0.2}>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={IMAGES.details} alt="Craftsmanship details" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 overflow-hidden shadow-xl hidden md:block">
                  <img src={IMAGES.bouquets} alt="Bouquet detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-28 md:py-44 px-6 md:px-10 bg-[#faf8f5] border-t border-[#e8e0d8]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className="md:col-span-6">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-5">Custom Orders</p>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
              >
                Let us create something
                <br />
                <em>just for you</em>
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#6b5a5a] mb-10">
                Every piece can be tailored — choose your colors, your flowers,
                your occasion. We'd love to hear your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <a
                  href="https://wa.me/917006862517?text=Hi!%20I'd%20like%20to%20place%20a%20custom%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-500 group"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:hashimdar141@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#4a2040] text-[#4a2040] text-[12px] tracking-[0.15em] uppercase hover:bg-[#4a2040] hover:text-[#faf8f5] transition-all duration-500 group"
                >
                  Email Us
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
              </div>
              <div className="md:col-span-5 md:col-start-8 hidden md:block">
                <div className="aspect-[4/5] overflow-hidden">
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

      {/* Footer */}
      <footer className="py-16 px-6 md:px-10 border-t border-[#e8e0d8] bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span
                className="text-xl block mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#4a2040" }}
              >
                Poshsaaz
              </span>
              <p className="text-[12px] text-[#8b6f6f]">Handmade with love, from Kashmir</p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="https://www.instagram.com/poshsaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.06em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/poshsaaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.06em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/917006862517"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.06em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-[11px] text-[#b0a0a0]">
              &copy; 2025 Poshsaaz. Kashmir, India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
