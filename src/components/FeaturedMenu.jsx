import { useEffect } from "react";
import { animateHeading, animateOnScroll, animateImage } from "../utils/scrollAnimations";
import latteImg from "../assets/latte.png";
import cappucinoImg from "../assets/cappucino.png";
import croissantImg from "../assets/Croissant.png";

const menuItems = [
  {
    id: 1,
    category: "Coffee",
    name: "Signature Latte",
    price: "Rp 12.000",
    description:
      "Perpaduan espresso dan susu dengan karakter rasa yang lembut dan seimbang.",
    image: latteImg,
  },
  {
    id: 2,
    category: "Coffee",
    name: "Cappuccino Klasik",
    price: "Rp 12.000",
    description:
      "Pilihan biji kopi terbaik dengan cita rasa khas yang menjadi favorit pelanggan.",
    image: cappucinoImg,
  },
  {
    id: 3,
    category: "Bakery",
    name: "Croissant Mentega",
    price: "Rp 15.000",
    description:
      "Croissant hangat yang dibuat untuk melengkapi pengalaman menikmati kopi.",
    image: croissantImg,
  },
];

const FeaturedMenu = () => {
  useEffect(() => {
    animateHeading('[data-menu-heading]');
    animateImage('[data-menu-image]');
    animateOnScroll('[data-menu-content]');
  }, []);

  return ( <section
   id="menu"
   className="py-28 bg-white"
 > <div className="max-w-7xl mx-auto px-6 lg:px-12">


    {/* Heading */}
    <div className="max-w-3xl mb-20">

      <span className="text-sm uppercase tracking-[0.3em] text-stone-500 italic"
        style={{ fontFamily: "'Quicksand', sans-serif" }}>
        Menu Pilihan
      </span>

      <h2
        className="mt-4 text-4xl md:text-5xl font-semibold text-[#2D1810]"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
        data-menu-heading
      >
        Favorit Pelanggan
      </h2>

      <p className="mt-6 text-stone-600 text-lg leading-relaxed"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        Beberapa pilihan menu yang paling sering dinikmati oleh pelanggan
        kami setiap hari.
      </p>

    </div>

    {/* Menu Showcase */}
    <div className="space-y-24">

      {menuItems.map((item, index) => (
        <div
          key={item.id}
          className={`
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-20
            items-center
            ${
              index % 2 === 1
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }
          `}
        >

          <div className="overflow-hidden rounded-[32px]" data-menu-image>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="
                w-full
                h-[320px]
                object-contain
              "
            />
          </div>

          <div data-menu-content>

            <span className="uppercase tracking-[0.25em] text-sm text-stone-500 italic"
              style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {item.category}
            </span>

            <h3
              className="mt-4 text-4xl text-[#2D1810]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {item.name}
            </h3>

            <p className="mt-6 text-stone-600 leading-relaxed text-lg"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span
                className="text-2xl font-semibold text-[#6F453B]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.price}
              </span>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#6F453B] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#5c3f33] shadow-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Pesan Sekarang
              </a>
            </div>

            <div className="mt-8 w-20 h-px bg-stone-300" />

          </div>

        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-24 text-center">

      <div className="w-24 h-px bg-stone-300 mx-auto mb-8" />

      <p
        className="text-2xl italic text-[#2D1810]"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Temukan lebih banyak pilihan menu saat berkunjung ke Kopi Senja.
      </p>

    </div>

  </div>
</section>

);
};

export default FeaturedMenu;
