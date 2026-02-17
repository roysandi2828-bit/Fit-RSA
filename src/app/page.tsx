"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkoutTypes from "@/components/WorkoutTypes";
import Trainers from "@/components/Trainers";
import BentoGrid from "@/components/BentoGrid";
import QuestionnaireForm from "@/components/QuestionnaireForm";
import WorkoutResults from "@/components/WorkoutResults";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { generateWorkoutPlan } from "@/lib/workoutGenerator";
import type { UserData, WorkoutPlan } from "@/lib/workoutGenerator";

type AppView = "landing" | "questionnaire" | "results";

export default function Home() {
  const [currentView, setCurrentView] = useState<AppView>("landing");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  const handleGetStarted = () => {
    setCurrentView("questionnaire");
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuestionnaireSubmit = (data: UserData) => {
    setUserData(data);
    const plan = generateWorkoutPlan(data);
    setWorkoutPlan(plan);
    setCurrentView("results");
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLanding = () => {
    setCurrentView("landing");
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegenerate = () => {
    setCurrentView("questionnaire");
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {currentView === "landing" && (
        <>
          <Hero onGetStarted={handleGetStarted} />
          <Features />
          <WorkoutTypes />
          <BentoGrid />
          <Trainers />
          <CallToAction onGetStarted={handleGetStarted} />
          <Footer />
        </>
      )}

      {currentView === "questionnaire" && (
        <>
          <QuestionnaireForm
            onSubmit={handleQuestionnaireSubmit}
            onBack={handleBackToLanding}
          />
          <Footer />
        </>
      )}

      {currentView === "results" && userData && workoutPlan && (
        <>
          <WorkoutResults
            userData={userData}
            workoutPlan={workoutPlan}
            onRegenerate={handleRegenerate}
          />
          <Footer />
        </>
      )}
    </main>
  );
}
