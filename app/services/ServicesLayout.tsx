'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";
import ServiceCarousel from "./ServiceCarousel";
import Footer from "@/components/Footer";
import SocialWidget from "@/components/SocialWidget";
import { regionServices, ServiceCategory } from "./regionServicesData";

export default function ServicesLayout({ location }: { location?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const services = location ? regionServices[location.toLowerCase()] : [];

  // Read params
  const serviceParam = searchParams.get("service");
  const programParam = searchParams.get("program");

  // Open service if service param exists
  useEffect(() => {
    if (serviceParam) {
      const found = services.find(
        (s) => s.title.toLowerCase().replace(/\s+/g, "-") === serviceParam
      );
      if (found) setSelectedService(found);
    } else {
      setSelectedService(null);
    }
  }, [serviceParam, services]);

  const capitalizedWord = location
    ? location.charAt(0).toUpperCase() + location.slice(1)
    : "";


  return (
    <div className="bg-yellow-400 text-black flex flex-col min-h-screen">
      <SocialWidget />
      <Navbar />
      <HeroSection />

      <section id="services-list" className="max-w-7xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {location ? (
              <>
                Services in <span className="text-white">{capitalizedWord}</span>
              </>
            ) : (
              <>
                Choose your <span className="text-white animate-pulse">Path</span>
              </>
            )}
          </h2>
          <p className="text-xl sm:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
            Your Plan, Your Pace...
          </p>
        </div>

        {/* Service Cards */}
        <div
          className={`grid gap-10 ${
            services?.length === 1
              ? "grid-cols-1"
              : services?.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {services?.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              subtitle={service.subtitle}
              image={service.image}
              onClick={() => {
                const slug = service.title.toLowerCase().replace(/\s+/g, "-");
                router.push(`?service=${slug}`, { scroll: false });
              }}
            />
          ))}
        </div>
      </section>

      <Footer />

      {/* Carousel Modal */}
      {selectedService && (
        <ServiceCarousel
          open={!!selectedService}
          onClose={() => router.push("", { scroll: false })}
          programs={selectedService.programs}
          initialProgram={programParam ? parseInt(programParam) : 0}
        />
      )}
    </div>
  );
}
