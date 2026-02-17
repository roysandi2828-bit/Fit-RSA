# Fit-R.S.A - Personal Workout Generator

![Fit-R.S.A](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

A modern, AI-powered fitness application that generates personalized workout plans based on your unique goals, experience level, and body metrics.

## ✨ Features

- **🎯 Personalized Workout Plans** - Get custom workout routines tailored to your fitness goals
- **📊 BMI Calculator** - Automatic body mass index calculation and categorization
- **💪 Multi-Step Questionnaire** - Easy-to-use form to collect your fitness profile
- **🏋️ Comprehensive Exercise Database** - 500+ exercises across all muscle groups
- **📈 Progress Tracking** - Visual representation of your fitness journey
- **🎨 Modern UI/UX** - Glassmorphism design with smooth animations
- **📱 Fully Responsive** - Works seamlessly on all devices
- **⚡ Fast Performance** - Built with Next.js 16 and Turbopack

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** Bun
- **Font:** DM Sans (Google Fonts)

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main app with routing logic
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico         # Site icon
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing hero section
│   ├── Features.tsx        # Features showcase
│   ├── WorkoutTypes.tsx    # Workout categories
│   ├── Trainers.tsx        # Trainer profiles
│   ├── BentoGrid.tsx       # Feature grid layout
│   ├── QuestionnaireForm.tsx  # Multi-step form
│   ├── WorkoutResults.tsx  # Results dashboard
│   ├── CallToAction.tsx    # CTA section
│   └── Footer.tsx          # Footer with credits
└── lib/
    └── workoutGenerator.ts # Workout generation engine
```

## 🎯 User Flow

1. **Landing Page** - User arrives at the hero section
2. **Get Started** - Click "Generate Workout Plan" button
3. **Questionnaire** - Complete 3-step form:
   - Step 1: Select target muscle areas
   - Step 2: Enter biometric data (weight, height, age, gender)
   - Step 3: Choose fitness goal, experience level, and workout frequency
4. **Results** - View personalized workout plan with:
   - BMI calculation and category
   - Strength training routine
   - Cardio routine
   - Trainer notes (nutrition, recovery, progression)
5. **Actions** - Download, share, or regenerate plan

## 🎨 Design Features

### Color Palette
- **Background:** Dark (#0C0C0C)
- **Primary:** Vibrant Orange (#FF6B35)
- **Secondary:** Orange Gradient (#FF8C42)
- **Text:** White with various opacities

### Animations
- Smooth page transitions with Framer Motion
- Floating card animations
- Hover effects on interactive elements
- Progress bar animations
- Pulsing glow effects on CTAs
- Staggered list animations

### UI Components
- **Glass Cards:** Glassmorphism with backdrop blur
- **Gradient Text:** Orange gradient for emphasis
- **Custom Buttons:** Primary and secondary styles
- **Progress Indicators:** Visual feedback during form completion
- **Responsive Grid:** Adapts to all screen sizes

## 🏋️ Workout Generator Engine

The workout generator uses a comprehensive exercise database organized by:

- **Muscle Groups:** Chest, Back, Legs, Arms, Shoulders, Core
- **Experience Levels:** Beginner, Intermediate, Advanced
- **Exercise Types:** Strength training and cardio

### Features:
- Automatic BMI calculation
- Exercise selection based on target areas
- Difficulty scaling by experience level
- Personalized trainer notes for:
  - Nutrition guidance
  - Recovery recommendations
  - Progression strategies

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ or Bun installed
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fit-rsa
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
bun run build
bun start
```

### Type Checking

```bash
bun typecheck
```

### Linting

```bash
bun lint
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🎯 Key Components

### QuestionnaireForm
Multi-step form with:
- Progress bar
- Smooth transitions between steps
- Form validation
- Custom increment/decrement controls
- Responsive layout

### WorkoutResults
Comprehensive results dashboard featuring:
- User profile summary
- BMI display with category
- Strength routine with sets/reps/rest
- Cardio routine
- Trainer notes in 3 categories
- Action buttons (regenerate, download, share)

### Hero Section
Eye-catching landing with:
- Background image with gradient overlay
- Animated floating card
- Statistics display
- Dual CTA buttons
- Scroll indicator

## 🌟 Future Enhancements

- [ ] User authentication and profile saving
- [ ] Workout history tracking
- [ ] Progress photos upload
- [ ] Social sharing features
- [ ] Meal plan generator
- [ ] Exercise video tutorials
- [ ] Mobile app version
- [ ] Integration with fitness trackers

## 👨‍💻 Creator

**Roy Sandi Andrian**

Created with ❤️ for the fitness community

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Exercise database compiled from fitness industry standards
- Images from Unsplash
- Icons from Lucide React
- Font from Google Fonts (DM Sans)

---

**Fit-R.S.A** - Transform Your Fitness Journey 💪
