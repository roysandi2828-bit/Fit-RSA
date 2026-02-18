"use client";

import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

interface HeaderProps {
  onGetStarted: () => void;
}

export default function Header({ onGetStarted }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#ff3535] to-[#FF8C42] p-2 rounded-xl">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Fit-RSA</h1>
              <p className="text-xs text-gray-400">Personal Workout Generator</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-[#ff3535] transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-[#ff3535] transition-colors">
              Features
            </a>
            <a href="#trainers" className="text-gray-300 hover:text-[#ff3535] transition-colors">
              Trainers
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#ff3535] transition-colors">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="hidden md:block bg-[#ff3535] hover:bg-[#FF8C42] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
