#  Nisarg's Macfolio — macOS Portfolio Experience

A modern, high-performance, interactive **macOS Desktop Portfolio** built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Zustand**, and **GSAP**.

Designed and crafted by **[Nisarg Delvadiya](https://nisargjayeshdelvadiya.com/)**.

---

## ✨ Features

- 🖥️ **Authentic macOS Desktop UI:** Native macOS menu bar, frosted glass dock, draggable desktop windows, and traffic light controls (close, minimize, maximize).
- 🖱️ **Freeform Whole-Window Dragging:** Click and drag any window from anywhere on its frame, with boundary collision detection keeping windows below the menu bar.
- 🗂️ **Interactive Finder:** Browse projects, folder structures, text documents, image previews, and direct live deployment links.
- 📷 **Photos / Gallery App:** Contained gallery thumbnail grid with instant image inspection modal and keyboard controls.
- 💻 **Interactive Terminal:** Command-line style developer showcase (`portfolio-skills --list`) displaying tech stack and skill proficiencies.
- 📄 **Live Resume Reader:** Built-in PDF and formatted curriculum vitae with education, work history, and stack summary.
- 📬 **One-Click Contact:** Clean copy-to-clipboard email integration (`nisarg.delvadiya1@zohomail.in`) with instant visual feedback and social profile links.
- ♿ **WCAG AA Compliant:** Comprehensive keyboard navigation (`Tab`, `Enter`, `Space`), `aria-*` accessibility attributes, high-contrast text, and screen reader labels.
- 📱 **Fully Responsive:** Fluid scaling across all screen dimensions (mobile, tablet, ultra-wide desktop).

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Core Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla Glassmorphism |
| **Motion & Physics** | [GSAP 3](https://gsap.com/) & [@gsap/react](https://www.npmjs.com/package/@gsap/react) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) with [Immer](https://immerjs.github.io/immer/) |
| **Date & Time** | [Day.js](https://day.js.org/) |

---

## 📂 Project Architecture

```bash
Nisarg_Macfolio/
├── public/
│   ├── icons/            # SVG vector icons & system glyphs
│   └── images/           # Dock icons, project screenshots, wallpapers
├── src/
│   ├── app/
│   │   ├── globals.css   # Glassmorphism tokens, window bounds & typography
│   │   ├── layout.js     # Metadata, SEO tags & cache cleanup
│   │   └── page.js       # Dynamic client mounting & desktop orchestrator
│   ├── components/
│   │   ├── Dock.jsx      # Magnifying dock with bounce launch effects
│   │   ├── Navbar.jsx    # macOS menu bar with real-time clock
│   │   ├── Welcome.jsx   # Dynamic hero typography
│   │   └── WindowControls.jsx # Traffic light buttons (Close, Min, Max)
│   ├── constants/
│   │   └── index.js      # Portfolio projects, skills, education, and links
│   ├── hoc/
│   │   └── WindowWrapper.jsx # GSAP Draggable, focus management & transitions
│   ├── store/
│   │   └── windows.js    # Zustand store controlling window states and z-indices
│   └── windows/
│       ├── Contact.jsx   # Contact card & copy email action
│       ├── Finder.jsx    # File & folder exploration system
│       ├── ImgFile.jsx   # Image preview modal
│       ├── Photos.jsx    # Gallery viewer & photo grid
│       ├── Resume.jsx    # Interactive CV reader
│       ├── Safari.jsx    # Blog reader & browser interface
│       ├── Terminal.jsx  # CLI skills viewer
│       └── TxtFile.jsx   # Document reader
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.18+` or `20+`
- npm, pnpm, or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NisargDelvadiya/Nisarg_Portfolio.git
   cd Nisarg_Portfolio
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

---

## 📦 Production Build

To test or generate the production build:
```bash
npm run build
npm run start
```

---

## 👤 Author

**Nisarg Delvadiya**
- **Website:** [https://nisargjayeshdelvadiya.com/](https://nisargjayeshdelvadiya.com/)
- **Email:** [nisarg.delvadiya1@zohomail.in](mailto:nisarg.delvadiya1@zohomail.in)
- **GitHub:** [@NisargDelvadiya](https://github.com/NisargDelvadiya)
- **LinkedIn:** [Nisarg Delvadiya](https://www.linkedin.com/in/nisargjayeshdelvadiya/)

---

## 🙏 Acknowledgments

- Special thanks and credit to **[Adrian Hajdin](https://github.com/adrianhajdin)** / **[JavaScript Mastery](https://www.jsmastery.pro/)** for the design inspiration, educational resources, and community guidance.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

