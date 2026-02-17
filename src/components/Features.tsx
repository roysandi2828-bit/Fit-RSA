"use client";

import { motion } from "framer-motion";
import { Target, Brain, TrendingUp, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Plans",
    description: "Smart algorithms create personalized workouts based on your unique profile and goals.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Whether it's weight loss, muscle gain, or endurance, we've got you covered.",
  },
  {
    icon: TrendingUp,
    title: "Progressive Training",
    description: "Plans that adapt and scale with your fitness level for continuous improvement.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Trainer notes and tips to ensure proper form and maximize results.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose your workout frequency and we'll optimize your training split.",
  },
  {
    icon: Shield,
    title: "Science-Backed",
    description: "Every exercise and routine is based on proven fitness principles.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
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
            <span className="text-sm text-[#FF6B35] font-semibold">Why Choose Fit-R.S.A</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help you achieve your fitness goals faster and smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B35] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to experience the difference?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
