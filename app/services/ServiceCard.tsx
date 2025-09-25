"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick: () => void;
}

export default function ServiceCard({
  title,
  subtitle,
  image,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      className="cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl group w-full aspect-[16/10] min-h-[280px] md:min-h-[320px]"
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg">
          {title}
        </h3>
        <p className="text-base md:text-lg opacity-90">{subtitle}</p>
      </div>
    </motion.div>
  );
}
