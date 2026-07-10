export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">POSHSAAZ®</h4>
            <p className="text-white/50 text-sm">Handmade floral accessories from Kashmir.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex items-center justify-between text-sm text-white/50">
          <p>© 2026 Poshsaaz. All rights reserved.</p>
          <p>Handmade with love from Kashmir</p>
        </div>
      </div>
    </footer>
  );
}
