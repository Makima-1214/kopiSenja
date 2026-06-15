import { 
  // FiCoffee, 
  FiInstagram, 
  FiFacebook, 
  FiTwitter, 
  FiMapPin, 
  FiClock, 
  FiPhone 
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-16 bg-[#381e1a] text-[#eaddd7] font-['Nunito',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Social Section */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/src/assets/kopi-senja-logo.svg"
                  alt="Kopi Senja logo"
                  className="w-14 h-14"
                />
              </div>
              <p className="text-[#d2bab0] leading-relaxed max-w-sm">
                Tempat ngopi santai dengan suasana hangat dan kopi berkualitas. Hadir untuk menemani setiap senja dan ceritamu sejak 2022.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-[#4e2c24] text-[#eaddd7] transition-all duration-300 hover:bg-[#6f453b] hover:text-white hover:-translate-y-1 shadow-sm"
                  aria-label="Social Media Link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-xl text-white mb-6 font-['Playfair_Display',_serif]">
              Menu Cepat
            </h4>
            <ul className="space-y-3 text-[#d2bab0]">
              {[
                { label: 'Beranda', href: '#home' },
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Menu Favorit', href: '#menu' },
                { label: 'Galeri', href: '#gallery' },
                { label: 'Reservasi', href: '#reservation' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-white hover:underline underline-offset-4 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xl text-white mb-6 font-['Playfair_Display',_serif]">
              Kunjungi Kami
            </h4>
            <ul className="space-y-4 text-[#d2bab0]">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-[#6f453b]" size={20} />
                <span>
                  Jl. Senja Kenangan No. 99,<br />
                  Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="flex-shrink-0 text-[#6f453b]" size={20} />
                <span>Setiap Hari: 08:00 - 23:00 WIB</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="flex-shrink-0 text-[#6f453b]" size={20} />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#4e2c24] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a77f70]">
          <p>
            &copy; {new Date().getFullYear()} Kopi Senja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;