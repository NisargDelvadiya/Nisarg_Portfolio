# System Architecture & Codebase Overview

This document details the architectural structure, design patterns, component relationships, and engineering practices used throughout the official portfolio of **Nisarg Jayesh Delvadiya**.

---

## 1. High-Level Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Core Runtime**: [React](https://react.dev/) 19 (Server & Client Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with native PostCSS pipeline
- **Animation Engine**: [GSAP](https://greensock.com/gsap/) 3 (GreenSock Animation Platform with ScrollTrigger)
- **Deployment & Edge**: [Vercel](https://vercel.com/) with Speed Insights and Web Analytics
- **Typography & Theme**: Curated Marvel Iron Man Stark aesthetic:
  - Primary Red: `#AA0505`
  - Deep Burgundy: `#6A0C0B`
  - Arc Reactor Gold: `#FBCA03`
  - Border Gold: `#B97D10`
  - Cyan Arc Glow: `#67C7EB`

---

## 2. Directory Structure

```text
Nisarg_Portfolio/
├── public/
│   ├── Assets/
│   │   ├── 1.jpg                     # Hall of Armor blurred background layer
│   │   ├── 2.jpg                     # About section atmospheric backdrop
│   │   ├── Duo_Brothers.png          # Official Duo Brothers emblem mark (3:2)
│   │   ├── Iron_Man.png              # High-resolution hero suit layer
│   │   ├── Iron_Man_Mask.png         # Separator mask graphic & error badge
│   │   ├── Mahin.jpeg                # Pendulum portrait photo
│   │   ├── jarvis.mp3                # Background ambient theme audio
│   │   └── files/
│   │       └── Nisarg_Jayesh_Delvadiya_Resume.pdf
│   └── favicon/                      # Web application icons and PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root metadata, fonts, PWA registration, & CSP
│   │   ├── page.js                   # Main landing page assembling all components
│   │   ├── globals.css               # Design tokens, custom keyframes & base styles
│   │   ├── error.js                  # Route-level error boundary with diagnostic guide
│   │   ├── global-error.js           # Critical root fallback boundary
│   │   ├── loading.js                # Instant skeleton & loading spinner fallback
│   │   ├── not-found.js              # Custom 404 page with Iron Man theme
│   │   ├── robots.js                 # Dynamic robots.txt metadata route
│   │   ├── sitemap.js                # Dynamic XML sitemap route generator
│   │   ├── sitemap/page.js           # Visual HTML directory sitemap page
│   │   ├── PrivacyPolicy/page.js     # DPDP Act 2023 privacy policy document
│   │   └── T&C/page.js               # IT Act 2000 legal terms & conditions
│   ├── components/
│   │   ├── Navbar.js                 # Floating glassmorphic header with scroll spy
│   │   ├── Hero.js                   # Hero armor suit presentation with GSAP
│   │   ├── MarqueeBanner.js          # Dual opposing high-speed skill ticker bands
│   │   ├── AboutSection.js           # Pendulum physics portrait & visionary biography
│   │   ├── SkillsSection.js          # Interactive categorized management & tech matrix
│   │   ├── ProjectsSection.js        # Horizontal swipeable project showcase
│   │   ├── ExperiencesSection.js     # Career milestone carousel & Duo Brothers badge
│   │   ├── Footer.js                 # Copy email, NGO donations, full-screen toggle, & translator
│   │   ├── AudioPlayer.js            # Ambient theme player with real-time waveform visualizer
│   │   ├── SectionNavigation.js      # Arrow key (↑ / ↓) smooth section navigation
│   │   ├── SectionDivider.js         # Crisp anti-blur horizontal landmark dividers
│   │   ├── ErrorBoundary.js          # Component-level fault isolation boundary
│   │   └── PWARegistration.js        # Service worker registration for offline caching
│   └── data/
│       └── projectsData.js           # Centralized projects dataset
├── ARCHITECTURE.md                   # This architectural specification
├── CONTRIBUTING.md                   # Development workflow & contribution guide
├── SECURITY.md                       # Security policy and disclosure protocols
├── README.md                         # Project overview and run instructions
└── package.json                      # Project dependencies & npm scripts
```

---

## 3. Component Architecture & State Management

### Error Isolation Pattern
Every primary landing section in [src/app/page.js](file:///Users/nisargdelvadiya/Desktop/Nisarg_Portfolio/src/app/page.js) is individually wrapped in an `<ErrorBoundary sectionName="...">` container. If a single component encounters an unhandled runtime error, the rest of the application remains fully functional and renders a graceful recovery widget.

### Client vs. Server Components
- Interactive components requiring browser APIs (window scroll, audio context, GSAP DOM animations, clipboard) are explicitly marked with `"use client";`.
- Pure metadata, dynamic sitemaps, and robots routes are handled server-side via Next.js App Router route handlers.

### Accessible UI Principles
- **Title Attributes**: All interactive clickable buttons, anchor links, and filter controls have descriptive `title` attributes for tooltips.
- **Aria Labels**: Screen-reader accessible labels on icon-only and interactive elements.
- **Cursor Pointer**: Explicit `cursor-pointer` utility classes applied across all clickable surfaces.
- **Keyboard Navigation**:
  - `↑` / `↓` Arrow keys navigate between main sections smoothly via `SectionNavigation.js`.
  - `Spacebar` toggles the ambient Jarvis audio player via `AudioPlayer.js`.
  - Left / Right arrows navigate project and experience carousels.

---

## 4. Animation & Physics Pipeline (GSAP)
- **GSAP Context (`gsap.context`)**: All animations run within isolated GSAP contexts attached to component container refs. When a component unmounts, `ctx.revert()` is invoked to prevent memory leaks and zombie event listeners.
- **Pendulum Swing**: Continuous sine easing (`ease: "sine.inOut"`) rotating around `transformOrigin: "top center"` for realistic physical motion.
- **ScrollTrigger**: Integrated with trigger thresholds at `top 75%` to ensure animations fire smoothly as the user scrolls into view.

---

## 5. Security & Edge Hardening
- **CSP Headers**: Configured in Next.js layout metadata and response headers to prevent XSS.
- **Secret Hygiene**: Environment variables prefixed with `NEXT_PUBLIC_` are kept strictly for public metadata; private keys and server secrets are excluded via `.gitignore`.
- **Sanitized Links**: External links utilize `target="_blank" rel="noopener noreferrer"` to mitigate tabnabbing attacks.
