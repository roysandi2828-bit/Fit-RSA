"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/80 via-[#0C0C0C]/60 to-[#0C0C0C] z-10" />
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-gray-300">AI-Powered Workout Plans</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block gradient-text">Fitness Journey</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Get personalized workout plans tailored to your goals, experience level, and body metrics. 
              Start your transformation today with science-backed training programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="btn-primary animate-pulse-glow"
              >
                Generate Workout Plan
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-400">Exercises</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-gray-400">Users</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your Progress</h3>
                  <p className="text-sm text-gray-400">Track your journey</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Strength</span>
                    <span className="text-sm font-semibold text-[#FF6B35]">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Cardio</span>
                    <span className="text-sm font-semibold text-[#FF6B35]">72%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Flexibility</span>
                    <span className="text-sm font-semibold text-[#FF6B35]">68%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#FF6B35]" />
                    <span className="text-sm text-gray-400">Weekly Goal</span>
                  </div>
                  <span className="font-bold text-lg">4/5 Days</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#FF6B35] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
