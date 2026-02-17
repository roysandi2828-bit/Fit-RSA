"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Plus, Minus } from "lucide-react";
import type { UserData } from "@/lib/workoutGenerator";

interface QuestionnaireFormProps {
  onSubmit: (data: UserData) => void;
  onBack: () => void;
}

const targetAreaOptions = ["Chest", "Back", "Legs", "Arms", "Shoulders", "Core"];
const fitnessGoalOptions = ["Weight Loss", "Muscle Gain", "General Fitness", "Athletic Performance"];
const experienceLevelOptions = ["Beginner", "Intermediate", "Advanced"];

export default function QuestionnaireForm({ onSubmit, onBack }: QuestionnaireFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserData>>({
    targetAreas: [],
    weight: 70,
    height: 170,
    age: 25,
    gender: "Male",
    fitnessGoal: "",
    experienceLevel: "",
    workoutDays: 3,
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSubmit(formData as UserData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const toggleTargetArea = (area: string) => {
    const current = formData.targetAreas || [];
    if (current.includes(area)) {
      setFormData({ ...formData, targetAreas: current.filter((a) => a !== area) });
    } else {
      setFormData({ ...formData, targetAreas: [...current, area] });
    }
  };

  const updateNumber = (field: keyof UserData, delta: number) => {
    const current = (formData[field] as number) || 0;
    setFormData({ ...formData, [field]: Math.max(1, current + delta) });
  };

  const canProceed = () => {
    if (step === 1) return (formData.targetAreas?.length || 0) > 0;
    if (step === 2) return formData.weight && formData.height && formData.age && formData.gender;
    if (step === 3) return formData.fitnessGoal && formData.experienceLevel && formData.workoutDays;
    return false;
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Step {step} of {totalSteps}</span>
            <span className="text-sm text-[#FF6B35] font-semibold">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Target Areas */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Which areas do you want to
                  <span className="block gradient-text">focus on?</span>
                </h2>
                <p className="text-gray-400 mb-8">Select one or more target areas for your workout plan.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {targetAreaOptions.map((area) => (
                    <motion.button
                      key={area}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleTargetArea(area)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        formData.targetAreas?.includes(area)
                          ? "border-[#FF6B35] bg-[#FF6B35]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{area}</span>
                        {formData.targetAreas?.includes(area) && (
                          <Check className="w-5 h-5 text-[#FF6B35]" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Biometrics */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tell us about
                  <span className="block gradient-text">yourself</span>
                </h2>
                <p className="text-gray-400 mb-8">We&apos;ll use this to calculate your BMI and personalize your plan.</p>

                <div className="space-y-6">
                  {/* Weight */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Weight (kg)</label>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("weight", -1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Minus className="w-5 h-5" />
                      </motion.button>
                      <div className="flex-1 glass-card p-4 rounded-xl text-center">
                        <span className="text-2xl font-bold">{formData.weight}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("weight", 1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Height */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Height (cm)</label>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("height", -1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Minus className="w-5 h-5" />
                      </motion.button>
                      <div className="flex-1 glass-card p-4 rounded-xl text-center">
                        <span className="text-2xl font-bold">{formData.height}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("height", 1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Age</label>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("age", -1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Minus className="w-5 h-5" />
                      </motion.button>
                      <div className="flex-1 glass-card p-4 rounded-xl text-center">
                        <span className="text-2xl font-bold">{formData.age}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("age", 1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Gender</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Male", "Female"].map((gender) => (
                        <motion.button
                          key={gender}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, gender })}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.gender === gender
                              ? "border-[#FF6B35] bg-[#FF6B35]/10"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          {gender}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Goals & Experience */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What&apos;s your
                  <span className="block gradient-text">fitness goal?</span>
                </h2>
                <p className="text-gray-400 mb-8">Help us tailor the perfect workout plan for you.</p>

                <div className="space-y-6">
                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Primary Goal</label>
                    <div className="grid grid-cols-2 gap-4">
                      {fitnessGoalOptions.map((goal) => (
                        <motion.button
                          key={goal}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, fitnessGoal: goal })}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.fitnessGoal === goal
                              ? "border-[#FF6B35] bg-[#FF6B35]/10"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          {goal}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Experience Level</label>
                    <div className="grid grid-cols-3 gap-4">
                      {experienceLevelOptions.map((level) => (
                        <motion.button
                          key={level}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, experienceLevel: level })}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.experienceLevel === level
                              ? "border-[#FF6B35] bg-[#FF6B35]/10"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          {level}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Workout Days */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Workout Days per Week</label>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("workoutDays", -1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Minus className="w-5 h-5" />
                      </motion.button>
                      <div className="flex-1 glass-card p-4 rounded-xl text-center">
                        <span className="text-2xl font-bold">{formData.workoutDays}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateNumber("workoutDays", 1)}
                        className="glass-card p-3 rounded-xl hover:bg-white/10"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="btn-secondary flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: canProceed() ? 1.05 : 1 }}
              whileTap={{ scale: canProceed() ? 0.95 : 1 }}
              onClick={handleNext}
              disabled={!canProceed()}
              className={`btn-primary flex-1 flex items-center justify-center gap-2 ${
                !canProceed() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {step === totalSteps ? "Generate Plan" : "Next"}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
