import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from './AboutSection';
import SocialWidget from '@/components/SocialWidget';


export default function TeamPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <SocialWidget/>

      {/* Navbar */}
      <Navbar />

      {/* Meet Our Team Section */}
      <AboutSection/>

      {/* Footer */}
      <Footer />
    </div>
  );
}