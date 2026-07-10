export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-black border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">POSHSAAZ</h4>
            <p className="text-white/50 text-xs sm:text-sm">Handmade from Kashmir</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#work" className="text-white/60 hover:text-white transition-colors">Work</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Social</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-xs sm:text-sm text-white/50">
          <p>© 2026 Poshsaaz. Handmade with love.</p>
        </div>
      </div>
    </footer>
  );
}
