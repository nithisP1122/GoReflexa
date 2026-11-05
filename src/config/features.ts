export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  iconName: string;
  badge?: string;
  isUpcoming?: boolean;
  description: string;
  bulletPoints: string[];
  highlight: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: "personal-productivity",
    number: "01",
    title: "Personal Productivity",
    tagline: "Streamline your daily execution",
    iconName: "CheckSquare",
    description:
      "A distraction-free productivity cockpit engineered to capture, organize, and prioritize your daily tasks with absolute clarity.",
    bulletPoints: [
      "Personal task management with flexible tag systems",
      "Dynamic daily planning with priority quadrants",
      "Actionable to-do lists that roll over intelligently",
      "Task prioritization based on high-impact personal milestones",
      "Live productivity monitoring and daily velocity tracking",
    ],
    highlight: "Designed for focused action without digital clutter.",
  },
  {
    id: "habit-tracker",
    number: "02",
    title: "Habit Tracker",
    tagline: "Build rituals that stick",
    iconName: "Flame",
    description:
      "Turn aspirations into ingrained daily routines using our systematic habit architecture, flexible frequencies, and streak retention.",
    bulletPoints: [
      "Create custom habits with personalized cadence",
      "Daily, weekly, and monthly recurrence schedules",
      "Intuitive Monday-to-Sunday planning view",
      "Recurring habit schedules with rest days and grace periods",
      "Habit completion tracking with one-tap logging",
      "Visual streak tracking with motivational milestones",
      "In-depth habit statistics and completion percentages",
    ],
    highlight: "Consistent daily actions compound into life-changing results.",
  },
  {
    id: "goal-management",
    number: "03",
    title: "Goal Management",
    tagline: "From vision to reality",
    iconName: "Target",
    description:
      "Break ambitious life visions into quarterly, monthly, and weekly milestones that connect directly to your daily actions.",
    bulletPoints: [
      "Categorized short-term and long-term goal architectures",
      "Structured personal milestones with target deadlines",
      "Dynamic goal progress tracking with percentage gauges",
      "Achievement monitoring and milestone celebration cards",
      "Direct linkage between high-level goals and daily routines",
    ],
    highlight: "Never lose sight of where your daily energy is taking you.",
  },
  {
    id: "daily-planner",
    number: "04",
    title: "Daily Planner",
    tagline: "Master your 24 hours",
    iconName: "Calendar",
    description:
      "A structured daily operating schedule to design your ideal routine, block dedicated focus windows, and track completion.",
    bulletPoints: [
      "Hour-by-hour daily schedule design",
      "Holistic activity organization across work, wellness, and growth",
      "Real-time task management within schedule slots",
      "Daily completion tracking and end-of-day wrap-up",
      "Morning and evening routine management workflows",
    ],
    highlight: "Start every morning with purpose and end every evening with peace.",
  },
  {
    id: "journal-and-notes",
    number: "05",
    title: "Journal and Notes",
    tagline: "Document your personal journey",
    iconName: "BookOpen",
    description:
      "A private sanctuary for daily reflections, breakthrough ideas, gratitude logs, and documenting your personal transformation.",
    bulletPoints: [
      "Personal journaling with structured reflection prompts",
      "Daily reflections on wins, lessons, and mindset shifts",
      "Quick personal notes for ideas, books, and insights",
      "Experience recording to preserve key life moments",
      "Personal growth documentation with timeline search",
    ],
    highlight: "Your personal archive of growth, wisdom, and clarity.",
  },
  {
    id: "personal-development",
    number: "06",
    title: "Personal Development",
    tagline: "Elevate your discipline & mindset",
    iconName: "TrendingUp",
    description:
      "Evidence-backed systems to cultivate unshakeable discipline, maintain consistency, and overcome self-imposed boundaries.",
    bulletPoints: [
      "Discipline-building frameworks and friction reduction",
      "Consistency improvement through micro-commitments",
      "Continuous personal growth tracking across life domains",
      "Self-improvement routines tailored to your lifestyle",
      "Accountability check-ins and reflection rhythms",
    ],
    highlight: "Break mental barriers and unlock your true potential.",
  },
  {
    id: "social-community",
    number: "07",
    title: "Social Community",
    tagline: "Grow alongside high-achievers",
    iconName: "Users",
    badge: "ROADMAP • UPCOMING",
    isUpcoming: true,
    description:
      "A curated, positive ecosystem of like-minded individuals dedicated to self-mastery, shared accountability, and authentic mutual encouragement.",
    bulletPoints: [
      "Connect with motivated peers pursuing similar goals",
      "Share milestone achievements without social media noise",
      "Interact with community accountability circles",
      "Support, inspire, and motivate fellow GoReflexa members",
      "Opt-in privacy controls to share only what you choose",
    ],
    highlight: "Surround yourself with people who challenge you to rise higher.",
  },
  {
    id: "progress-and-analytics",
    number: "08",
    title: "Progress and Analytics",
    tagline: "Visualize your transformation",
    iconName: "BarChart3",
    description:
      "Transform your daily efforts into visual intelligence. Observe your momentum, spot bottlenecks, and celebrate your sustained consistency.",
    bulletPoints: [
      "Granular habit completion and trend statistics",
      "Comprehensive goal progress velocities and forecasting",
      "Holistic productivity tracking across days, weeks, and months",
      "Visual progress reports and clean lifestyle dashboards",
      "Personal performance history and consistency scorecards",
    ],
    highlight: "Data-driven clarity for your personal growth trajectory.",
  },
];

