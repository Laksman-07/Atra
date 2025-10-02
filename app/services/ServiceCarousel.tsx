"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Program } from "./regionServicesData";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


interface ServiceCarouselProps {
  open: boolean;
  onClose: () => void;
  programs: Program[];
  initialProgram?: number;
  location?: string;
}

export default function ServiceCarousel({
  open,
  onClose,
  programs,
  initialProgram = 0,
  location
}: ServiceCarouselProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current location from URL
  const currentLocation = searchParams.get("location") || "";

  // Determine initial slide index from URL if "program" is present
  const initialProgramParam = searchParams.get("program");
  const initialProgramIndex =
    initialProgramParam != null
      ? programs.findIndex((p) => p.title === initialProgramParam)
      : initialProgram;

  const [currentSlide, setCurrentSlide] = useState(
    initialProgramIndex >= 0 ? initialProgramIndex : 0
  );

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: currentSlide,
    slideChanged(s) {
      const newIndex = s.track.details.rel;
      setCurrentSlide(newIndex);

      // Update program param in URL using title
      const params = new URLSearchParams(window.location.search);
      params.set("program", programs[newIndex].title);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
  });

useEffect(() => {
  // Only run if modal is opening
  if (!open) return;
  if (programs.length === 0) return;

  const newIndex =
    initialProgramParam != null
      ? programs.findIndex((p) => p.title === initialProgramParam)
      : undefined;

  const idx = newIndex !== undefined && newIndex >= 0 ? newIndex : initialProgram;

  setCurrentSlide(idx);
  instanceRef.current?.moveToIdx(idx);

  // ✅ Only update URL if modal is opening
  const params = new URLSearchParams(window.location.search);
  params.set("program", programs[idx].title);
  router.replace(`?${params.toString()}`, { scroll: false });
}, [open]); // only depend on `open`

  const handleClose = () => {
    onClose();
  
    // Get current pathname
    const pathname = window.location.pathname;
  
    // Build new search params without 'service' and 'program'
    const params = new URLSearchParams(window.location.search);
    params.delete("service");
    params.delete("program");
  
    // Replace URL without reloading
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-yellow-400 hover:bg-yellow-300 rounded-full p-2 shadow-lg z-50"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
            </button>

            {/* Carousel */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-12 sm:py-16">
              <div ref={sliderRef} className="keen-slider">
                {programs.map((program, idx) => (
                  <div
                    key={idx}
                    className="keen-slider__slide flex items-center justify-center px-4 sm:px-8"
                  >
                    <motion.div
                      className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-10 shadow-lg border border-white/10 flex flex-col"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-yellow-400">
                        {program.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-white mb-8">
                        {program.price}
                      </p>

                      {program.inclusives.length > 0 && (
                        <div className="text-left mb-8">
                          <h4 className="font-semibold text-yellow-300 mb-2 text-lg">
                            Inclusive of:
                          </h4>
                          <ul className="text-gray-300 list-disc space-y-2 pl-5 text-sm sm:text-base">
                            {program.inclusives.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-2 sm:px-10 sm:py-3 rounded-full shadow-xl transition-transform hover:scale-105">
                        Register
                      </button>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 rounded-full p-2 sm:p-3 shadow-lg"
              >
                <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-black" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 rounded-full p-2 sm:p-3 shadow-lg"
              >
                <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-black" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-6 pb-4 sm:mt-8">
                {programs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                      currentSlide === idx
                        ? "bg-yellow-400 scale-125"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}