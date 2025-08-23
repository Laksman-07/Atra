import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import SocialWidget from '@/components/SocialWidget';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialWidget/>
      <Navbar />
      <HeroSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}