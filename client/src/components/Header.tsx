import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface HeaderProps {
  onProductClick?: (id: number) => void;
}

export default function Header({ onProductClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container px-4 md:px-0 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-lg md:text-xl font-light text-gray-900 hover:text-gray-600 transition-colors"
        >
          POSHSAAZ
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <a
            href="#collections"
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            Collections
          </a>
          <button
            onClick={() => navigate("/products")}
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            Products
          </button>
          <a
            href="#about"
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 active:scale-95">
          Inquire
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container px-4 py-4 flex flex-col gap-4">
            <a
              href="#collections"
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </a>
            <button
              onClick={() => {
                navigate("/products");
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors py-2 text-left"
            >
              Products
            </button>
            <a
              href="#about"
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 mt-2">
              Inquire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
