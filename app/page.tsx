import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedCoffees from './components/FeaturedCoffees';
import Gallery from './components/Gallery';
import MusicSection from './components/MusicSection';
import Location from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FeaturedCoffees />
        <Gallery />
        <MusicSection />
        <Location />
      </main>
      <Footer />
    </>
  );
}
