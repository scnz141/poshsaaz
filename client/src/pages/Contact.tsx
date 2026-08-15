import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Send, MessageCircle, MapPin, Mail, Sparkles, CheckCircle2, ArrowUpRight, Clock, Heart } from "lucide-react";
import { Link } from "wouter";

const PHONE_NUMBER = "+91 80827 57627";
const WHATSAPP_LINK = "https://wa.me/918082757627";

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
  const [form, setForm] = useState({ name: "", email: "", occasion: "", itemType: "Hairband / Accessory", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim()) errs.email = "Please enter your email or phone number";
    if (!form.message.trim()) errs.message = "Please share a few details about your vision or desired colors";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  const customWhatsAppUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Poshsaaz! I'd like to order a custom piece.\n\nName: ${form.name || "Customer"}\nItem: ${form.itemType}\nOccasion: ${form.occasion || "Not specified"}\nDetails: ${form.message || "I'd like to discuss custom colors and design."}`
  )}`;

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
            <Link href="/products" className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Catalog
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

      {/* Main Content */}
      <main className="pt-32 sm:pt-36 pb-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column - Contact Details & Heritage */}
            <RevealSection className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e0d8] shadow-sm mb-5">
                <Sparkles size={13} className="text-[#c48b71]" />
                <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#4a2040]">Custom Orders & Inquiries</span>
              </div>

              <h1
                className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.06] font-light mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#241220" }}
              >
                Let us create
                <br />
                <em className="font-normal italic text-[#4a2040]">something together</em>
              </h1>

              <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#5c4a4a] mb-10">
                Whether you need a bespoke wedding hairpiece, matching floral curtain tiebacks, custom everlasting bouquet colors, or personalized gift hampers — we craft to your exact dreams.
              </p>

              {/* Interactive Contact Cards */}
              <div className="space-y-4 mb-10">
                {/* WhatsApp Card */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-5 flex items-center justify-between hover:border-[#25d366] hover:shadow-md transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366]">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <p className="text-[12px] tracking-[0.1em] uppercase text-[#8b6f6f] font-semibold">Direct WhatsApp Concierge</p>
                      <p className="text-[15px] font-semibold text-[#2d1a2d] group-hover:text-[#25d366] transition-colors">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#25d366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email Card */}
                <a
                  href="mailto:hashimdar141@gmail.com"
                  className="glass-card rounded-2xl p-5 flex items-center justify-between hover:border-[#4a2040] hover:shadow-md transition-all duration-300 group block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4a2040]/10 flex items-center justify-center text-[#4a2040]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[12px] tracking-[0.1em] uppercase text-[#8b6f6f] font-semibold">Email Studio</p>
                      <p className="text-[14px] font-semibold text-[#2d1a2d] group-hover:text-[#4a2040] transition-colors">hashimdar141@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8b6f6f] group-hover:text-[#4a2040] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location Card */}
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c48b71]/15 flex items-center justify-center text-[#c48b71]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.1em] uppercase text-[#8b6f6f] font-semibold">Artisan Workshop</p>
                    <p className="text-[14px] font-medium text-[#2d1a2d]">Srinagar, Kashmir &bull; Worldwide Shipping</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right Column - Interactive Form & WhatsApp Generator */}
            <RevealSection className="lg:col-span-7" delay={0.2}>
              <div className="glass-card rounded-3xl p-7 sm:p-10 md:p-12 border border-[#e8e0d8] shadow-xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#25d366]/15 flex items-center justify-center text-[#25d366]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3
                      className="text-3xl font-light text-[#241220] mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Inquiry Received With Love
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#6b5a5a] mb-8 max-w-md mx-auto">
                      Thank you for reaching out, <span className="font-semibold text-[#4a2040]">{form.name}</span>! Our artisan team will reply within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25d366] text-white text-[13px] tracking-[0.08em] font-medium shadow-md hover:bg-[#20ba59] transition-all"
                      >
                        <MessageCircle size={17} />
                        <span>Send via WhatsApp Now</span>
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", occasion: "", itemType: "Hairband / Accessory", message: "" }); }}
                        className="text-[12px] tracking-[0.12em] uppercase text-[#4a2040] font-medium hover:underline py-2"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-normal text-[#241220] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Custom Request Details
                      </h3>
                      <p className="text-[13px] text-[#8b6f6f]">Fill in your requirements below or directly connect on WhatsApp</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ayesha Khan"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? "border-red-400" : "border-[#e8e0d8]"} text-[14px] text-[#2d1a2d] placeholder:text-[#b8a8a8] focus:outline-none focus:border-[#4a2040] transition-colors`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Email / Phone Number *
                        </label>
                        <input
                          type="text"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="e.g. +91 9876543210 or email"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? "border-red-400" : "border-[#e8e0d8]"} text-[14px] text-[#2d1a2d] placeholder:text-[#b8a8a8] focus:outline-none focus:border-[#4a2040] transition-colors`}
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Product Category
                        </label>
                        <select
                          value={form.itemType}
                          onChange={(e) => setForm({ ...form, itemType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e0d8] text-[14px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors"
                        >
                          <option value="Curtain Tiebacks">Curtain Tiebacks</option>
                          <option value="Floral Hairbands">Floral Hairbands</option>
                          <option value="Everlasting Bouquets">Everlasting Bouquets</option>
                          <option value="3D Mobile Phone Cover">3D Mobile Phone Cover</option>
                          <option value="Hair Clips & Combs">Hair Clips & Combs</option>
                          <option value="Handmade Bookmarks">Handmade Bookmarks</option>
                          <option value="Charger Cable Covers">Charger Cable Covers</option>
                          <option value="Keychains & Charms">Keychains & Charms</option>
                          <option value="Wall Décor">Wall Décor</option>
                          <option value="Curated Gift Box">Curated Gift Box</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                          Occasion
                        </label>
                        <select
                          value={form.occasion}
                          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e0d8] text-[14px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors"
                        >
                          <option value="">Select an occasion</option>
                          <option value="Wedding / Bridal">Wedding / Bridal</option>
                          <option value="Birthday Gift">Birthday Gift</option>
                          <option value="Festival / Eid">Festival / Eid</option>
                          <option value="Home Decor Accent">Home Decor Accent</option>
                          <option value="Everyday Styling">Everyday Styling</option>
                          <option value="Corporate / Bulk Gift">Corporate / Bulk Gift</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#7a6868] font-semibold mb-2">
                        Your Custom Vision & Color Preferences *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Tell us desired flower types (roses, lavender, sunflowers), colors (pastels, navy, pinks), quantity, or custom phone model..."
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.message ? "border-red-400" : "border-[#e8e0d8]"} text-[14px] text-[#2d1a2d] placeholder:text-[#b8a8a8] focus:outline-none focus:border-[#4a2040] transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex-1 py-4 px-6 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.14em] uppercase font-medium hover:bg-[#33142c] transition-all shadow-md flex items-center justify-center gap-2.5 disabled:opacity-60"
                      >
                        {sending ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send size={15} />
                            <span>Submit Inquiry</span>
                          </>
                        )}
                      </button>

                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 px-6 rounded-full bg-[#25d366] text-white text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-[#20ba59] transition-all shadow-md flex items-center justify-center gap-2.5 text-center"
                      >
                        <MessageCircle size={17} />
                        <span>Chat via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-5 sm:px-8 md:px-12 border-t border-[#e8e0d8] bg-[#f7f4ee]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8b6f6f]">
          <p>Handmade with love in Kashmir &bull; Direct WhatsApp: {PHONE_NUMBER}</p>
          <p>&copy; {new Date().getFullYear()} Poshsaaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
