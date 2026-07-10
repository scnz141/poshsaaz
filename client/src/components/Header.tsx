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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-light text-gray-900 tracking-tight">
            POSHSAAZ
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#work" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
            Collections
          </a>
          <a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-8 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-800 active:scale-95">
            Inquire
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
        >
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col gap-4 p-6">
            <a href="#work" className="text-sm text-gray-700 font-medium hover:text-gray-900">
              Collections
            </a>
            <a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-700 font-medium hover:text-gray-900">
              Contact
            </a>
            <button className="w-full px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full">
              Inquire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
