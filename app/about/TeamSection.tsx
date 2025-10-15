"use client";

import { useState, useEffect } from "react";

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
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Responsive slide count
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

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

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

        <div className="overflow-visible">
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
                    <div className="relative h-100 overflow-hidden bg-gray-300">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-opacity duration-500 opacity-0"
                            loading="lazy"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        />
                        </div>


                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
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
