import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import SocialWidget from '@/components/SocialWidget';
import VerticalsSection from '@/components/VerticalsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialWidget/>
      <Navbar />
      <HeroSection />
      <VerticalsSection/>
      <LocationsSection />
      <Footer />
    </main>
  );
}