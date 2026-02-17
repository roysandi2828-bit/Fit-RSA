"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const athletes = [
  { id: 1, sport: "Basketball", initials: "JD" },
  { id: 2, sport: "Soccer", initials: "MS" },
  { id: 3, sport: "Running", initials: "AK" },
  { id: 4, sport: "Tennis", initials: "LW" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Athletes Avatars */}
          <div className="flex justify-center items-center mb-4">
            <div className="flex -space-x-3">
              {athletes.map((athlete, index) => (
                <motion.div
                  key={athlete.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-gray-900 shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {athlete.initials}
                    </span>
                  </div>
                </motion.div>
              ))}
              {/* +2k Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center border-2 border-gray-900 shadow-lg"
              >
                <span className="text-white font-bold text-xs">2k+</span>
              </motion.div>
            </div>
          </div>

          {/* Trusted by Athletes Text */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-semibold text-white mb-3"
          >
            Trusted by Athletes
          </motion.h3>

          {/* Star Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-1"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + star * 0.05 }}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm mt-2"
          >
            Join thousands of athletes achieving their fitness goals
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
