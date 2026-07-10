import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8ddd5]">
      <div className="container flex items-center justify-between h-16 sm:h-20">
        <div className="flex flex-col">
          <div className="text-sm font-bold text-[#c4184c] tracking-widest">POSHSAAZ</div>
          <div className="text-xs text-[#7a7470]">Kashmir Craft</div>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          <a href="#work" className="text-sm font-medium text-[#2a2420] hover:text-[#c4184c] transition-colors duration-300 relative group">
            Collections
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4184c] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="text-sm font-medium text-[#2a2420] hover:text-[#c4184c] transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4184c] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="text-sm font-medium text-[#2a2420] hover:text-[#c4184c] transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c4184c] group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        <button className="hidden md:block btn-primary text-sm">
          Inquire
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2a2420] hover:text-[#c4184c] transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-[#e8ddd5] py-4 px-4 space-y-3">
          <a href="#work" className="block text-sm font-medium text-[#2a2420] hover:text-[#c4184c] py-2">Collections</a>
          <a href="#about" className="block text-sm font-medium text-[#2a2420] hover:text-[#c4184c] py-2">About</a>
          <a href="#contact" className="block text-sm font-medium text-[#2a2420] hover:text-[#c4184c] py-2">Contact</a>
          <button className="w-full btn-primary text-sm">Inquire</button>
        </nav>
      )}
    </header>
  );
}
