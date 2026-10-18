# ASWIN A — SYSTEMS IN MOTION
### Forward Deployed Engineer · AI Solutions Engineer · Enterprise Systems Specialist

Production personal portfolio website for **Aswin A**, Solutions Engineer at Razorpay (with previous backend engineering experience at Temenos), positioned at the intersection of Forward Deployed Engineering (FDE), AI-assisted development, Model Context Protocol (MCP) integrations, vibe coding rapid prototyping, and enterprise fintech backend systems.

---

## 1. Tech Stack & Architecture

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: Vanilla CSS Modules with centralized design tokens (`src/styles/globals.css`)
  - Midnight navy / deep space palette (`#03060D`, `#08111F`, `#0B1627`)
  - Electric blue (`#6E8BFF`), cyan (`#67E8F9`), emerald (`#34D399`), and violet (`#A78BFA`) accents
  - High-performance GPU-accelerated micro-interactions
  - Responsive design across 1440px desktop down to 360px mobile
  - Full `prefers-reduced-motion` compliance
- **Typography**: Space Grotesk (display), Manrope (interface/body), DM Mono (technical annotations)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 2. Directory Structure

```
aswinPortfolio/
├── public/
│   ├── favicon.svg              # Brand monogram favicon (A↗)
│   ├── resume.pdf               # Local backup copy of resume
│   └── images/
│       ├── aswin-portrait.jpg   # Real portrait photograph
│       └── brands/              # Genuine brand logo SVGs
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive navigation with AI & FDE links + resume button
│   │   ├── Navbar.module.css
│   │   └── CursorGlow.tsx       # Subtle desktop ambient cursor follower
│   ├── hooks/
│   │   └── useReveal.ts         # IntersectionObserver reveal & counter hooks
│   ├── sections/
│   │   ├── Hero.tsx             # "From complex problems to working software" + canvas orbits
│   │   ├── Hero.module.css
│   │   ├── TechStrip.tsx        # Compact capability ticker
│   │   ├── TechStrip.module.css
│   │   ├── About.tsx            # Profile narrative + animated experience metrics
│   │   ├── About.module.css
│   │   ├── Experience.tsx       # Razorpay & Temenos timeline + merchant logo showcase
│   │   ├── Experience.module.css
│   │   ├── AiSpeed.tsx          # "Building at AI Speed" (3 compact capability groups)
│   │   ├── AiSpeed.module.css
│   │   ├── Projects.tsx         # "Selected Projects" (compact verified builds)
│   │   ├── Projects.module.css
│   │   ├── Skills.tsx           # 4-group Technical Toolkit
│   │   ├── Skills.module.css
│   │   ├── Education.tsx        # B.Tech Honours + certifications
│   │   ├── Education.module.css
│   │   ├── Contact.tsx          # Open channel, status pill, resume card, direct links
│   │   └── Contact.module.css
│   ├── styles/
│   │   └── globals.css          # Design tokens, reset, typography, utilities
│   ├── App.tsx                  # Root composition & section orchestrator
│   └── main.tsx                 # React entry point
├── index.html                   # SEO tags, OpenGraph, fonts, theme-color
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 20+)
- npm 9+

### Installation & Local Run
```bash
# Clone or navigate to the repository
cd aswinPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open `http://localhost:5173` (or the port reported in terminal) in your browser.

### Production Build & Preview
```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

### Linting
```bash
# Run Oxlint
npm run lint
```

---

## 4. Asset Guidelines & Locations

### A. Your Portrait Photo
- **Location**: `public/images/aswin-portrait.jpg`
- **Current status**: Provided & loaded.
- **Replacement note**: If you wish to update your photo in the future, save a square or portrait crop at this exact path (`public/images/aswin-portrait.jpg`). The Hero section automatically applies circular orbital masking, restrained contrast, and fine border styling.

### B. Resume PDF
- **Location**: `public/resume.pdf`
- **Current status**: Pending user drop-in.
- **Action Required**: Place your latest official resume PDF directly into `public/` and rename it to `resume.pdf`. The header and mobile menu "Resume" buttons link directly to `/resume.pdf`.

### C. Merchant Brand Logos
- **Location**: `public/images/brands/`
- Contains genuine SVG assets for Razorpay, Temenos, and all 10 supported enterprise merchants (Amazon MX Player, Decathlon, Pizza Hut, BlueStone, Maruti Suzuki, Domino's, Flipkart, Mother Dairy, CaratLane, Urban Company). Each tile features error-handling fallbacks and accessible `alt` text.

---

## 5. Deployment Guide

### Cloudflare Pages
1. Push your repository to GitHub or GitLab.
2. In Cloudflare Dashboard, select **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Set build configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### Vercel / Netlify
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Install command**: `npm install`

---

## 6. Summary of Validation & Tests Performed

1. **Compilation & Typecheck**: `tsc -b && vite build` completed with 0 errors.
2. **Code Quality**: `oxlint` executed across all 14 files with 0 errors and 0 warnings.
3. **Browser Testing**:
   - Canvas orbital animation and dynamic system nodes verified.
   - Animated metric counters (`150+`, `15+`, `16+`, `100+`) trigger smoothly on scroll.
   - All 13 verified brand logo SVGs render with high clarity.
   - Smooth anchor navigation across `#about`, `#experience`, `#projects`, `#skills`, `#contact` verified.
   - Mobile hamburger menu drawer tested: opens, animates links with staggered transitions, closes on selection and overlay click, locks body scroll while open.
   - Tested across desktop (1440px), tablet (1024px, 768px), and mobile (390px, 360px) viewports with zero horizontal overflow.
   - Verified accessibility: semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), descriptive ARIA labels, `focus-visible` styling, and `prefers-reduced-motion` fallbacks.
