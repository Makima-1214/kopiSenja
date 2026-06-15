import { useEffect } from "react";
import { animateHeading, animateCards } from "../utils/scrollAnimations";

const testimonials = [
  {
    id: 1,
    name: 'Rina Safitri',
    role: 'Pelanggan Setia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    quote:
      'Kopi Senja jadi tempat favorit saya untuk kerja remote. Kopinya enak, WiFi-nya kencang, dan suasananya bikin betah berjam-jam.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Pengunjung Rutin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    quote:
      'House Blend-nya beda dari kafe lain. Ada karakter tersendiri yang susah dijelaskan tapi bikin ketagihan. Wajib coba.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dian Rahayu',
    role: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    quote:
      'Interior yang instagramable, menu yang konsisten, dan staf yang ramah. Kopi Senja memang layak jadi destinasi ngopi di Bandung.',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#a77f70]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonial = () => {
  useEffect(() => {
    animateHeading('[data-testimonial-heading]');
    animateCards('[data-testimonial-card]');
  }, []);

  return (
    <section className="py-28 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-sm uppercase tracking-[0.3em] text-stone-500 italic"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Kata Mereka
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-semibold text-[#2D1810]"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-testimonial-heading
          >
            Cerita Pelanggan Kami
          </h2>
          <p
            className="mt-4 text-stone-600 text-lg leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Kepercayaan dan kepuasan pelanggan adalah hal yang paling kami jaga.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-stone-200 flex flex-col gap-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              data-testimonial-card
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-stone-700 leading-relaxed flex-1 text-[1.05rem]"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-stone-100" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className="font-semibold text-[#2D1810]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-stone-500 mt-0.5 italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <div className="w-20 h-px bg-stone-300 mx-auto mb-8" />
          <p
            className="text-2xl md:text-3xl text-[#2D1810] italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Kami bukan sekadar kafe — kami adalah bagian dari hari-hari Anda."
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
