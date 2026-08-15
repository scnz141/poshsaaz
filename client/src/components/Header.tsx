import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onProductClick?: (id: string) => void;
}

export default function Header({ onProductClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50">
      <div className="container px-4 md:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-rose-600">POSHSAAZ</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
            Home
          </a>
          <a href="#collections" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
            Collections
          </a>
          <a href="/products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
            Products
          </a>
          <a href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105">
          Inquire
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-rose-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-100">
          <nav className="container px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Home
            </a>
            <a href="#collections" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Collections
            </a>
            <a href="/products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Products
            </a>
            <a href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Contact
            </a>
            <button className="w-full px-6 py-2 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-all duration-300">
              Inquire
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
