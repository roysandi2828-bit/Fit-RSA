"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface CallToActionProps {
  onGetStarted: () => void;
}

export default function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 via-[#FF8C42]/20 to-[#FF6B35]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FF8C42]/20 to-[#FF6B35]/20 rounded-full blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm font-semibold">Start Your Transformation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Ready to Transform
              <span className="block gradient-text">Your Body?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Join thousands of people who have achieved their fitness goals with personalized workout plans. 
              Your journey starts with a single click.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="btn-primary animate-pulse-glow flex items-center justify-center gap-2 text-lg px-10 py-5"
              >
                Get Your Free Plan
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-500 mt-6"
            >
              No credit card required • Takes less than 2 minutes
            </motion.p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-8 mt-12 text-center"
        >
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Exercises</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
