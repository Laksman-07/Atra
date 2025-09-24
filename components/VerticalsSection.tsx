'use client';

import { motion } from 'framer-motion';
import { Bebas_Neue } from 'next/font/google';
import { Activity, Heart, Bandage } from 'lucide-react';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function VerticalsSection() {
  const verticals = [
    { title: 'Performance', Icon: Activity },
    { title: 'Longevity', Icon: Heart },
    { title: 'Rehabilitation', Icon: Bandage },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-14 md:mb-20"
        >
          Our <span className="text-yellow-400">Verticals</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
          {verticals.map(({ title, Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-40 sm:h-48 md:h-56 lg:h-64 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-yellow-400 text-black shadow-xl overflow-hidden border border-yellow-300/40 transition-all duration-700"
            >
              {/* Hover background swap */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-0 group-hover:opacity-100 transition duration-700 z-0"></div>

              {/* Glow pulse */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl blur-2xl bg-yellow-400/0 group-hover:bg-yellow-400/20 transition duration-700 z-0"></div>

              {/* Icon */}
              <div className="mb-4 transition duration-500 group-hover:scale-110 z-10">
                <Icon
                  size={48}
                  className="text-black group-hover:text-yellow-400 stroke-[2.5]"
                />
              </div>

              {/* Title */}
              <span
                className={`${bebas.className} z-10 text-2xl sm:text-3xl md:text-4xl tracking-wide transition duration-500 group-hover:scale-110 group-hover:text-yellow-400 group-hover:drop-shadow-lg`}
              >
                {title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Whether you’re an athlete chasing wins, someone who just wants to stay
          active, or working your way back from pain, we’ve got you covered!
        </motion.p>
      </div>
    </section>
  );
}
