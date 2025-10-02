'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Collaborator {
  name: string;
  image: string;
}

export default function PremiumCollaboratorsCarousel() {
  const collaborators: Collaborator[] = [
    { name: 'FC Marina Academy - Chennai', image: 'collab-fcmarina.jpg' },
    { name: 'Raman Sports Academy - Bangalore', image: 'collab-ramansportsacademy.jpg' },
    { name: 'Acrophase - IIT Madras', image: 'collab-acrophase.jpg' },
    { name: 'Devils Circuit - Maruti Suzuki', image: 'collab-devilscircuit2.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 30, origin: "center" },
    breakpoints: {
      '(max-width: 640px)': { slides: { perView: 1.2, spacing: 20 , origin: "center"} },
      '(min-width: 768px)': { slides: { perView: 3, spacing: 30 } },
      '(min-width: 1024px)': { slides: { perView: 4, spacing: 40} },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    if (!slider.current) return;
    const interval = setInterval(() => slider.current?.next(), 3000);
    return () => clearInterval(interval);
  }, [slider]);

  // Thin arrow SVG
  // const ArrowLeft = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="w-6 h-6 text-white"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke="currentColor"
  //     strokeWidth={2}
  //   >
  //     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  //   </svg>
  // );

  // const ArrowRight = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="w-6 h-6 text-white"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke="currentColor"
  //     strokeWidth={2}
  //   >
  //     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  //   </svg>
  // );

  return (
    <section className="py-20 bg-yellow-400 relative w-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-4xl md:text-5xl text-white font-extrabold mb-4 md:mb-6"
>
  Our <span className="text-black animate-pulse">Collaborations</span>
</motion.h2>

<p className="text-lg md:text-xl text-black">
  We proudly work with leading brands and organizations
</p>

        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          {/* <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ArrowLeft />
          </button> */}

          {/* Keen Slider */}
          <div ref={sliderRef} className="keen-slider w-full">
            {collaborators.map((collab, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className={`keen-slider__slide flex flex-col items-center transition-transform duration-500
                    ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}
                  `}
                >
                  <div className="w-44 h-44 md:w-48 md:h-48 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <h3
                    className={`mt-4 text-center text-lg md:text-xl font-medium transition-colors duration-500 ${
                      isActive ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    {collab.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right Arrow
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ArrowRight />
          </button> */}
        </div>
      </div>
    </section>
  );
}
