export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-black border-t border-white/10">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">POSHSAAZ®</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Handmade floral accessories crafted with love from Kashmir. Premium quality, artistic vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#work" className="text-white/60 hover:text-white transition-colors">Featured Work</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Hairbands</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Bouquets</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Hair Clips</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="mailto:info@poshsaaz.com" className="text-white/60 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-white/50">
              © 2026 Poshsaaz. All rights reserved. Handmade with love from Kashmir.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
