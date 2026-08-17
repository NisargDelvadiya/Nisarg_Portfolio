# 🕷️ Mahin Gunjal — Web Designer & VFX Artist Portfolio

A state-of-the-art, high-performance, interactive portfolio web application built for **Mahin Gunjal**, Web Designer and VFX Artist. Combining custom Spider-Man aesthetic themes, interactive GSAP physics animations, high-contrast neubrutalism design tokens, multi-language translation, and WCAG 2.1 Level AA/AAA accessibility standards.

---

## ✨ Key Features

- **Interactive Mask Reveal Hero**: Custom dual-layer hero canvas (`Spider_Man.png` suit mask revealing `Mahin_Man.jpeg` unmasked face on mouse movement).
- **Touch & Mobile Auto-Fallback**: Automatically detects iPads and mobile devices (`ontouchstart`, `@media (hover: none)`) and displays `Mahin_Man.jpeg` directly.
- **Dual Angled Marquee Ribbons**: Infinite CSS marquee ribbons angled across the page showcasing key competencies and design tools.
- **GSAP Pendulum & Web Animations**: Gravity-driven hanging spider web graphics and a pendulum photo frame swinging with physics-based damping (`AboutSection.js` & `SkillsSection.js`).
- **Tactile Click Feedback**: Integrated 3D press click animations (`active:scale-95 active:translate-y-0.5`) across all interactive cards, links, and buttons.
- **Multi-Language Google Translate Widget**: Custom 20-language translation system (supporting Assamese, Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, English, Sanskrit, etc.) with automated top iframe banner suppression.
- **Neubrutalism Cookie Consent Card**: High-contrast Neubrutalism language & cookie consent card matching the website's signature Spider-Man Red (`#a31515`) theme.
- **Dedicated Legal Specs**: Dedicated `/T&C` and `/PrivacyPolicy` pages compliant with the IT Act 2000 & DPDP Act 2023 of India, opening in new tabs with tab closure/navigation fallback.
- **App Router Error & Skeleton Loading**: Custom Spider-Man pulsing spinner loading skeleton (`loading.js`), 404 Not Found page (`not-found.js`), and 500 Internal Server Error boundary (`error.js`).
- **WCAG 2.1 AA/AAA Accessibility**: Keyboard skip-navigation link, semantic HTML5 landmarks (`<main id="main-content">`), 7:1+ contrast ratios, and screen-reader ARIA labeling.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [Next.js 16.3.1](https://nextjs.org/) (App Router, Turbopack)
- **Language**: JavaScript (ES6+)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Typography**: Geist Sans & Geist Mono (Google Fonts)

---

## 📁 Directory & Folder Structure

```
MahinGunjal/
├── public/
│   ├── Assets/
│   │   ├── Mahin.jpeg          # Profile photograph used in pendulum
│   │   ├── Mahin_Man.jpeg      # Unmasked face layer used in Hero
│   │   ├── Spider_Man.png      # Mask suit layer used in Hero
│   │   ├── Web.png             # Spider web graphic
│   │   ├── spidey_gif_1.png    # Skills section right pendulum graphic
│   │   └── spidey_gif_2.png    # Projects section corner peeking graphic
│   ├── favicon/                # Cross-browser favicons and webmanifest
│   └── Mahin_Resume.pdf        # Downloadable resume document
├── src/
│   ├── app/
│   │   ├── PrivacyPolicy/
│   │   │   └── page.js         # Dedicated Privacy Policy legal page
│   │   ├── T&C/
│   │   │   └── page.js         # Dedicated Terms & Conditions legal page
│   │   ├── error.js            # Global 500 internal server error boundary
│   │   ├── globals.css         # Tailwind tokens & Google Translate banner overrides
│   │   ├── layout.js           # Root layout with WCAG skip link
│   │   ├── loading.js          # Spider-Man spinner & skeleton wireframes
│   │   ├── not-found.js        # Custom 404 Not Found error page
│   │   └── page.js             # Main homepage assembling all section components
│   └── components/
│       ├── AboutSection.js     # Bio, primary tech stack, and pendulum photo frame
│       ├── ExperiencesSection.js # Vertical web thread experience timeline
│       ├── Footer.js           # Legal/Connect links, language selector, Cookie card
│       ├── Hero.js             # Dual-layer mask reveal hero section
│       ├── MarqueeBanner.js    # Angled infinite skill ribbons
│       ├── Navbar.js           # Glassmorphic header & mobile hamburger menu
│       ├── ProjectsSection.js  # Clickable project cards with corner Spider-Man
│       ├── SkillsSection.js    # Technical skills grid with hanging Spidey pendulum
│       └── TextType.js         # Smooth typing text animation utility
├── .gitignore                  # Git ignore specifications
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and project scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and `npm` installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahingunjal/portfolio.git
   cd MahinGunjal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To test the optimized static production build:

```bash
npm run build
npm run start
```

---

## ♿ WCAG 2.1 & Legal Compliance

- **Keyboard Navigation**: Press `Tab` upon page load to reveal the **"Skip to main content"** shortcut link.
- **Contrast & Motion**: High contrast ratios exceeding 7:1; respects user `prefers-reduced-motion` settings.
- **Legal Frameworks**: Formulated under the **Information Technology Act, 2000** and **Digital Personal Data Protection (DPDP) Act, 2023** of India.

---

&copy; 2026 • Made with ❤️ in Bharat 🇮🇳 | Mahin Gunjal • All Rights Reserved | UI Design Inspiration: [@srii_tech_](https://www.instagram.com/srii_tech_?igsh=aHJra2h0Y3A1c3pj) | Developed by [Nisarg](https://nisargjayeshdelvadiya.com)
