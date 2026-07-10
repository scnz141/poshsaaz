 import { useState, useEffect } from "react";
 import { Menu, X } from "lucide-react";

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
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-white/80 backdrop-blur-xl shadow-sm"
           : "bg-transparent"
       }`}
     >
       <div className="container flex items-center justify-between py-4">
         <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-full bg-brand-plum flex items-center justify-center">
             <span className="text-white font-display text-lg font-bold">✿</span>
           </div>
           <span className="font-display text-xl font-bold text-brand-plum hidden sm:inline">
             POSHSAAZ
           </span>
         </div>

         <nav className="hidden md:flex items-center gap-8">
           <a href="#about" className="text-sm font-accent text-gray-700 hover:text-brand-plum transition">
             About
           </a>
           <a href="#products" className="text-sm font-accent text-gray-700 hover:text-brand-plum transition">
             Products
           </a>
           <a href="#craft" className="text-sm font-accent text-gray-700 hover:text-brand-plum transition">
             Craft
           </a>
           <a href="#contact" className="text-sm font-accent text-gray-700 hover:text-brand-plum transition">
             Contact
           </a>
         </nav>

         <div className="hidden md:block">
           <button className="px-6 py-2 bg-brand-plum text-white rounded-full text-sm font-accent font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
             Shop Now
           </button>
         </div>

         <button
           className="md:hidden"
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
         >
           {isMobileMenuOpen ? (
             <X className="w-6 h-6 text-brand-plum" />
           ) : (
             <Menu className="w-6 h-6 text-brand-plum" />
           )}
         </button>
       </div>

       {isMobileMenuOpen && (
         <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
           <div className="container py-4 flex flex-col gap-4">
             <a href="#about" className="text-sm font-accent text-gray-700 hover:text-brand-plum">
               About
             </a>
             <a href="#products" className="text-sm font-accent text-gray-700 hover:text-brand-plum">
               Products
             </a>
             <a href="#craft" className="text-sm font-accent text-gray-700 hover:text-brand-plum">
               Craft
             </a>
             <a href="#contact" className="text-sm font-accent text-gray-700 hover:text-brand-plum">
               Contact
             </a>
             <button className="w-full px-6 py-2 bg-brand-plum text-white rounded-full text-sm font-accent font-semibold">
               Shop Now
             </button>
           </div>
         </div>
       )}
     </header>
   );
 }
