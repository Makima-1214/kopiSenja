import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/kopi-senja-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "menu",
        "gallery",
        "contact",
      ];

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < bottom
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home", id: "home" },
    { name: "Tentang", href: "#about", id: "about" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Galeri", href: "#gallery", id: "gallery" },
    { name: "Lokasi", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-b border-stone-200 shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Kopi Senja logo"
                className="w-11 h-11 md:w-12 md:h-12"
              />
              <div
                className="
                  text-xl
                  sm:text-md
                  font-semibold
                  tracking-wide
                  text-[#2D1810]
                "
                style={{
                  fontFamily:
                    "'Playfair Display', serif",
                }}
              >
                Kopi Senja
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="
                    relative
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    transition-all
                  "
                >
                  <span
                    className={
                      active === link.id
                        ? "text-[#2D1810]"
                        : "text-stone-500 hover:text-[#2D1810]"
                    }
                  >
                    {link.name}
                  </span>

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      bg-[#6F453B]
                      transition-all
                      duration-300
                      ${
                        active === link.id
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />
                </a>
              ))}

              <a
                href="#menu"
                className="
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#2D1810]
                  text-white
                  text-sm
                  font-medium
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Lihat Menu
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-[#2D1810]"
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >
              {isOpen ? (
                <FiX size={28} />
              ) : (
                <FiMenu size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-white
          transition-all duration-500
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() =>
                setIsOpen(false)
              }
              className="
                text-3xl
                text-[#2D1810]
                font-medium
              "
              style={{
                fontFamily:
                  "'Playfair Display', serif",
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#menu"
            onClick={() =>
              setIsOpen(false)
            }
            className="
              mt-6
              px-8
              py-3
              rounded-full
              bg-[#2D1810]
              text-white
            "
          >
            Lihat Menu
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;