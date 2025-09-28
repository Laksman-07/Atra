import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from './AboutSection';


export default function TeamPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Meet Our Team Section */}
      <AboutSection/>

      {/* Footer */}
      <Footer />
    </div>
  );
}