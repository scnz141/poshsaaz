import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-[#00d9ff]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#ff006e] flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black text-white tracking-widest">
              POSH
            </div>
            <div className="text-xs text-[#00d9ff] font-light">SAAZ</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-white font-medium hover:text-[#00d9ff] transition-colors duration-300 text-sm uppercase tracking-wide">
            Collections
          </a>
          <a href="#" className="text-white font-medium hover:text-[#00d9ff] transition-colors duration-300 text-sm uppercase tracking-wide">
            Story
          </a>
          <a href="#contact" className="text-white font-medium hover:text-[#00d9ff] transition-colors duration-300 text-sm uppercase tracking-wide">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-black font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9ff]/50 active:scale-95 text-sm uppercase tracking-wide">
            Shop
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span
            className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#00d9ff] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-xl border-t border-[#00d9ff]/30">
          <nav className="flex flex-col gap-4 p-6">
            <a href="#work" className="text-white font-medium hover:text-[#00d9ff] transition-colors text-sm uppercase tracking-wide">
              Collections
            </a>
            <a href="#" className="text-white font-medium hover:text-[#00d9ff] transition-colors text-sm uppercase tracking-wide">
              Story
            </a>
            <a href="#contact" className="text-white font-medium hover:text-[#00d9ff] transition-colors text-sm uppercase tracking-wide">
              Contact
            </a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-black font-bold rounded-full transition-all duration-300 text-sm uppercase tracking-wide">
              Shop
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
