import { useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { animateHeading, animateOnScroll } from '../utils/scrollAnimations';

const Contact = () => {
  useEffect(() => {
    animateHeading('[data-contact-heading]');
    animateOnScroll('[data-contact-item]');
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: '#381e1a' }}
              >
                Kunjungi Kami
              </h2>
              <p className="text-stone-600"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Kami selalu senang menyambut Anda. Jangan ragu untuk datang dan rasakan sendiri kenyamanannya.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4" data-contact-item>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2e8e5', color: '#6f453b' }}>
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#381e1a' }}>Alamat</h4>
            <p className="text-stone-600 text-sm mt-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
                    Jl. Melati No. 45, Kelurahan Damai, Kecamatan Sejahtera, Kota Bandung, 40123
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-contact-item>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2e8e5', color: '#6f453b' }}>
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#381e1a' }}>Jam Operasional</h4>
                  <p className="text-stone-600 text-sm mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Senin - Minggu: 08.00 - 22.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-contact-item>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2e8e5', color: '#6f453b' }}>
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#381e1a' }}>WhatsApp</h4>
                  <p className="text-stone-600 text-sm mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>+62 812-3456-7890 (Untuk reservasi meja)</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-contact-item>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2e8e5', color: '#6f453b' }}>
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: '#381e1a' }}>Instagram</h4>
                  <p className="text-stone-600 text-sm mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>@kopisenja.bandung</p>
                </div>
              </div>
            </div>

            {/* Tombol WA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
              style={{ backgroundColor: '#16a34a' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#15803d'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#16a34a'}
            >
              <FaWhatsapp className="w-6 h-6" />
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Google Maps */}
          <div className="bg-stone-200 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467110856!2d107.61912537499088!3d-6.903444367733782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e6c6b1f%3A0x4c4c4c4c4c4c4c4c!2sBandung!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
              title="Lokasi Kopi Senja"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-semibold text-stone-700">
              📍 Klik peta untuk navigasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
