import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 sm:h-20">
        <div className="text-xl sm:text-2xl font-bold text-pink-600">POSHSAAZ®</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">Work</a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
        </nav>

        <button className="hidden md:block px-6 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-700 transition-colors">
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 py-4 px-4 space-y-3">
          <a href="#work" className="block text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors py-2">Work</a>
          <a href="#about" className="block text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors py-2">About</a>
          <a href="#contact" className="block text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors py-2">Contact</a>
          <button className="w-full px-6 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-700 transition-colors">
            Let's Talk
          </button>
        </nav>
      )}
    </header>
  );
}
