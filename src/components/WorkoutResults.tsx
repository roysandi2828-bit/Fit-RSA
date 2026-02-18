"use client";

import { motion } from "framer-motion";
import { User, Activity, Heart, Dumbbell, RefreshCw, Download, Share2, Lightbulb } from "lucide-react";
import type { WorkoutPlan, UserData } from "@/lib/workoutGenerator";

interface WorkoutResultsProps {
  userData: UserData;
  workoutPlan: WorkoutPlan;
  onRegenerate: () => void;
}

export default function WorkoutResults({ userData, workoutPlan, onRegenerate }: WorkoutResultsProps) {
  const handleDownloadPDF = () => {
    // Create a simple text version of the workout plan
    const content = `
PERSONALIZED WORKOUT PLAN
========================

PROFILE
-------
BMI: ${workoutPlan.bmi} (${workoutPlan.bmiCategory})
Goal: ${userData.fitnessGoal}
Level: ${userData.experienceLevel}
Frequency: ${userData.workoutDays}x per week
Target Areas: ${userData.targetAreas.join(', ')}

STRENGTH ROUTINE
----------------
${workoutPlan.strengthRoutine.map((ex, i) => `${i + 1}. ${ex.name}
   Sets: ${ex.sets} | Reps: ${ex.reps} | Rest: ${ex.rest}`).join('\n')}

CARDIO ROUTINE
--------------
${workoutPlan.cardioRoutine.map((ex, i) => `${i + 1}. ${ex.name}
   Sets: ${ex.sets} | Duration: ${ex.reps} | Rest: ${ex.rest}`).join('\n')}

TRAINER NOTES
-------------
Nutrition: ${workoutPlan.trainerNotes.nutrition}
Recovery: ${workoutPlan.trainerNotes.recovery}
Progression: ${workoutPlan.trainerNotes.progression}
    `.trim();

    // Create a blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workout-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareText = `Check out my personalized workout plan! 💪\n\nGoal: ${userData.fitnessGoal}\nLevel: ${userData.experienceLevel}\nFrequency: ${userData.workoutDays}x per week`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Workout Plan',
          text: shareText,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Workout plan details copied to clipboard!');
      } catch (err) {
        alert('Unable to share. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Personalized
            <span className="block gradient-text">Workout Plan</span>
          </h1>
          <p className="text-xl text-gray-400">
            Tailored specifically for your goals and fitness level
          </p>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-2xl mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-[#ff3535] to-[#FF8C42] p-3 rounded-xl">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Your Profile</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-1">BMI</div>
              <div className="text-2xl font-bold gradient-text">{workoutPlan.bmi}</div>
              <div className="text-xs text-gray-500">{workoutPlan.bmiCategory}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Goal</div>
              <div className="text-lg font-semibold">{userData.fitnessGoal}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Level</div>
              <div className="text-lg font-semibold">{userData.experienceLevel}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Frequency</div>
              <div className="text-lg font-semibold">{userData.workoutDays}x per week</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-sm text-gray-400 mb-2">Target Areas</div>
            <div className="flex flex-wrap gap-2">
              {userData.targetAreas.map((area) => (
                <span
                  key={area}
                  className="glass-card px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strength Routine */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Strength Routine</h2>
            </div>

            <div className="space-y-4">
              {workoutPlan.strengthRoutine.map((exercise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{exercise.name}</h3>
                    <span className="text-xs glass-card px-2 py-1 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Sets</div>
                      <div className="font-semibold text-[#ff3535]">{exercise.sets}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Reps</div>
                      <div className="font-semibold text-[#ff3535]">{exercise.reps}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Rest</div>
                      <div className="font-semibold text-[#ff3535]">{exercise.rest}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cardio Routine */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-3 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Cardio Routine</h2>
            </div>

            <div className="space-y-4">
              {workoutPlan.cardioRoutine.map((exercise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{exercise.name}</h3>
                    <span className="text-xs glass-card px-2 py-1 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Sets</div>
                      <div className="font-semibold text-[##ff3535]">{exercise.sets}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Duration</div>
                      <div className="font-semibold text-[#ff3535]">{exercise.reps}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Rest</div>
                      <div className="font-semibold text-[#ff3535]">{exercise.rest}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trainer Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 rounded-2xl mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-yellow-500 to-red-500 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Trainer Notes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[#ff3535]">Nutrition</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {workoutPlan.trainerNotes.nutrition}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[#ff3535]">Recovery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {workoutPlan.trainerNotes.recovery}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[#ff3535]">Progression</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {workoutPlan.trainerNotes.progression}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRegenerate}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Generate New Plan
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadPDF}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share Plan
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
