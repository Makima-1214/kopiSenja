import { useEffect } from "react";
import { animateOnScroll } from "../utils/scrollAnimations";
import coffeeImage from "../assets/cofee.png";

const Hero = () => {
  useEffect(() => {
    animateOnScroll("[data-hero-content]");
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center pt-24 lg:pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-whitw/50 blur-3xl" />
      </div>

      {/* Coffee Left */}
      <img
        src={coffeeImage}
        alt=""
        className="
          hidden lg:block
          absolute
          left-[-120px]
          bottom-[-60px]
          w-[420px]
          opacity-80
          rotate-[-15deg]
          animate-float
          pointer-events-none
          select-none
        "
      />

      {/* Coffee Right */}
      <img
        src={coffeeImage}
        alt=""
        className="
          hidden lg:block
          absolute
          right-[-120px]
          top-[80px]
          w-[380px]
          opacity-70
          rotate-[15deg]
          animate-float
          pointer-events-none
          select-none
        "
      />

      {/* Content */}
      <div
        data-hero-content
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p
          className="uppercase tracking-[0.4em] text-xs text-[#6F453B] mb-sm"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Cafe Senja • Since 2026
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            leading-[0.9]
            text-[#2D1810]
          "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tempat Untuk
          <br />
          Menikmati
          <br />
          <span className="text-[#8A5A44]">Kopi</span>
        </h1>

        <p
          className="
            mt-6
            mx-auto
            max-w-xl
            text-stone-600
            text-lg
            leading-relaxed
          "
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Nikmati secangkir kopi berkualitas dalam suasana hangat,
          nyaman, dan diracik dengan penuh perhatian.
        </p>

        <div className="mt-5 mb-14">
          <a
            href="#menu"
            className="
              inline-flex
              items-center
              px-8
              py-4
              rounded-full
              bg-[#2D1810]
              text-white
              font-medium
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Lihat Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;