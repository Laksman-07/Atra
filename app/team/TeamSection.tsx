"use client";

import { motion } from "framer-motion";

const head = {
  name: "Dr. John Smith",
  role: "Head of Performance Science",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
};

const team = [
  {
    name: "Emily Johnson",
    role: "Strength & Conditioning Coach",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Rehab & Recovery Specialist",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Nutrition & Wellness Expert",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Kim",
    role: "Athlete Performance Analyst",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Isabella Brown",
    role: "Sports Psychologist",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Ethan Carter",
    role: "Sports Physiotherapist",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Olivia Green",
    role: "Performance Nutritionist",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Liam White",
    role: "Assistant Performance Coach",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Nutrition & Wellness Expert",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Meet <span className="text-yellow-400">Our Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mt-4"
        >
          The team that <span className="text-yellow-400">powers your progress</span>
        </motion.p>
      </div>

      {/* Head Member */}
      <div className="flex justify-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group rounded-2xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-2 transition-all duration-500 max-w-sm w-full"
        >
          <div className="flex justify-center -mt-20">
            <div className="relative">
              <motion.img
                src={head.image}
                alt={head.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg group-hover:scale-105 transition-transform duration-500"
                whileHover={{ rotate: 3, scale: 1.05 }}
              />
              <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-20 group-hover:opacity-40 transition" />
            </div>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold text-white">{head.name}</h3>
            <p className="text-sm text-gray-400">{head.role}</p>
          </div>
        </motion.div>
      </div>

      {/* Team Members in 3x3 Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="flex justify-center -mt-20">
              <div className="relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-20 group-hover:opacity-40 transition" />
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
