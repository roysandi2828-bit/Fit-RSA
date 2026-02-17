"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Users } from "lucide-react";
import { useState } from "react";

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    experience: "8 years",
    rating: 4.9,
    clients: 250,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
  },
  {
    name: "Mike Chen",
    specialty: "HIIT & Weight Loss",
    experience: "6 years",
    rating: 4.8,
    clients: 180,
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
  },
  {
    name: "Emma Rodriguez",
    specialty: "Yoga & Flexibility",
    experience: "10 years",
    rating: 5.0,
    clients: 320,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
  },
  {
    name: "David Kim",
    specialty: "Bodybuilding & Nutrition",
    experience: "12 years",
    rating: 4.9,
    clients: 400,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
  },
];

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="trainers" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B35]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block glass-card px-4 py-2 rounded-full mb-4"
          >
            <span className="text-sm text-[#FF6B35] font-semibold">Expert Team</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our
            <span className="block gradient-text">Elite Trainers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from certified professionals with years of experience in transforming lives.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveIndex(index)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{trainer.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#FF6B35] transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-[#FF6B35] text-sm font-semibold mb-4">
                  {trainer.specialty}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award className="w-4 h-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{trainer.clients}+ clients trained</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-white/5 hover:bg-[#FF6B35] text-white font-semibold py-2 rounded-lg transition-all duration-300"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            All trainers are certified professionals with proven track records
          </p>
        </motion.div>
      </div>
    </section>
  );
}
