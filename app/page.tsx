import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}