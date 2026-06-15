import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import FeaturedMenu from '../components/FeaturedMenu';
import Gallery from '../components/Galerry';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FeaturedMenu />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
