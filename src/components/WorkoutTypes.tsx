"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Flame, Zap } from "lucide-react";

const workoutTypes = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with progressive resistance training.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Cardio Workouts",
    description: "Improve endurance and burn calories with heart-pumping exercises.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Flame,
    title: "HIIT Sessions",
    description: "Maximize fat burn with high-intensity interval training protocols.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    description: "Enhance daily movement patterns and overall athletic performance.",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function WorkoutTypes() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="block gradient-text">Training Style</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mix and match different workout types to create the perfect training program for your goals.
          </p>
        </motion.div>

        {/* Workout Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workoutTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${type.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {type.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${type.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
