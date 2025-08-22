import Navbar from '@/components/Navbar';
import HeroSection from './HeroSection';
import ServiceCard from './ServiceCard';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: 'Athlete Performance Lab',
      image:
        'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'You bring the hustle, we bring the science.',
      extra:
        'Our lab uses advanced sports science equipment to analyze and optimize every aspect of your training journey.',
      forwhom: `
        Athletes of all levels—from student competitors to weekend warriors to rising pros to elite athletes.
      `,
      wedo: `
        Apply sports science to assess movement patterns, quantify performance metrics, and program drills that build explosive speed, strength, and resilience.
    `,
      youget: `
        A data-driven plan to push limits, reduce injury risk, and maximize output.
    `,
    },
    {
      title: 'Strength & Conditioning',
      image:
        'https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Custom strength programs tailored to your sport and goals.',
      extra:
        'Enhance endurance, agility, and strength with scientifically backed methodologies designed for athletes.',
      forwhom: `
        Ideal for professionals, parents, and everyday movers who want to stay strong and energetic. `,
      wedo: `
        Build real-world strength, correct posture, and boost energy through functional training.
      `,
      youget: `
         More stamina, less stress, and the power to thrive in your daily life.
      `,
      
    },
    {
      title: 'Rehab & Recovery',
      image:
        'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Focused rehabilitation programs to speed recovery safely.',
      extra:
        'Our team ensures safe return-to-play strategies with a mix of physio, mobility drills, and recovery techniques.',
      forwhom: `
        Anyone tired of being told to "just rest it." From athletes returning after injury, to desk workers stuck in a cycle of recurring pain.
      `,
      wedo: `
        Restore movement, relieve pain, and build your comeback with science and support.
      `,
      youget: `
        Lasting relief, renewed confidence, and a clear path back to performance.
      `,
    },
  ];

  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Cards */}
      <section id="services-list" className="max-w-7xl mx-auto px-4 py-20 flex-1">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Our <span className="text-yellow-400">Packages</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
