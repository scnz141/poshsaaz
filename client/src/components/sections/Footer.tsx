export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-plum to-brand-gold flex items-center justify-center glow">
                <span className="text-white font-display text-xl font-bold">✿</span>
              </div>
              <span className="font-display text-xl font-bold">POSHSAAZ</span>
            </div>
            <p className="text-gray-400 leading-relaxed">Handmade floral accessories from Kashmir, crafted with love and artistic excellence.</p>
          </div>

          <div>
            <h4 className="font-accent font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-brand-gold transition">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-gold transition">Products</a></li>
              <li><a href="#craft" className="text-gray-400 hover:text-brand-gold transition">Craft</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-gold transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-bold text-white mb-6 uppercase tracking-widest text-sm">Information</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-bold text-white mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition flex items-center gap-2">📧 Email</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition flex items-center gap-2">📱 Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition flex items-center gap-2">🔗 Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 Poshsaaz. All rights reserved.</p>
            <p className="text-gray-500">Made in Kashmir with 💕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
