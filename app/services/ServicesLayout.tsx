import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";
import Footer from "@/components/Footer";
import SocialWidget from "@/components/SocialWidget";
import { services } from "./servicesData";

export default function ServicesLayout({ location }: { location?: string }) {
  return (
    <div className="bg-yellow-400 text-black flex flex-col min-h-screen">
      <SocialWidget />
      <Navbar />

      <HeroSection />

      <section id="services-list" className="max-w-7xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
            {location ? (
              <>
                Services in <span className="text-white">{location}</span>
              </>
            ) : (
              <>
                Choose your <span className="text-white animate-pulse">Path</span>
              </>
            )}
          </h2>
          <p className="text-xl sm:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Your Plan, Your Pace...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}