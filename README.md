# GoReflexa — Official Marketing Website

> **Tagline:** Break Your Limits. Build Your Life.  
> **Category:** Personal Productivity and Lifestyle Management Platform  
> **Official Launch Date:** January 14, 2027 (Asia/Kolkata)  
> **Design Reference:** Google Stitch Theme 5 – MINIMAL LIGHT  

---

## 1. Project Overview

**GoReflexa** is an all-in-one personal lifestyle and productivity platform designed to help individuals organize their lives, build positive habits, manage goals, improve productivity, and develop consistency.

This repository contains the **official marketing website** for GoReflexa. It serves as the international pre-launch platform to showcase the product ecosystem, explain features, present subscription tiers, and collect early-access waitlist registrations.

---

## 2. Design System: Minimal Light (Theme 5)

The website is crafted according to **Google Stitch Theme 5 – MINIMAL LIGHT**:

| Element | Color Hex | Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#FFFFFF` | Main page background, primary clean surfaces |
| **Secondary Background** | `#F7F8FA` | Subtle section alternation, cards, code blocks |
| **Light Grey** | `#EEF1F4` | Badges, hover states, icon backdrops |
| **Primary Text** | `#182230` | Bold headlines, primary text, high contrast |
| **Secondary Text** | `#64748B` | Subheadings, descriptions, meta text |
| **Primary Accent** | `#334155` | Secondary buttons, subtle shadows |
| **Secondary Accent** | `#94A3B8` | Subtle borders, muted elements, numbers |
| **Subtle Green Accent** | `#6FAF91` | Streak indicators, launch highlights, progress |
| **Border Color** | `#E5E7EB` | Hairline dividers, card outlines |

- **Typography:** Modern clean sans-serif stack (`Plus Jakarta Sans` / `Inter` / system-ui).
- **Aesthetics:** Generous whitespace, minimalist cards, subtle borders, high-contrast dark charcoal buttons, no neon colors, no dark website themes.

---

## 3. Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database:** [Supabase](https://supabase.com/) PostgreSQL with Row Level Security (RLS)
- **Transactional Email:** [Resend](https://resend.com/)
- **Animations & Effects:** `canvas-confetti`, smooth CSS transitions
- **SEO & Structured Data:** Semantic HTML5, OpenGraph, JSON-LD schema, dynamic `sitemap.xml` & `robots.txt`

---

## 4. Website Sections & Features

1. **Sticky Header & Navigation:**
   - GoReflexa geometric logo with brand badge.
   - Smooth anchor scrolling (`Home`, `About`, `Features`, `How It Works`, `Why Us`, `Pricing`, `FAQ`).
   - Active section tracking.
   - Mobile hamburger navigation drawer.
   - "Join Early Access" CTA.

2. **Hero Section:**
   - Headline: *"BREAK YOUR LIMITS. BUILD YOUR LIFE."*
   - Live Countdown to **January 14, 2027 (Asia/Kolkata)**.
   - Realistic laptop mockup displaying the GoReflexa personal productivity interface (Daily Focus, Habit Grid Monday-Sunday, Goal Progress, Productivity Score).
   - Minimalist desk accessories (indoor plant, stacked books, subtle floating streak badges).

3. **About Section:**
   - Headline: *"A BETTER SYSTEM FOR YOUR PERSONAL LIFE."*
   - Explains Vision, Mission, and Purpose.
   - Three Foundational Pillars:
     1. Organize Your Life.
     2. Build Better Habits.
     3. Achieve Your Goals.

4. **Complete Product Features (8 Core Engines):**
   - **Personal Productivity:** Task management, daily planning, to-do lists, prioritization, velocity tracking.
   - **Habit Tracker:** Custom habits, recurring schedules, Monday-to-Sunday planning, streaks, statistics.
   - **Goal Management:** Short-term and long-term milestones, progress gauges, achievement monitoring.
   - **Daily Planner:** 24-hour routine design, time-blocks, completion tracking, morning/evening wrap-up.
   - **Journal and Notes:** Daily reflections, personal growth documentation, gratitude logs.
   - **Personal Development:** Discipline building, consistency improvement, friction reduction.
   - **Social Community:** Upcoming roadmap feature for peer accountability and shared achievements.
   - **Progress and Analytics:** Habit trends, velocity metrics, visual progress reports, performance history.
   - Interactive feature inspection banner with detailed bullet points.

5. **How It Works:**
   - 4-step illustrated workflow (`01 Create Your Personal Space`, `02 Set Your Goals`, `03 Build Your Habits`, `04 Track Your Progress`).
   - Clean connecting timeline layout.

6. **Why GoReflexa:**
   - Editorial-style layout contrasting GoReflexa against fragmented productivity tools.
   - The Founder's Manifesto block.

7. **Subscription & Pricing:**
   - 3 Plans: **Free Plan**, **Premium Plan** (*Most Popular*), and **Pro Plan**.
   - Configurable through central file `src/config/pricing.ts`.
   - Prominently displays **"PRICING COMING SOON"** as required.
   - Early Access founding-member guarantee.

8. **Early Access Registration (Waitlist Engine):**
   - Fields: Full Name (required), Email (required), Mobile Number (optional), Country Selection & Input (required), Interested Features dropdown (multi-select), Privacy Policy Consent (required), Marketing Consent (optional).
   - Anti-spam hidden honeypot.
   - Server-side sliding-window rate limiting.
   - Supabase PostgreSQL persistence in `early_access_registrations`.
   - Automated welcome & confirmation email dispatch via Resend.
   - Duplicate email prevention (returns user-friendly notice).
   - Interactive confetti celebration on submission.

9. **Frequently Asked Questions (FAQ):**
   - Smooth minimalist accordion answering all core platform questions.

10. **Footer:**
    - Full brand identity, sitemap links, legal navigation, contact info, and social links.

11. **Legal Pages:**
    - `/privacy`: Comprehensive Privacy Policy detailing data collection, purpose, Supabase storage, and deletion requests.
    - `/terms`: Terms and Conditions covering pre-launch usage, IP, and waitlist participation.

---

## 5. Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm 9+

### Installation

```bash
git clone <repo-url>
cd newproject
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your configuration:

```env
# Supabase PostgreSQL Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Resend Transactional Email
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=GoReflexa <onboarding@resend.dev>

# Google Analytics 4 (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://goreflexa.com
```

---

## 6. Database Setup (Supabase PostgreSQL)

1. Open your [Supabase Dashboard](https://app.supabase.com/).
2. Create a new project or select an existing one.
3. Navigate to **SQL Editor**.
4. Paste and execute the contents of `supabase/schema.sql`.

This will:
- Create the `early_access_registrations` table.
- Enforce UUID primary keys, email uniqueness, and timestamp defaults.
- Create indexes on `email`, `created_at`, and `country`.
- Enable Row Level Security (RLS) policies allowing secure server-side insertions while keeping records private from public anonymous inspection.

---

## 7. Development & Production Scripts

```bash
# Run local development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

---

## 8. Deployment to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import this repository.
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://goreflexa.com`)
4. Click **Deploy**. Vercel will build and serve the website with edge caching, automated SSL, and instant global CDN distribution.

---

## 9. License & Brand

© 2027 GoReflexa Inc. All rights reserved.  
*Break Your Limits. Build Your Life.*
