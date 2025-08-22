import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from './TeamSection';

export default function TeamPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Meet Our Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
