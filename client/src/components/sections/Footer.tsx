export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-[#00d9ff]/20 py-16 sm:py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#ff006e] flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-white font-black text-lg">POSHSAAZ</span>
            </div>
            <p className="text-gray-400 font-light text-sm">Handcrafted floral elegance from Kashmir.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wide text-sm">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Hairbands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Bouquets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Details</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wide text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Inquire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wide text-sm">Follow</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm font-light">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00d9ff]/20 pt-8 text-center">
          <p className="text-gray-500 text-sm font-light">© 2026 Poshsaaz. All rights reserved. Handcrafted with love from Kashmir.</p>
        </div>
      </div>
    </footer>
  );
}
