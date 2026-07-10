export default function Footer() {
  return (
    <footer className="py-20 sm:py-24 md:py-32 bg-[#2a2420] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4184c] to-transparent" />
      
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mb-16 sm:mb-20">
          <div>
            <h4 className="font-bold text-white mb-6 text-base">POSHSAAZ</h4>
            <p className="text-[#a0938a] text-sm leading-relaxed font-light">Handmade from Kashmir with love and precision</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#work" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Collections</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">About</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Custom Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Instagram</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Facebook</a></li>
              <li><a href="mailto:hello@poshsaaz.com" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-base">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Privacy</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Terms</a></li>
              <li><a href="#" className="text-[#a0938a] hover:text-[#e8a0b8] transition-colors font-light">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#4a4440] pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#a0938a] font-light">
            <p>© 2026 Poshsaaz. All rights reserved.</p>
            <p>Handmade in Kashmir 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
