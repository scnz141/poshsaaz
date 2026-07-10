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

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap || !headerRef.current) return;

    const navLinks = headerRef.current.querySelectorAll("nav a");
    navLinks.forEach((link: any) => {
      const underline = link.querySelector(".underline");
      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { width: "100%", duration: 0.4, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.4, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#e8a0b8]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="text-2xl md:text-3xl font-bold text-[#c4184c] tracking-wider">
            POSHSAAZ
          </div>
          <div className="text-xs md:text-sm text-[#7a7470] font-light ml-2">
            Kashmir Craft
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#work" className="relative text-[#2a2420] font-medium text-lg group">
            Collections
            <span className="underline absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8]" />
          </a>
          <a href="#" className="relative text-[#2a2420] font-medium text-lg group">
            About
            <span className="underline absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8]" />
          </a>
          <a href="#contact" className="relative text-[#2a2420] font-medium text-lg group">
            Contact
            <span className="underline absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#c4184c] to-[#e8a0b8]" />
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-8 py-3 bg-[#c4184c] text-white font-semibold rounded-none transition-all duration-300 hover:bg-[#a01a3a] active:scale-95 hover:shadow-xl text-base">
            Inquire
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span
            className={`w-6 h-0.5 bg-[#2a2420] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#2a2420] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#2a2420] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e8a0b8]/20 shadow-lg">
          <nav className="flex flex-col gap-6 p-6">
            <a
              href="#work"
              className="text-[#2a2420] font-medium text-lg hover:text-[#c4184c] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </a>
            <a
              href="#"
              className="text-[#2a2420] font-medium text-lg hover:text-[#c4184c] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#2a2420] font-medium text-lg hover:text-[#c4184c] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full px-6 py-3 bg-[#c4184c] text-white font-semibold rounded-none transition-all duration-300 hover:bg-[#a01a3a] active:scale-95 text-base">
              Inquire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
