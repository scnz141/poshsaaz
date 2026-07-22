import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Send, MessageCircle, MapPin, Mail } from "lucide-react";
import { Link } from "wouter";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", occasion: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim()) errs.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Please tell us about your inquiry";
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
    }, 1500);
  };

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
            <Link href="/products" className="text-[13px] tracking-[0.06em] uppercase text-[#6b5a5a] hover:text-[#4a2040] transition-colors">
              Products
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left - Info */}
            <RevealSection className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] mb-4">Get in Touch</p>
              <h1
                className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#2d1a2d" }}
              >
                Let's create
                <br />
                <em>together</em>
              </h1>
              <p className="text-[15px] leading-[1.8] text-[#6b5a5a] mb-12 max-w-md">
                Whether you're looking for a custom piece, have a question about our collections, or want to collaborate — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f0ebe5] rounded-full">
                    <MapPin size={16} className="text-[#4a2040]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#2d1a2d] mb-1">Made in Kashmir</p>
                    <p className="text-[13px] text-[#8b6f6f]">Handcrafted with love, shipped worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f0ebe5] rounded-full">
                    <Mail size={16} className="text-[#4a2040]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#2d1a2d] mb-1">Email</p>
                    <a href="mailto:hashimdar141@gmail.com" className="text-[13px] text-[#8b6f6f] hover:text-[#4a2040] transition-colors">
                      hashimdar141@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f0ebe5] rounded-full">
                    <MessageCircle size={16} className="text-[#4a2040]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#2d1a2d] mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/918082757627"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#8b6f6f] hover:text-[#4a2040] transition-colors"
                    >
                      +91 80827 57627
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right - Form */}
            <RevealSection className="lg:col-span-6 lg:col-start-7" delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-[#e8e0d8] p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#f0ebe5] rounded-full">
                    <Send size={24} className="text-[#4a2040]" />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#2d1a2d" }}
                  >
                    Message Sent
                  </h3>
                  <p className="text-[14px] text-[#8b6f6f] mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "", occasion: "" }); }}
                    className="text-[12px] tracking-[0.15em] uppercase text-[#4a2040] hover:opacity-70 transition-opacity"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#e8e0d8] p-8 md:p-12">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-0 py-3 bg-transparent border-b ${errors.name ? "border-red-400" : "border-[#e8e0d8]"} text-[15px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors placeholder:text-[#c0b0b0]`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-0 py-3 bg-transparent border-b ${errors.email ? "border-red-400" : "border-[#e8e0d8]"} text-[15px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors placeholder:text-[#c0b0b0]`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-2">
                        Occasion (Optional)
                      </label>
                      <select
                        value={form.occasion}
                        onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-[#e8e0d8] text-[15px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors"
                      >
                        <option value="">Select an occasion</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="eid">Eid</option>
                        <option value="gift">Gift</option>
                        <option value="everyday">Everyday Wear</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-[#8b6f6f] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className={`w-full px-0 py-3 bg-transparent border-b ${errors.message ? "border-red-400" : "border-[#e8e0d8]"} text-[15px] text-[#2d1a2d] focus:outline-none focus:border-[#4a2040] transition-colors placeholder:text-[#c0b0b0] resize-none`}
                        placeholder="Tell us about your vision — colors, flowers, occasion..."
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full mt-4 py-4 bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.15em] uppercase hover:bg-[#3a1530] transition-colors duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {sending ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </RevealSection>
          </div>
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
