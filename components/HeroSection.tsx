'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Gradient for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12 lg:px-20 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white block sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Behind Every Move, There's Science
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl my-8 leading-relaxed">
          Bringing sports science to your training so you can perform better,
          recover faster, and keep pushing your limits!
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
