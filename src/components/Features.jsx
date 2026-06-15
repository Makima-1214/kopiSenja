import { useEffect } from "react";
import {
  FaCoffee,
  FaBreadSlice,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { animateHeading, animateCards } from "../utils/scrollAnimations";

const offerings = [
  {
    icon: <FaCoffee />,
    title: "Biji Kopi Pilihan",
    desc: "Diracik dari biji kopi pilihan yang diproses dengan perhatian pada setiap detail rasa.",
  },
  {
    icon: <FaBreadSlice />,
    title: "Menu Pendamping",
    desc: "Beragam camilan dan hidangan ringan yang cocok dinikmati bersama secangkir kopi.",
  },
  {
    icon: <FaHome />,
    title: "Suasana Hangat",
    desc: "Ruang yang nyaman untuk berbincang, bekerja, ataupun menikmati waktu sendiri.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Lokasi Mudah Dijangkau",
    desc: "Berada di lokasi yang strategis dengan akses yang mudah untuk dikunjungi.",
  },
];

const Features = () => {
  useEffect(() => {
    animateHeading('[data-features-heading]');
    animateCards('[data-features-card]');
  }, []);

  return (
    <section
      id="features"
      className="py-28 bg-[#F7F3EE]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="max-w-3xl mb-20">

          <span className="text-sm uppercase tracking-[0.3em] text-stone-500 italic"
            style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Yang Kami Tawarkan
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-semibold text-[#2D1810]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
            data-features-heading
          >
            Lebih Dari Sekadar
            <br />
            Secangkir Kopi
          </h2>

          <p className="mt-6 text-stone-600 leading-relaxed text-lg"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Kami menghadirkan pengalaman menikmati kopi dalam suasana yang
            hangat, nyaman, dan penuh cerita.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {offerings.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                p-8
                border
                border-stone-200
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
              data-features-card
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  text-xl
                  bg-[#F2E8E5]
                  text-[#6F453B]
                  transition-all
                  duration-300
                  group-hover:bg-[#6F453B]
                  group-hover:text-white
                "
              >
                {item.icon}
              </div>

              <h3
                className="mt-6 text-2xl font-semibold text-[#2D1810]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-stone-600 leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center">

          <div className="w-20 h-px bg-stone-300 mx-auto mb-8" />

          <p
            className="text-2xl md:text-3xl text-[#2D1810] italic"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            "Setiap cangkir memiliki cerita,
            setiap kunjungan menciptakan kenangan."
          </p>

        </div>

      </div>
    </section>
  );
};

export default Features;