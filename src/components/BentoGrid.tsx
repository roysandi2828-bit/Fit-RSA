"use client";

import { motion } from "framer-motion";
import { BarChart3, Calendar, Trophy, Smartphone } from "lucide-react";

export default function BentoGrid() {
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
            Powerful Features
            <span className="block gradient-text">At Your Fingertips</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Progress Tracking */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">
                  Track Your Progress
                </h3>
                <p className="text-gray-400">
                  Visualize your fitness journey with detailed analytics and insights.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-3 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Mock Chart */}
            <div className="flex items-end gap-2 h-32">
              {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-[#FF6B35] to-[#FF8C42] rounded-t-lg"
                />
              ))}
            </div>
          </motion.div>

          {/* Tall Card - Calendar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:row-span-2 glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl w-fit mb-6">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">
              Smart Scheduling
            </h3>
            <p className="text-gray-400 mb-6">
              Plan your workouts around your busy life with flexible scheduling.
            </p>
            
            {/* Mock Calendar */}
            <div className="space-y-3">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 text-sm text-gray-400">{day}</div>
                  <div className={`flex-1 h-8 rounded-lg ${
                    i < 5 ? "bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]" : "bg-white/5"
                  }`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Wide Card - Achievements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">
                  Earn Achievements
                </h3>
                <p className="text-gray-400">
                  Stay motivated with badges and milestones as you progress.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Mock Badges */}
            <div className="flex gap-4">
              {[
                { color: "from-yellow-500 to-orange-500", label: "7 Day Streak" },
                { color: "from-purple-500 to-pink-500", label: "First Workout" },
                { color: "from-green-500 to-emerald-500", label: "Goal Crusher" },
                { color: "from-blue-500 to-cyan-500", label: "Consistency King" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-1"
                >
                  <div className={`bg-gradient-to-br ${badge.color} aspect-square rounded-2xl flex items-center justify-center mb-2`}>
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs text-center text-gray-400">{badge.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Square Card - Mobile App */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-4 rounded-2xl mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">
              Mobile Ready
            </h3>
            <p className="text-gray-400 text-sm">
              Access your workouts anywhere, anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
