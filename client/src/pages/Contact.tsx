import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Send, MessageCircle, MapPin, Instagram, Sparkles, CheckCircle2, ArrowUpRight, Phone } from "lucide-react";
import { Link } from "wouter";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";
const DEFAULT_ITEM_TYPE = "Curtain Tiebacks (₹200 - ₹300)";
const EMPTY_FORM = {
  name: "",
  contactInfo: "",
  occasion: "",
  itemType: DEFAULT_ITEM_TYPE,
  message: "",
};

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

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.contactInfo.trim()) errs.contactInfo = "Please provide your phone number or WhatsApp";
    if (!form.message.trim()) errs.message = "Please share what you would like crafted";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const customWhatsAppUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'd like to discuss a custom handmade order.\n\nName: ${form.name || "Customer"}\nContact: ${form.contactInfo || "Not specified"}\nItem: ${form.itemType}\nOccasion: ${form.occasion || "General"}\nMessage: ${form.message || "I'd like custom colors and details."}`
  )}`;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d1a2d]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e0d8]/80">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-3.5 sm:py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[#4a2040] hover:opacity-80 active:scale-95 transition-all">
            <ArrowLeft size={18} />
            <span
              className="text-2xl tracking-[0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Poshsaaz
            </span>
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link href="/" className="text-[12px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors py-1">
              Home
            </Link>
            <Link href="/products" className="text-[12px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors py-1">
              Catalog
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a2040] text-white text-[11px] tracking-[0.1em] uppercase font-medium hover:bg-[#33142c] active:scale-95 transition-all"
            >
              <MessageCircle size={14} className="text-[#25d366]" />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 sm:pt-36 pb-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Left Info */}
            <RevealSection className="lg:col-span-5">
              <p className="text-[10.5px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-3">Direct Concierge</p>
              <h1
                className="text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.06] font-light mb-5 sm:mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d1a2d" }}
              >
                Let us create
                <br />
                <em className="font-normal italic text-[#4a2040]">together</em>
              </h1>

              <p className="text-[14.5px] sm:text-[16px] leading-[1.8] text-[#5c4a4a] mb-8 sm:mb-10">
                Whether you're looking for a bespoke wedding hairpiece, matching curtain holdbacks, personalized gift hampers, or custom floral colors — connect directly with our artisan.
              </p>

              <div className="space-y-3.5 mb-10">
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#e8e0d8] p-4 sm:p-5 rounded-2xl flex items-center justify-between hover:border-[#25d366] active:scale-[0.98] transition-all group block shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25d366]/10 flex items-center justify-center text-[#25d366] flex-shrink-0">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <p className="text-[10.5px] tracking-[0.12em] uppercase text-[#8b6f6f] font-semibold">Direct WhatsApp Chat</p>
                      <p className="text-[15px] font-semibold text-[#2d1a2d] group-hover:text-[#25d366] transition-colors">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#25d366] transition-colors" />
                </a>

                {/* Direct Call for Mobile */}
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="bg-white border border-[#e8e0d8] p-4 sm:p-5 rounded-2xl flex items-center justify-between hover:border-[#4a2040] active:scale-[0.98] transition-all group block shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4a2040]/10 flex items-center justify-center text-[#4a2040] flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10.5px] tracking-[0.12em] uppercase text-[#8b6f6f] font-semibold">Direct Phone Call</p>
                      <p className="text-[15px] font-semibold text-[#2d1a2d] group-hover:text-[#4a2040] transition-colors">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/poshsaaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#e8e0d8] p-4 sm:p-5 rounded-2xl flex items-center justify-between hover:border-[#e1306c] active:scale-[0.98] transition-all group block shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e1306c]/10 flex items-center justify-center text-[#e1306c] flex-shrink-0">
                      <Instagram size={22} />
                    </div>
                    <div>
                      <p className="text-[10.5px] tracking-[0.12em] uppercase text-[#8b6f6f] font-semibold">Instagram Stories & Reels</p>
                      <p className="text-[15px] font-semibold text-[#2d1a2d] group-hover:text-[#e1306c] transition-colors">@poshsaaz</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#e1306c] transition-colors" />
                </a>

                {/* Studio Location */}
                <div className="bg-white border border-[#e8e0d8] p-4 sm:p-5 rounded-2xl flex items-center gap-4 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-[#4a2040]/10 flex items-center justify-center text-[#4a2040] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10.5px] tracking-[0.12em] uppercase text-[#8b6f6f] font-semibold">Artisan Atelier</p>
                    <p className="text-[14px] text-[#2d1a2d]">Srinagar, Kashmir &bull; Worldwide Shipping</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right Custom Order Form */}
            <RevealSection className="lg:col-span-7" delay={0.2}>
              <div className="bg-white border border-[#e8e0d8] p-8 sm:p-12 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#25d366]/15 flex items-center justify-center text-[#25d366]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3
                      className="text-3xl font-light text-[#2d1a2d] mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      WhatsApp Message Ready
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#6b5a5a] mb-8 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#4a2040]">{form.name}</span>. Your details are prepared below. Send them on WhatsApp to complete your inquiry.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#20ba59] active:scale-95 transition-all shadow-md"
                      >
                        <MessageCircle size={17} />
                        <span>Send to WhatsApp</span>
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setErrors({}); }}
                        className="text-[12px] tracking-[0.12em] uppercase text-[#4a2040] font-medium hover:underline py-2"
                      >
                        Start Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-normal text-[#2d1a2d] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Custom Creation Request
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Fill in your details, then review and send them on WhatsApp</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10.5px] sm:text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ayesha"
                          className={`w-full px-4 py-3 rounded-xl bg-[#faf8f5] border ${errors.name ? "border-red-400" : "border-[#e8e0d8]"} text-[16px] sm:text-[14px] text-[#2d1a2d] placeholder:text-[#a08f8f] focus:outline-none focus:border-[#4a2040] transition-colors`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-[10.5px] sm:text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="text"
                          value={form.contactInfo}
                          onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
                          placeholder="e.g. +91 80827..."
                          className={`w-full px-4 py-3 rounded-xl bg-[#faf8f5] border ${errors.contactInfo ? "border-red-400" : "border-[#e8e0d8]"} text-[16px] sm:text-[14px] text-[#2d1a2d] placeholder:text-[#a08f8f] focus:outline-none focus:border-[#4a2040] transition-colors`}
                        />
                        {errors.contactInfo && <p className="text-[11px] text-red-500 mt-1">{errors.contactInfo}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10.5px] sm:text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Item Type
                        </label>
                        <select
                          value={form.itemType}
                          onChange={(e) => setForm({ ...form, itemType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e0d8] text-[16px] sm:text-[14px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors"
                        >
                          <option value="Curtain Tiebacks (₹200 - ₹300)">Curtain Tiebacks & Holders (₹200 – ₹300)</option>
                          <option value="Handmade Flower Pots (₹400)">Handmade Flower Pots (₹400)</option>
                          <option value="Car Charms / Mini Pots (₹250 - ₹300)">Car Charms / Mini Pots (₹250 – ₹300)</option>
                          <option value="Handmade Velvet Earrings (₹150 - ₹160)">Handmade Velvet Earrings (₹150 – ₹160)</option>
                          <option value="Hairbands & Hairpin Sets (₹100 - ₹350)">Hairbands & Hairpin Sets (₹100 – ₹350)</option>
                          <option value="Wall Hangings & Wreaths (₹500 - ₹1,000)">Wall Hangings & Wreaths (₹500 – ₹1,000)</option>
                          <option value="Floral Hand Cuffs & Bracelets (₹200)">Floral Hand Cuffs & Bracelets (₹200)</option>
                          <option value="Everlasting Bouquets (₹500 - ₹800)">Everlasting Bouquets (₹500 – ₹800)</option>
                          <option value="Wedding Season Special: Currency Origami Bouquet (Starting ₹1,500)">✨ Wedding Season Special: Currency Origami Bouquet (Starting ₹1,500)</option>
                          <option value="Handmade Bookmarks (₹150)">Handmade Bookmarks (₹150)</option>
                          <option value="Keychains & Mobile Charms (₹100 - ₹200)">Keychains & Mobile Charms (₹100 – ₹200)</option>
                          <option value="Charger Cable Covers (Starting ₹300)">Charger Cable Covers (Starting ₹300)</option>
                          <option value="3D Mobile Phone Cover (Starting ₹300)">3D Mobile Phone Cover (Starting ₹300)</option>
                          <option value="Custom Gift Hampers">Custom Gift Hampers</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10.5px] sm:text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Occasion (Optional)
                        </label>
                        <select
                          value={form.occasion}
                          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e0d8] text-[16px] sm:text-[14px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors"
                        >
                          <option value="">Select an occasion</option>
                          <option value="Wedding / Bridal">Wedding / Bridal</option>
                          <option value="Birthday Gift">Birthday Gift</option>
                          <option value="Festival / Eid">Festival / Eid</option>
                          <option value="Home Decor">Home Decor</option>
                          <option value="Everyday Styling">Everyday Styling</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                        Custom Requirements & Color Palette *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Describe your flowers (roses, sunflowers, lavender), preferred colors, quantity, or specific phone model..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#faf8f5] border ${errors.message ? "border-red-400" : "border-[#e8e0d8]"} text-[16px] sm:text-[14px] text-[#2d1a2d] placeholder:text-[#a08f8f] focus:outline-none focus:border-[#4a2040] transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 sm:py-4 px-6 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.14em] uppercase font-medium hover:bg-[#33142c] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-sm"
                      >
                        <Send size={15} />
                        <span>Prepare WhatsApp Message</span>
                      </button>

                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 sm:py-4 px-6 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-[#20ba59] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-center shadow-sm"
                      >
                        <MessageCircle size={17} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
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
      <footer className="py-12 px-6 md:px-12 border-t border-[#e8e0d8] bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8b6f6f]">
          <p>Handmade with love in Kashmir &bull; Direct WhatsApp: {PHONE_NUMBER}</p>
          <p>&copy; {new Date().getFullYear()} Poshsaaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
