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
      {/* Background organic shape for aesthetic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <svg
          className="w-[120%] h-[120%] max-w-none opacity-20 md:opacity-30 z-0"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="blobGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#F2D6C9" />
              <stop offset="1" stopColor="#E6C3B2" />
            </linearGradient>
            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>
          <g filter="url(#blur)">
            <path
              d="M438.5 27.9c47.5 20.1 75.5 64.2 86.5 113.3 11 49.1 4 102.9-27 139.5-31 36.5-89 56.5-139 80-50 23.6-90 52.1-139.7 54.9-49.7 2.9-109.2-21.3-145-58.4-35.7-37-47.6-87.1-42-139.1 5.7-52 28-105.9 64.1-139.3 36.1-33.4 87.1-45.3 138-50.5 50.9-5.2 158.6-21.6 206.4-1.4z"
              fill="url(#blobGrad)"
              transform="translate(-30 -30) scale(1)"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col">

        {/* Top Content */}
        <div className="pt-28 text-center" data-hero-content>


          <h2
            className="
              mt-6
              text-6xl
              md:text-7xl
              font-extrabold
              text-[#2D1810]
              leading-tight
              tracking-tight
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Tempat Untuk
            <br />
            Menikmati Kopi
          </h2>

          <div className="mx-auto w-24 h-1 bg-[#6F453B] rounded-full mt-6 mb-6 opacity-95" aria-hidden="true" />

          <p className="mt-2 text-stone-700 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nikmati secangkir kopi berkualitas dalam suasana yang hangat,
            nyaman, dan cocok untuk bersantai maupun bekerja.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="
                px-10 py-3.5
                rounded-full
                bg-[#2D1810]
                text-white
                text-lg
                font-semibold
                shadow-2xl
                transition-all
                transform-gpu
                hover:-translate-y-1
                focus:outline-none focus:ring-2 focus:ring-[#6F453B]/40
              "
              style={{ fontFamily: "'Nunito', sans-serif" }}
              aria-label="Lihat Menu"
            >
              Lihat Menu
            </a>

            <a
              href="#about"
              className="
                px-10 py-3.5
                rounded-full
                border
                border-[#2D1810]
                text-[#2D1810]
                text-lg
                font-medium
                transition-all
                hover:bg-[#2D1810]
                hover:text-white
              "
              style={{ fontFamily: "'Nunito', sans-serif" }}
              aria-label="Tentang Kami"
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
