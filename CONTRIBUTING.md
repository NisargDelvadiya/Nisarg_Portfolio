# Contributing Guidelines & Development Standards

Welcome to the development guide for the **Nisarg Jayesh Delvadiya Portfolio** codebase. These standards maintain high code quality, security, and consistent design aesthetics.

---

## 1. Development Prerequisites
- **Node.js**: Version 18.17+ or 20+
- **Package Manager**: `npm` (version 9+)
- **Git**: Modern version with active SSH/HTTPS credentials

---

## 2. Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/NisargDelvadiya/Mahin_Portfolio.git
cd Nisarg_Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

---

## 3. Code Conventions & Quality Standards

### Component Structure
- Always place reusable UI components inside `src/components/`.
- Provide complete JSDoc headers for each component describing features, parameters, and behaviors.
- Ensure every interactive element (`<button>`, `<a>`, `<select>`) has:
  - `cursor-pointer` class
  - `title="..."` attribute for descriptive native tooltips
  - `aria-label="..."` attribute for screen reader accessibility
  - Visual active state (e.g. `active:scale-95 transition-all duration-200`)

### Styling & Tailwind CSS
- Stick strictly to the curated Stark / Iron Man color palette:
  - Gold: `#FBCA03`, `#B97D10`
  - Red / Burgundy: `#AA0505`, `#6A0C0B`
  - High-contrast blacks and crisp whites for 7:1+ accessibility compliance
- Use responsive modifiers (`sm:`, `md:`, `lg:`, `xl:`) to ensure seamless layouts from mobile (320px) to ultra-wide displays.

### Performance & Security
- Never commit private `.env`, `.pem`, `.key`, or personal temporary files.
- Always use standard Next.js routing patterns (e.g. `useRouter().push("/")` instead of raw `window.location.href`).
- Wrap critical section mounts in `<ErrorBoundary>` to avoid cascading application crashes.

---

## 4. Linting & Validation

Before pushing any commits or submitting PRs:

```bash
# Run ESLint to verify zero errors
npm run lint

# Validate production build
npm run build
```

---

## 5. Commit Guidelines
Use semantic commit prefixes:
- `feat:` New features, sections, or UI enhancements
- `fix:` Bug fixes or layout corrections
- `style:` Visual, color, or alignment adjustments
- `docs:` Documentation updates or markdown additions
- `refactor:` Code reorganization without behavioral modifications
