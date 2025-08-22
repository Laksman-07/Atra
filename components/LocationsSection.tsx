'use client';

import { MapPin, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface LocationCardProps {
  title: string;
  image: string;
  icon: React.ReactNode;
}

function LocationCard({ title, image, icon }: LocationCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
      <div className="relative h-80 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

          {/* Icon */}
          <div className="absolute top-6 right-6 bg-yellow-400 p-3 rounded-full text-black transform transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-300 shadow-lg">
            {icon}
          </div>

          {/* Centered Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center transform transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400">
              {title}
            </h3>
          </div>

          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </Card>
  );
}

export default function LocationsSection() {
  const locations = [
    {
      title: 'Chennai',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'Bangalore',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'Coimbatore',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: 'Online',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in-up">
            Find Your
            <span className="text-yellow-400 animate-pulse"> Atra Home</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
