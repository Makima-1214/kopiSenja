import { useEffect } from 'react';
import { animateHeading, animateImage, animateOnScroll } from '../utils/scrollAnimations';

const About = () => {
  const highlights = [
    { title: '100% Biji Lokal', desc: 'Biji kopi pilihan langsung dari petani nusantara.' },
    { title: 'Ruang Produktif', desc: 'Suasana tenang yang nyaman untuk fokus bekerja.' },
    { title: 'Seduhan Manual', desc: 'Diseduh segar secara manual sesuai seleramu.' },
    { title: 'Panggang Berkala', desc: 'Menjaga keaslian cita rasa di setiap cangkir.' },
  ];

  useEffect(() => {
    animateHeading('[data-about-heading]');
    animateImage('[data-about-image]');
    animateOnScroll('[data-about-highlight]');
  }, []);

  return (
    <section id="about" className="py-32 bg-white text-[#4A3F35]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header - Ringan & Puitis */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="tracking-[0.3em] uppercase text-xs font-semibold text-[#A68A7B] mb-4 block">
            Kisah Kami
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#2C2420] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }} data-about-heading>
            Menyeduh cerita, menghangatkan suasana.
          </h2>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-center">
          
          {/* SISI KIRI: Gambar Berkarakter dengan Efek Hover */}
          <div className="md:col-span-5 w-full group relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-sm" data-about-image>
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=900"
                alt="Suasana Kopi Senja"
                loading="lazy"
                className="w-full h-full object-cover rounded-t-[15rem] rounded-sm"
              />
            </div>

            {/* Floating Card - Ikut menggunakan rounded-sm agar senada */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] backdrop-blur-md bg-black/40 text-white p-5 rounded-sm text-center border border-white/10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-black/50">
              <p className="font-serif italic text-base tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                “Setiap cangkir, sebuah cerita.”
              </p>
            </div>
          </div>

          {/* SISI KANAN: Teks Ringkas & Mengalir */}
          <div className="md:col-span-7 w-full font-light text-lg leading-relaxed space-y-6">
            <p>
              <strong className="font-semibold text-[#2C2420]">Kopi Senja</strong> hadir sebagai ruang jeda di tengah kesibukan kota. Kami percaya bahwa kopi terbaik selalu lahir dari ketulusan meramu rasa dan kenyamanan tempat.
            </p>
            <p>
              Tanpa sekat yang kaku, di sini adalah tempat terbaik untuk menuangkan ide, berbagi tawa, atau sekadar menikmati waktu sendiri dengan tenang.
            </p>
          </div>

        </div>

        {/* BAWAH: Fitur Jujur dengan Deskripsi Satu Baris */}
        <div className="mt-32 pt-16 border-t border-[#EAE3DB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="group/item flex flex-col transition-all duration-300 hover:-translate-y-1 cursor-default"
                data-about-highlight
              >
                <h4 className="text-lg font-serif text-[#2C2420] mb-1 transition-colors duration-300 group-hover/item:text-[#A68A7B]" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {item.title}
                </h4>
                <p className="text-sm text-[#6E6359] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;