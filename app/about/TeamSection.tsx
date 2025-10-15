"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: "Yugendhar", role: "Chief of Operations", image: "/yugendhar.jpeg" },
  { name: "Karthik Kalimuthu", role: "Chief of Sales & Strategic Initiatives", image: "/karthik.jpeg" },
  { name: "Raj Mohan", role: "Managing Partner - Atra Coimbatore", image: "/raj.jpeg" },
  { name: "Karthikeyan Thangavel", role: "Lead Sports Scientist - Head S&C Coach", image: "/karthikeyan.jpeg" },
  { name: "Sathya Kumar", role: "Lead Sports Scientist", image: "/sathya.jpeg" },
  { name: "Kabilya Arulraj", role: "Coimbatore Center Head", image: "/kabilya.jpeg" },
  { name: "Anton Rego", role: "Bangalore Center Head", image: "/anton.jpeg" },
  { name: "Prithick Raja", role: "Chennai Center Head", image: "/prithick.jpeg" },
  { name: "Vahajadhul Abbas", role: "Sports Scientist - Creative Head", image: "/abbas.jpeg" },
  { name: "Monika Selvaramuthi", role: "Sports Scientist", image: "/monika.jpeg" },
  { name: "Rishi Silora", role: "Sports Scientist", image: "/rishi.jpeg" },
  { name: "Nandha Pratyush", role: "Sports Scientist", image: "/nandha.jpeg" },
  { name: "Ram Prakash", role: "Operations Executive", image: "/ram.jpeg" },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isImageLoading, setIsImageLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive grid layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection("next");
    setIsTransitioning(true);
    setIsImageLoading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
      setIsTransitioning(false);
    }, 100);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection("prev");
    setIsTransitioning(true);
    setIsImageLoading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
      setIsTransitioning(false);
    }, 100);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % team.length;
      cards.push({ ...team[index], key: `${currentIndex}-${i}` });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative w-full bg-black text-white py-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Meet the <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Passionate minds working together to push boundaries
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={containerRef}>
          {/* Black overlay while image loads */}
          {isImageLoading && (
            <div className="absolute inset-0 bg-black z-20 transition-opacity duration-500 opacity-100" />
          )}

          <div className="overflow-visible relative z-10">
            <div
              className={`grid gap-6 ${
                slidesToShow === 1
                  ? "grid-cols-1"
                  : slidesToShow === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {visibleCards.map((member, i) => {
                const centerIndex = Math.floor(slidesToShow / 2);
                const isActive = i === centerIndex;

                return (
                  <div
                    key={member.key}
                    className={`w-full transition-all duration-500 ${
                      isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
                    }`}
                    style={{
                      animation: `${
                        direction === "next" ? "slideInRight" : "slideInLeft"
                      } 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
                    }}
                  >
                    <div
                      className={`bg-yellow-400 text-black rounded-2xl overflow-hidden shadow-xl mx-auto max-w-sm h-full transition-all duration-500 ${
                        isActive ? "shadow-2xl scale-105" : "shadow-md hover:scale-100"
                      }`}
                    >
                      <div className="relative h-96 overflow-hidden bg-black">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                          onLoad={() => setIsImageLoading(false)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-200 z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-200 z-30"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsImageLoading(true);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-yellow-400 w-8" : "bg-gray-600 w-2 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
