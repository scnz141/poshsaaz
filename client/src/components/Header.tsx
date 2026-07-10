import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-plum to-brand-gold flex items-center justify-center glow">
            <span className="text-white font-display text-lg font-bold">✿</span>
          </div>
          <span className="font-display text-xl font-bold text-gray-900 hidden sm:inline">POSHSAAZ</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {["About", "Products", "Craft", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 font-accent font-medium hover:text-brand-plum transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-plum to-brand-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-brand-plum to-brand-plum/80 text-white rounded-full font-accent font-bold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 relative overflow-hidden group">
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-plum/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200 animate-in slide-in-from-top">
          <nav className="container py-6 flex flex-col gap-4">
            {["About", "Products", "Craft", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-accent font-medium hover:text-brand-plum transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-brand-plum to-brand-plum/80 text-white rounded-full font-accent font-bold hover:shadow-lg transition-all">
              Shop Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
