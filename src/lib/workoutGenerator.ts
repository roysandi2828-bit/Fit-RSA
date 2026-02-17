export interface UserData {
  targetAreas: string[];
  weight: number;
  height: number;
  age: number;
  gender: string;
  fitnessGoal: string;
  experienceLevel: string;
  workoutDays: number;
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

export interface WorkoutPlan {
  bmi: number;
  bmiCategory: string;
  strengthRoutine: Exercise[];
  cardioRoutine: Exercise[];
  trainerNotes: {
    nutrition: string;
    recovery: string;
    progression: string;
  };
}

const exerciseDatabase = {
  chest: {
    beginner: [
      { name: "Push-ups", sets: "3", reps: "8-10", rest: "60s" },
      { name: "Incline Push-ups", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Dumbbell Chest Press", sets: "3", reps: "10-12", rest: "90s" },
    ],
    intermediate: [
      { name: "Barbell Bench Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", rest: "90s" },
      { name: "Cable Flyes", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Dips", sets: "3", reps: "8-12", rest: "90s" },
    ],
    advanced: [
      { name: "Barbell Bench Press", sets: "5", reps: "6-8", rest: "120s" },
      { name: "Incline Barbell Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Weighted Dips", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Cable Flyes", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Push-ups (Drop Set)", sets: "3", reps: "To Failure", rest: "60s" },
    ],
  },
  back: {
    beginner: [
      { name: "Lat Pulldown", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Dumbbell Row", sets: "3", reps: "10-12", rest: "90s" },
    ],
    intermediate: [
      { name: "Pull-ups", sets: "4", reps: "6-10", rest: "90s" },
      { name: "Barbell Row", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Lat Pulldown", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Face Pulls", sets: "3", reps: "15-20", rest: "60s" },
    ],
    advanced: [
      { name: "Weighted Pull-ups", sets: "5", reps: "6-8", rest: "120s" },
      { name: "Barbell Row", sets: "4", reps: "8-10", rest: "90s" },
      { name: "T-Bar Row", sets: "4", reps: "10-12", rest: "90s" },
      { name: "Lat Pulldown", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Deadlift", sets: "4", reps: "6-8", rest: "120s" },
    ],
  },
  legs: {
    beginner: [
      { name: "Bodyweight Squats", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Lunges", sets: "3", reps: "10-12/leg", rest: "60s" },
      { name: "Leg Press", sets: "3", reps: "12-15", rest: "90s" },
    ],
    intermediate: [
      { name: "Barbell Squats", sets: "4", reps: "8-10", rest: "120s" },
      { name: "Romanian Deadlift", sets: "3", reps: "10-12", rest: "90s" },
      { name: "Leg Press", sets: "3", reps: "12-15", rest: "90s" },
      { name: "Walking Lunges", sets: "3", reps: "12-15/leg", rest: "60s" },
    ],
    advanced: [
      { name: "Barbell Squats", sets: "5", reps: "6-8", rest: "150s" },
      { name: "Front Squats", sets: "4", reps: "8-10", rest: "120s" },
      { name: "Romanian Deadlift", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Bulgarian Split Squats", sets: "3", reps: "10-12/leg", rest: "90s" },
      { name: "Leg Curls", sets: "3", reps: "12-15", rest: "60s" },
    ],
  },
  arms: {
    beginner: [
      { name: "Dumbbell Bicep Curls", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Tricep Dips", sets: "3", reps: "8-10", rest: "60s" },
      { name: "Hammer Curls", sets: "3", reps: "10-12", rest: "60s" },
    ],
    intermediate: [
      { name: "Barbell Curls", sets: "4", reps: "8-10", rest: "60s" },
      { name: "Close-Grip Bench Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Hammer Curls", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Tricep Pushdowns", sets: "3", reps: "12-15", rest: "60s" },
    ],
    advanced: [
      { name: "Barbell Curls", sets: "4", reps: "8-10", rest: "60s" },
      { name: "Close-Grip Bench Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Preacher Curls", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Overhead Tricep Extension", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Cable Curls", sets: "3", reps: "12-15", rest: "45s" },
    ],
  },
  shoulders: {
    beginner: [
      { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "60s" },
      { name: "Lateral Raises", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Front Raises", sets: "3", reps: "12-15", rest: "60s" },
    ],
    intermediate: [
      { name: "Barbell Overhead Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Dumbbell Lateral Raises", sets: "3", reps: "12-15", rest: "60s" },
      { name: "Face Pulls", sets: "3", reps: "15-20", rest: "60s" },
      { name: "Arnold Press", sets: "3", reps: "10-12", rest: "90s" },
    ],
    advanced: [
      { name: "Barbell Overhead Press", sets: "5", reps: "6-8", rest: "120s" },
      { name: "Dumbbell Shoulder Press", sets: "4", reps: "8-10", rest: "90s" },
      { name: "Lateral Raises", sets: "4", reps: "12-15", rest: "60s" },
      { name: "Rear Delt Flyes", sets: "3", reps: "15-20", rest: "60s" },
      { name: "Upright Rows", sets: "3", reps: "10-12", rest: "60s" },
    ],
  },
  core: {
    beginner: [
      { name: "Plank", sets: "3", reps: "30-45s", rest: "60s" },
      { name: "Crunches", sets: "3", reps: "15-20", rest: "45s" },
      { name: "Leg Raises", sets: "3", reps: "10-12", rest: "60s" },
    ],
    intermediate: [
      { name: "Plank", sets: "3", reps: "60-90s", rest: "60s" },
      { name: "Russian Twists", sets: "3", reps: "20-30", rest: "45s" },
      { name: "Hanging Leg Raises", sets: "3", reps: "10-15", rest: "60s" },
      { name: "Cable Crunches", sets: "3", reps: "15-20", rest: "60s" },
    ],
    advanced: [
      { name: "Weighted Plank", sets: "4", reps: "60-90s", rest: "60s" },
      { name: "Hanging Leg Raises", sets: "4", reps: "12-15", rest: "60s" },
      { name: "Ab Wheel Rollouts", sets: "3", reps: "10-15", rest: "90s" },
      { name: "Cable Crunches", sets: "3", reps: "15-20", rest: "60s" },
      { name: "Dragon Flags", sets: "3", reps: "6-10", rest: "90s" },
    ],
  },
};

const cardioDatabase = {
  beginner: [
    { name: "Brisk Walking", sets: "1", reps: "20-30 min", rest: "N/A" },
    { name: "Stationary Bike", sets: "1", reps: "15-20 min", rest: "N/A" },
    { name: "Elliptical", sets: "1", reps: "15-20 min", rest: "N/A" },
  ],
  intermediate: [
    { name: "Jogging", sets: "1", reps: "25-35 min", rest: "N/A" },
    { name: "Cycling", sets: "1", reps: "30-40 min", rest: "N/A" },
    { name: "Jump Rope", sets: "3", reps: "3-5 min", rest: "2 min" },
    { name: "Rowing Machine", sets: "1", reps: "20-25 min", rest: "N/A" },
  ],
  advanced: [
    { name: "HIIT Sprints", sets: "8-10", reps: "30s sprint/30s rest", rest: "N/A" },
    { name: "Running", sets: "1", reps: "40-60 min", rest: "N/A" },
    { name: "Battle Ropes", sets: "5", reps: "45s", rest: "60s" },
    { name: "Burpees", sets: "4", reps: "15-20", rest: "90s" },
  ],
};

export function calculateBMI(weight: number, height: number): { bmi: number; category: string } {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  
  return { bmi: Math.round(bmi * 10) / 10, category };
}

export function generateWorkoutPlan(userData: UserData): WorkoutPlan {
  const { bmi, category } = calculateBMI(userData.weight, userData.height);
  const level = userData.experienceLevel.toLowerCase() as "beginner" | "intermediate" | "advanced";
  
  // Generate strength routine based on target areas
  const strengthRoutine: Exercise[] = [];
  userData.targetAreas.forEach((area) => {
    const areaKey = area.toLowerCase() as keyof typeof exerciseDatabase;
    if (exerciseDatabase[areaKey]) {
      const exercises = exerciseDatabase[areaKey][level];
      strengthRoutine.push(...exercises);
    }
  });
  
  // Generate cardio routine
  const cardioRoutine = cardioDatabase[level];
  
  // Generate trainer notes
  const trainerNotes = generateTrainerNotes(userData, bmi, category);
  
  return {
    bmi,
    bmiCategory: category,
    strengthRoutine,
    cardioRoutine,
    trainerNotes,
  };
}

function generateTrainerNotes(userData: UserData, bmi: number, category: string) {
  let nutrition = "";
  let recovery = "";
  let progression = "";
  
  // Nutrition advice based on goal and BMI
  if (userData.fitnessGoal === "Weight Loss") {
    nutrition = `Focus on a caloric deficit of 300-500 calories. Prioritize protein (1.6-2.2g per kg bodyweight), include plenty of vegetables, and stay hydrated. Consider meal prep to control portions.`;
  } else if (userData.fitnessGoal === "Muscle Gain") {
    nutrition = `Aim for a caloric surplus of 200-300 calories. Consume 2-2.5g protein per kg bodyweight. Include complex carbs around workouts and healthy fats throughout the day. Eat 4-6 meals daily.`;
  } else if (userData.fitnessGoal === "General Fitness") {
    nutrition = `Maintain a balanced diet with adequate protein (1.6g per kg bodyweight). Focus on whole foods, fruits, vegetables, and stay well-hydrated. Listen to your body's hunger cues.`;
  } else {
    nutrition = `Focus on nutrient-dense foods with adequate protein (2g per kg bodyweight). Time your carbs around training sessions for optimal performance. Stay hydrated and consider supplements if needed.`;
  }
  
  // Recovery advice based on experience level
  if (userData.experienceLevel === "Beginner") {
    recovery = `Get 7-9 hours of sleep nightly. Take 1-2 rest days per week. Light stretching and walking on rest days. Listen to your body and don't push through pain.`;
  } else if (userData.experienceLevel === "Intermediate") {
    recovery = `Prioritize 7-9 hours of sleep. Include active recovery (yoga, swimming). Consider foam rolling and mobility work. Take at least 1 full rest day weekly.`;
  } else {
    recovery = `Optimize sleep quality (8-9 hours). Implement deload weeks every 4-6 weeks. Use advanced recovery methods (massage, sauna, ice baths). Monitor fatigue levels closely.`;
  }
  
  // Progression advice
  if (userData.experienceLevel === "Beginner") {
    progression = `Focus on mastering form before adding weight. Increase weight by 2.5-5kg when you can complete all sets with good form. Progress slowly and consistently.`;
  } else if (userData.experienceLevel === "Intermediate") {
    progression = `Apply progressive overload weekly (weight, reps, or sets). Track your workouts. Consider periodization. Aim for 2.5-5% strength increase monthly.`;
  } else {
    progression = `Implement advanced periodization (linear, undulating, or block). Focus on weak points. Consider working with a coach. Aim for consistent small improvements.`;
  }
  
  return { nutrition, recovery, progression };
}
