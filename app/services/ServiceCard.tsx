'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  extra: string;
  forwhom: string;
  wedo: string;
  youget: string;
}

export default function ServiceCard({
  title,
  image,
  description,
  extra,
  forwhom,
  wedo,
  youget,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-transform transform hover:-translate-y-2"
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
      >
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-xl w-full rounded-3xl shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-yellow-400 z-0"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />

              {/* Content (above glow) */}
              <div className="relative z-10 p-8 max-h-[75vh] overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
                >
                  <X className="h-5 w-5 text-gray-800" />
                </button>

                <motion.h3
                  className="text-3xl font-extrabold mb-4 text-gray-900 text-center"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-700 mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {description}
                </motion.p>

                <p className="text-gray-600 mb-8 text-center">{extra}</p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      For Whom
                    </h4>
                    <p className="text-gray-700">{forwhom}</p>
                  </motion.div>

                  <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      We Do
                    </h4>
                    <p className="text-gray-700">{wedo}</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      You Get
                    </h4>
                    <p className="text-gray-700">{youget}</p>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="mt-10 flex justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="px-10 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    Register
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
