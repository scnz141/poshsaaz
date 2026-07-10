import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, ArrowUpRight } from "lucide-react";

const IMAGES = {
  hero: "/manus-storage/hero_light_premium_e6730c17.png",
  hairbands: "/manus-storage/collection_hairbands_light_4f1cedc3.png",
  bouquets: "/manus-storage/collection_bouquets_light_d773206d.png",
  details: "/manus-storage/collection_details_light_2767e0bf.png",
  packaging: "/manus-storage/collection_packaging_light_3077cd31.png",
};

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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

      {/* Hero Section - Asymmetric Layout */}
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

      {/* Collections - Asymmetric Editorial Grid */}
      <section id="collections" className="py-28 md:py-44 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-3">
              Collections
            </p>
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
              <motion.a
                href="#"
                whileHover={{ scale: 0.985 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="block group relative"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={IMAGES.hairbands}
                    alt="Floral Hairbands"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3
                      className="text-2xl mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                    >
                      Floral Hairbands
                    </h3>
                    <p className="text-[13px] text-[#8b6f6f]">Pearls & petals, woven by hand</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1"
                  />
                </div>
              </motion.a>
            </RevealSection>

            {/* Right column - stacked */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              <RevealSection delay={0.2}>
                <motion.a
                  href="#"
                  whileHover={{ scale: 0.985 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block group relative"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={IMAGES.bouquets}
                      alt="Artisan Bouquets"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3
                        className="text-xl mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                      >
                        Artisan Bouquets
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Everlasting blooms, gifted with love</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1"
                    />
                  </div>
                </motion.a>
              </RevealSection>

              <RevealSection delay={0.3}>
                <motion.a
                  href="#"
                  whileHover={{ scale: 0.985 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block group relative"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={IMAGES.details}
                      alt="Intricate Details"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3
                        className="text-xl mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                      >
                        Hair Clips & Combs
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Delicate details, timeless grace</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1"
                    />
                  </div>
                </motion.a>
              </RevealSection>
            </div>
          </div>

          {/* Full-width piece */}
          <RevealSection className="mt-8" delay={0.2}>
            <motion.a
              href="#"
              whileHover={{ scale: 0.995 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="block group relative"
            >
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={IMAGES.packaging}
                  alt="Premium Packaging"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s] ease-out"
                />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3
                    className="text-2xl mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                  >
                    Gift Collections
                  </h3>
                  <p className="text-[13px] text-[#8b6f6f]">Thoughtfully wrapped, ready to delight</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 mt-1"
                />
              </div>
            </motion.a>
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

      {/* Story Section - Asymmetric */}
      <section id="story" className="py-28 md:py-44 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <RevealSection className="md:col-span-5 md:col-start-1">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-4">
                Our Story
              </p>
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
                  <img
                    src={IMAGES.details}
                    alt="Craftsmanship details"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Small accent image */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 overflow-hidden shadow-xl hidden md:block">
                  <img
                    src={IMAGES.bouquets}
                    alt="Bouquet detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-28 md:py-44 px-6 md:px-10 bg-[#f5f0eb]">
        <div className="max-w-[1400px] mx-auto">
          <RevealSection>
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-4">
                Custom Orders
              </p>
              <h2
                className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
              >
                Let us create something
                <br />
                <em>just for you</em>
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#6b5a5a] mb-10 max-w-lg">
                Every piece can be tailored — choose your colors, your flowers,
                your occasion. We'd love to hear your vision.
              </p>
              <a
                href="mailto:hashimdar141@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-500 group"
              >
                Get in Touch
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
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
              {["Instagram", "Facebook"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[12px] tracking-[0.06em] uppercase text-[#8b6f6f] hover:text-[#4a2040] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-[#b0a0a0]">
              &copy; 2024 Poshsaaz. Kashmir, India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
