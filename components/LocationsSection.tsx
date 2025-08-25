'use client';

import { MapPin, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface LocationCardProps {
  title: string;
  image: string;
  icon: React.ReactNode;
}

function LocationCard({ title, image, icon }: LocationCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-none">
      {/* Responsive height: landscape on mobile */}
      <div className="relative h-40 md:h-60 lg:h-80 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

          {/* Centered Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-medium text-white text-center transform transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              {title}
            </h3>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </Card>
  );
}


export default function LocationsSection() {
  const locations = [
    {
      title: 'CHENNAI',
      image: '/Chennai.jpg',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'BANGALORE',
      image: '/Banglore.jpg',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'COIMBATORE',
      image: '/Coimbatore.jpg',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'ONLINE',
      image: '/online.jpg',
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-yellow-400">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
          Find Your
          <span className="text-white animate-pulse"> Atra Home</span>
        </h2>
        <p className="text-xl sm:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Expert support, wherever you are.
        </p>
      </div>

      {/* Location Cards - full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
        {locations.map((location, index) => (
          <Link
            key={index}
            href="/services"
            className="block animate-fade-in-scale"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <LocationCard {...location} />
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
