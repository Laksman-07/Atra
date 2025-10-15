'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const params = useParams();
  const location = (params?.location as string)?.toLowerCase() || 'chennai'; // default to chennai

  const regionImages: Record<string, string> = {
    chennai: '/Atra-chennai.jpg',
    bangalore: '/Atra-bangalore.jpg',
    coimbatore: '/Atra-coimbatore.jpg',
    online: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920',

  };

  const imageSrc = regionImages[location] || regionImages['chennai'];

  const handleScroll = () => {
    const section = document.getElementById('services-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with fade transition */}
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={`${location} background`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Choose the path that fits your journey
        </p>
        <button
          onClick={handleScroll}
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
