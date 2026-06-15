import { useEffect } from 'react';
import { animateOnScroll } from '../utils/scrollAnimations';
import coffeeImage from '../assets/cofee.png';

const Hero = () => {
  useEffect(() => {
    animateOnScroll('[data-hero-content]');
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1
          className="
            text-[18vw]
            font-black
            uppercase
            leading-none
            text-[#E9E2DA]
            whitespace-nowrap
          "
        >
          KOPI SENJA
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col">

        {/* Top Content */}
        <div className="pt-28 text-center" data-hero-content>


          <h2
            className="
              mt-6
              text-5xl
              md:text-7xl
              font-bold
              text-[#2D1810]
              leading-tight
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Tempat Untuk
            <br />
            Menikmati Kopi
          </h2>

          <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nikmati secangkir kopi berkualitas dalam suasana yang hangat,
            nyaman, dan cocok untuk bersantai maupun bekerja.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="
                px-8 py-3.5
                rounded-full
                bg-[#2D1810]
                text-white
                font-medium
                transition-all
                hover:-translate-y-1
              "
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Lihat Menu
            </a>

            <a
              href="#about"
              className="
                px-8 py-3.5
                rounded-full
                border
                border-[#2D1810]
                text-[#2D1810]
                font-medium
                transition-all
                hover:bg-[#2D1810]
                hover:text-white
              "
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Coffee PNG */}
        <div className="relative flex-1 flex items-end justify-center">

          <img
            src={coffeeImage}
            alt="Kopi Senja"
            className="
              w-full
              max-w-5xl
              object-contain
              animate-float
              drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]
            "
          />

        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs tracking-[0.3em] uppercase text-stone-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Scroll
            </span>
            <div className="w-px h-12 bg-stone-400" />
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Hero;
