'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="/bg-video1.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12 lg:px-20 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-yellow-400 block">Atra</span>
          <span className="text-white block sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            For athletes, injury-survivors, and busy professionals
          </span>
        </h1>
        

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl my-8 leading-relaxed">
          Professional sports science solutions across South India.  
          Expert coaching, recovery strategies, and performance analysis tailored for your journey.
        </p>

        <Link href={'/contact'}>
        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30"
        >
          Book Your Free Consultation
        </Button>
        </Link>
      </div>
    </section>
  );
}
