import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#2A335D] text-white pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/anchorwhite.png" alt="SOTO Logo" className="h-10 sm:h-12 w-auto object-contain mb-6 sm:mb-8" />
            <div className="text-blue-200/80 text-sm leading-relaxed space-y-3 sm:space-y-4">
              <p>Permata Regency D/37,<br />Srengseng, Kembangan,<br />Jakarta Barat, DKI Jakarta, 11630</p>
              <p>(+62) 822-7666-6969</p>
              <p>info@sotoenergi.co.id</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">Company</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">Products</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">High Speed Diesel B40</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marine Fuel Oil</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">Services</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Port to Ship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ship to Ship</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-xs text-blue-200/60 font-medium text-center sm:text-left">
            © 2026 PT Soto Energi Shakti. All rights reserved.
          </p>
          <div className="flex space-x-5 sm:space-x-6 text-white text-base sm:text-lg">
            <a href="#" className="hover:text-[#00C9A7] transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-[#00C9A7] transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-[#00C9A7] transition-colors"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
