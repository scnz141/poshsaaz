export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 md:py-24 bg-[#2a2420] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4184c] to-transparent" />
      
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12 sm:mb-16">
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">POSHSAAZ</h4>
            <p className="text-[#a0938a] text-xs leading-relaxed">Handmade from Kashmir with love and precision</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#work" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Collections</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">About</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Custom Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Facebook</a></li>
              <li><a href="mailto:hello@poshsaaz.com" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Terms</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#4a4440] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#a0938a]">
            <p>© 2026 Poshsaaz. All rights reserved.</p>
            <p>Handmade in Kashmir 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
