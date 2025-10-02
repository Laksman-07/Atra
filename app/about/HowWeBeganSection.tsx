'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowWeBeganSection() {
  const paragraphs = [
    "It all started when an international guest speaker at our college asked why a country of 1.4 billion wins so few Olympic medals. It wasn't a lack of talent – it was a lack of access to the science behind performance. That was the question that started Atra.",
    "We're Moosa and Rudhresh, and we created Atra to make sports science accessible – from rising athletes to professionals, and even everyday individuals who want more than just random workouts.",
    "This aim was also personal. We saw the gap for young sports scientists in India – most of them ended up in regular gyms, switched industries, or went abroad. Atra became a place for all of them to belong.",
    "Today, our team of 15+ sports scientists powers three centers.",
    "We're here to bring purpose, structure, and science to training, whether it's to perform, recover, or to just simply live better.",
  ];

  return (
    <section className="relative w-full bg-black py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="w-full md:w-1/2 max-w-full rounded-lg overflow-hidden shadow-lg"
>
<Image
  src="/founders.jpeg"
  alt="Moosa and Rudhresh"
  width={600}   // actual image width
  height={400}  // actual image height
  className="w-full h-auto object-cover rounded-lg"
  priority
/>

</motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              How <span className="text-yellow-400">We Began</span>
            </h2>
            <div className="space-y-6">
              {paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="text-gray-500 md:text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
