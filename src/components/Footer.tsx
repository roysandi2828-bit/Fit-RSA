"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] p-2 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Fit-R.S.A</h3>
                <p className="text-xs text-gray-400">Personal Workout Generator</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your fitness journey with AI-powered personalized workout plans designed for your unique goals.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:contact@fitrsa.com"
                className="glass-card p-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Fit-R.S.A. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
            <span>by</span>
            <span className="font-semibold text-[#FF6B35]">Roy Sandi Andrian</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
