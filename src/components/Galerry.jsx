import { useEffect } from "react";
import { animateHeading, animateOnScroll } from "../utils/scrollAnimations";

const galleryImages = [
  {
    id: 1,
    title: 'Interior Hangat',
    img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Area Outdoor',
    img: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'Bar Kopi',
    img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    title: 'Sudut Nyaman',
    img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    title: 'Detail Minuman',
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    title: 'Hidangan Manis',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
  },
];

const Gallery = () => {
  useEffect(() => {
    animateHeading('[data-gallery-heading]');
    animateOnScroll('[data-gallery-item]');
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#381e1a' }}
            data-gallery-heading
          >
            Suasana Cafe
          </h2>
          <p className="text-stone-600" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Intip kenyamanan dan kehangatan yang menanti Anda di Kopi Senja.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer" data-gallery-item>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(56,30,26,0.4)]">
                <span
                className="text-white font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}
              >
                {item.title}
              </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
