
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#2A335D] text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h4 className="text-10 font-bold mb-8">SOTO</h4>
            <div className="text-blue-200/80 text-sm leading-relaxed space-y-4">
              <p>Permata Regency D/37,<br />Srengseng, Kembangan,<br />Jakarta Barat, DKI Jakarta, 11630</p>
              <p>(+62) 822-7666-6969</p>
              <p>info@sotoenergi.co.id</p>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Products and Services</h5>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">High Speed Diesel B40</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marine Fuel Oil</a></li>
            </ul>
          </div>
  

          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-xs text-blue-200/60 font-medium">
            © 2026 PT Soto Energi Shakti. All rights reserved.
          </p>
          <div className="flex space-x-6 text-white text-lg">
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
