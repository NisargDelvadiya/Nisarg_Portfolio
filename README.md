# Nisarg Delvadiya — Developer Portfolio 🚀

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG_2.1-AAA_Compliant-green?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

A high-performance, responsive developer portfolio engineered with **Next.js 16 (App Router + Turbopack)**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js**. Designed with a glassmorphism theme, GPU hardware acceleration, WCAG 2.1 AAA accessibility compliance, and enterprise HTTP security hardening.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [♿ Accessibility (WCAG 2.1 AAA)](#-accessibility-wcag-21-aaa)
- [🔒 Security & Performance](#-security--performance)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Quick Start](#-quick-start)
- [📄 License & Legal](#-license--legal)

---

## ✨ Features

- **Dynamic Hero Section**: Features ambient spotlight lighting effects, animated text generation, and interactive CTA navigation.
- **Bento Grid Layout**: Custom 6-card interactive grid system:
  - **Card 1**: Service Contract PDF download link.
  - **Card 2**: Interactive 3D GitHub Globe powered by `Three.js` and `@react-three/fiber`.
  - **Card 3**: Staggered 2-column tech stack showcases with auto vertical positioning.
  - **Card 4**: Education overview (Manipal University Jaipur, B.Tech IT).
  - **Card 5**: Profile photo avatar & resume PDF download trigger.
  - **Card 6**: Interactive email copy CTA with confetti feedback animation (`react-lottie`).
- **Recent Projects Showcase**: Displays top full-stack projects (**MyTodo**, **LogDiary**) with official SVG tech stack icons, GitHub source code links, and live demo links.
- **3D Pin & Mobile Touch Feedback**:
  - **Desktop (`>= lg`)**: Signature 3D pin tilt animation.
  - **Mobile & Tablet (`< lg`)**: Tactile click/tap active scaling (`active:scale-[0.97] active:brightness-110`).
- **Work Experience**: Moving animated border cards detailing professional web development roles.
- **Multilingual Support**: Dynamic language switcher supporting 20+ Indian and international languages via Google Translate API integration.
- **Cookie & Privacy Preference Banner**: GDPR/DPDP-compliant essential cookie consent banner with choice persistence in `localStorage`.
- **Legal Specifications**: Dedicated `/T&C` and `/PrivacyPolicy` routes with interactive modal overlays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), Glassmorphic Vanilla CSS
- **3D & Canvas**: [Three.js](https://threejs.org/), `@react-three/fiber`, `@react-three/drei`, `three-globe`
- **Animations**: [Framer Motion](https://www.framer.com/motion/), `react-lottie`
- **Icons**: React Icons (`react-icons/si`, `react-icons/fa6`, `react-icons/tb`, `react-icons/io5`)
- **Monitoring & Analytics**: `@sentry/nextjs`

---

## ♿ Accessibility (WCAG 2.1 AAA)

This portfolio is engineered in full compliance with the **Web Content Accessibility Guidelines (WCAG 2.1 Level AA & AAA)**:

- **Contrast Ratios**: Exceeds **7:1 AAA** contrast standards (`#FFFFFF`, `#BEC1DD`, `#CBACF9` on `#04071D` dark navy background).
- **Keyboard Navigation**: 100% operable via keyboard (<kbd>Tab</kbd> / <kbd>Enter</kbd> / <kbd>Space</kbd>).
- **Skip Navigation**: Screen-reader & keyboard skip-to-content link implemented in [`app/layout.jsx`](app/layout.jsx).
- **Focus Rings**: High-visibility focus indicators (`focus-visible:ring-2 focus-visible:ring-purple`).
- **Semantic HTML5**: Native `<header>`, `<main>`, `<section>`, `<footer>`, `<dialog>`, and `<h1>` - `<h3>` hierarchy.
- **Screen Reader ARIA**: Explicit `aria-label`, `aria-hidden`, and `title` attributes on all actionable & decorative elements.

---

## 🔒 Security & Performance

### 🛡️ Security Hardening
Configured with enterprise-grade HTTP security headers in [`next.config.mjs`](next.config.mjs):
- **`Strict-Transport-Security` (HSTS)**: Forces encrypted HTTPS connections (`max-age=31536000`).
- **`X-Frame-Options: DENY`**: Protects against Clickjacking and unauthorized iframe embedding.
- **`X-Content-Type-Options: nosniff`**: Prevents MIME-type sniffing exploits.
- **`Permissions-Policy`**: Restricts unauthorized hardware access (camera, microphone, geolocation, USB, payment).
- **`Referrer-Policy: strict-origin-when-cross-origin`**: Eliminates sensitive referrer parameter leaks.
- **`X-XSS-Protection: 1; mode=block`**: Prevents cross-site scripting reflector attacks.
- **Tabnabbing Protection**: External links enforce `target="_blank"` with `rel="noopener noreferrer"`.

### ⚡ Performance Optimizations
- **GPU Acceleration**: Hardware-accelerated compositing (`transform: translateZ(0)`, `will-change: transform`) for 60fps animations.
- **Off-Screen Render Containment**: `content-visibility: auto` on offscreen sections for instant DOM paint times.
- **Image Optimization**: Automated **AVIF** and **WebP** image formatting with Gzip/Brotli compression.

---

## 📁 Folder Structure

```text
Nisarg_Portfolio/
├── app/
│   ├── PrivacyPolicy/       # Privacy Policy page route
│   ├── T&C/                 # Terms & Conditions page route
│   ├── error.jsx            # Custom error boundary
│   ├── global-error.jsx     # Custom global error boundary
│   ├── globals.css          # Global Tailwind styles & animations
│   ├── layout.jsx           # Root layout wrapper & metadata
│   ├── loading.jsx          # Next.js loading fallback
│   ├── not-found.jsx        # Custom 404 page
│   ├── page.jsx             # Main homepage
│   └── provider.jsx         # NextThemes provider
├── components/
│   ├── ui/
│   │   ├── BentoGrid.jsx    # Custom Bento Grid system & cards
│   │   ├── FloatingNavbar.jsx# Fixed top navigation component
│   │   ├── Globe.jsx        # 3D Canvas Globe renderer
│   │   ├── GridGlobe.jsx    # GitHub 3D Globe integration
│   │   ├── MovingBorders.jsx# Moving border animation wrapper
│   │   ├── Pin.jsx          # 3D Pin container & mobile touch handler
│   │   ├── Spotlight.jsx    # SVG spotlight light beam
│   │   └── TextGenerateEffect.jsx # Animated h1 text reveal
│   ├── CookieConsent.jsx    # GDPR cookie consent banner
│   ├── Experience.jsx       # Work experience section
│   ├── Footer.jsx           # Glassmorphic footer & translation dropdown
│   ├── Grid.jsx             # About section wrapper
│   ├── Hero.jsx             # Hero section component
│   ├── MagicButton.jsx      # Theme-matched custom button component
│   └── RecentProjects.jsx   # Project showcase section
├── data/
│   ├── confetti.json        # Lottie confetti animation data
│   ├── globe.json           # 3D Globe arc coordinates
│   └── index.js             # Centralized project data & text config
├── lib/
│   └── utils.js             # Tailwind ClassMerge utility function
├── public/
│   ├── about/               # Resume PDF, Contract PDF, profile images
│   ├── bg/                  # SVG grid textures and overlays
│   ├── favicon/             # Multi-platform app favicons & manifest
│   ├── projects/            # Project preview screenshots
│   └── work_experience/     # Work experience thumbnail SVGs
├── next.config.mjs          # Next.js & Sentry configuration
├── package.json             # Project dependencies & scripts
└── README.md                # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18.0.0 or higher
- npm or yarn or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NisargDelvadiya/Nisarg_Portfolio.git
   cd Nisarg_Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## 📄 License & Legal

- **Developer**: Nisarg Jayesh Delvadiya
- **Contact**: nisarg.delvadiya1@zohomail.in
- **Location**: Vadodara, Gujarat, Bharat 🇮🇳
- **Legal Compliance**: Information Technology Act, 2000 & Digital Personal Data Protection (DPDP) Act, 2023 of India.
- **License**: [MIT License](LICENSE)

---

<div align="center">
  <sub>Made with ❤️ in Bharat 🇮🇳 • Nisarg Delvadiya &copy; 2026</sub>
</div>
