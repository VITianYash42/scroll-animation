# Car Scroll Animation Hero

A premium, scroll-driven hero section built with Next.js, React, Tailwind CSS, and GSAP ScrollTrigger.

This project recreates the interaction style from the reference and focuses on motion quality, scroll sync, and smooth visual behavior.

Reference demo:
https://paraschaturvedi.github.io/car-scroll-animation

## Objective

Frontend animation skills through a hero section that combines:
- polished intro motion
- scroll-based interaction logic
- smooth and performant rendering

## Tech Stack

Mandatory stack used:
- Next.js (App Router)
- React.js
- Tailwind CSS
- GSAP (with ScrollTrigger)
- HTML/CSS/JavaScript (through React + Tailwind + TS/JS runtime)

## Functional Requirements Coverage

### 1) Hero Section Layout
- Full-screen above-the-fold hero (`h-screen` pinned scene).
- Letter-spaced headline:
  - W E L C O M E I T Z F I Z Z
- Four impact metric/stat cards around the track:
  - 58% Increase in pick up point use
  - 27% Increase in pick up point use
  - 23% Decreased in customer phone calls
  - 40% Decreased in customer phone calls

### 2) Initial Load Animation
- Headline fades in with subtle upward movement on load.
- Stats are staged for reveal with smooth easing and staggered sequencing.
- Motion is designed to feel premium and non-abrupt.

### 3) Scroll-Based Animation (Core)
- Hero responds to user scroll (not autoplay).
- Car moves horizontally based on scroll progress.
- Green headline band reveal is synced with the car movement via `clip-path` progression.
- Stats reveal during scroll with stagger timing.

### 4) Motion and Performance Guidelines
- Animations use GPU-friendly properties where possible:
  - `transform`
  - `opacity`
  - `clip-path` (for reveal effect)
- Scroll animation is managed via GSAP `ScrollTrigger` with `scrub` for smooth interpolation.
- Avoids heavy layout work per frame.

## UI/UX Notes

- Clean centered composition with a premium track treatment.
- Improved top-down sports car SVG for better visual quality.
- Card hierarchy, contrast, spacing, and shadows tuned for readability and impact.

## Project Structure

- `app/page.tsx` - hero layout and GSAP timelines
- `app/layout.tsx` - root layout
- `app/globals.css` - global styles
- `public/orange-sports-car-topdown.svg` - custom car visual asset

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Build for production:

```bash
npm run build
npm start
```

## Submission Requirements

Live webpage link
- Live URL: [https://scroll-animation-beta-one.vercel.app/](https://scroll-animation-beta-one.vercel.app/)

## Quick Submission Checklist

- [x] Hero section implemented above the fold
- [x] Headline and metrics included
- [x] Intro animation implemented
- [x] Scroll-tied core motion implemented
- [x] GSAP used for smooth interaction
- [x] Tailwind + Next.js + React stack used
- [x] Live URL added
