# 🚀 Quick Start Guide - Fit-R.S.A

Get your Fit-R.S.A workout generator up and running in minutes!

## Prerequisites

Make sure you have one of these installed:
- **Bun** (recommended) - [Install Bun](https://bun.sh)
- **Node.js 20+** - [Install Node.js](https://nodejs.org)

## Installation Steps

### 1. Install Dependencies

```bash
bun install
```

Or with npm:
```bash
npm install
```

### 2. Start Development Server

```bash
bun dev
```

Or with npm:
```bash
npm run dev
```

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Using the Application

### Step 1: Landing Page
- Explore the features and benefits
- Click "Generate Workout Plan" when ready

### Step 2: Complete Questionnaire

**Part 1 - Target Areas**
- Select one or more muscle groups you want to focus on
- Options: Chest, Back, Legs, Arms, Shoulders, Core

**Part 2 - Your Metrics**
- Enter your weight (kg)
- Enter your height (cm)
- Enter your age
- Select your gender

**Part 3 - Fitness Goals**
- Choose your primary goal:
  - Weight Loss
  - Muscle Gain
  - General Fitness
  - Athletic Performance
- Select your experience level:
  - Beginner
  - Intermediate
  - Advanced
- Set workout days per week (1-7)

### Step 3: View Your Plan

Your personalized workout plan includes:
- **BMI Calculation** - Your body mass index and category
- **Strength Routine** - Exercises with sets, reps, and rest periods
- **Cardio Routine** - Cardiovascular exercises tailored to your level
- **Trainer Notes** - Professional guidance on:
  - Nutrition recommendations
  - Recovery strategies
  - Progression tips

### Step 4: Take Action

- **Regenerate** - Create a new plan with different parameters
- **Download** - Save your plan as PDF (coming soon)
- **Share** - Share your plan with friends (coming soon)

## 🛠️ Development Commands

### Type Checking
```bash
bun typecheck
```

### Linting
```bash
bun lint
```

### Build for Production
```bash
bun run build
```

### Start Production Server
```bash
bun start
```

## 📁 Project Structure Overview

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main application logic
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Landing section
│   ├── QuestionnaireForm.tsx  # Multi-step form
│   ├── WorkoutResults.tsx     # Results display
│   └── ...               # Other components
└── lib/                   # Utilities
    └── workoutGenerator.ts    # Workout logic
```

## 🎨 Customization Tips

### Change Primary Color
Edit `src/app/globals.css`:
```css
/* Change #FF6B35 to your preferred color */
.btn-primary {
  background-color: #FF6B35;
}
```

### Add New Exercises
Edit `src/lib/workoutGenerator.ts`:
```typescript
const exerciseDatabase = {
  chest: {
    beginner: [
      // Add your exercises here
    ]
  }
}
```

### Modify Trainer Notes
Edit the `generateTrainerNotes` function in `src/lib/workoutGenerator.ts`

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, specify a different port:
```bash
bun dev --port 3001
```

### Build Errors
Clear the build cache:
```bash
rm -rf .next
bun run build
```

### Type Errors
Ensure all dependencies are installed:
```bash
bun install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 💡 Tips for Best Experience

1. **Use Chrome or Firefox** for best animation performance
2. **Enable JavaScript** - Required for interactive features
3. **Try different combinations** - Experiment with various target areas and goals
4. **Mobile friendly** - Works great on phones and tablets

## 🎯 Next Steps

After getting familiar with the app:
1. Customize the exercise database
2. Add your own trainer profiles
3. Implement user authentication
4. Add workout history tracking
5. Create a mobile app version

---

Need help? Check the main [README.md](README.md) for detailed documentation.

**Happy Training! 💪**
