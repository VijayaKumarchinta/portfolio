# Portfolio

A modern, dynamic portfolio website built with **Vue 3** and **Vite**, showcasing skills, projects, and experience in data analytics and software development.

**Live site:** [https://portfolio.pages.dev](https://portfolio.pages.dev)

## Features

- **Modern UI** — Glassmorphism design with smooth animations, gradient orbs, and particle backgrounds
- **Interactive Elements** — Magnetic buttons, scroll-triggered text reveals, and real-time mouse-tracking effects
- **Smooth Scrolling** — Powered by Lenis for fluid, performant scrolling
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Reduced Motion Support** — Respects `prefers-reduced-motion` OS setting

## Sections

- **Hero** — Full-screen intro with animated particle field
- **About** — Personal introduction and background
- **Skills** — Technical proficiencies and tools displayed with glassmorphism cards
- **Projects** — Highlighted data analytics and software development projects
- **Experience** — Professional background and career timeline
- **Certifications** — Relevant certifications and credentials
- **Contact** — Get in touch form / links
- **Footer** — Social links and attribution

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) |
| **Build Tool** | [Vite](https://vitejs.dev/) v8 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 with custom CSS properties and glassmorphism utilities |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **3D / Visuals** | [Three.js](https://threejs.org/) for particle field background |
| **Icons** | Custom SVG icons (no icon library dependency) |
| **Fonts** | Cabinet Grotesk (display) + JetBrains Mono (code) via Google Fonts / Fontshare |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20.19 or higher (v22+ recommended)
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/VijayaKumarchinta/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output is written to the `dist/` directory with code-split chunks (Three.js and Vue are separated for optimal caching).

### Preview

```bash
npm run preview
```

Serves the production build locally from `dist/`.

## Project Structure

```
src/
├── App.vue                          # Root component
├── main.js                          # App entry point
├── style.css                        # Global styles + Tailwind imports
├── components/
│   ├── Canvas/
│   │   └── ParticleField.vue        # Three.js animated particle background
│   ├── Sections/
│   │   ├── Hero.vue                 # Intro / landing section
│   │   ├── About.vue                # Personal background
│   │   ├── Skills.vue               # Skills grid with glass cards
│   │   ├── Projects.vue             # Project showcase
│   │   ├── Experience.vue           # Career timeline
│   │   ├── Certifications.vue       # Certifications
│   │   ├── Contact.vue              # Contact form / links
│   │   └── Footer.vue               # Footer
│   └── UI/
│       ├── NavBar.vue               # Sticky navigation
│       ├── GlassCard.vue            # Reusable glassmorphism card
│       ├── MagneticButton.vue       # Button with magnetic hover effect
│       ├── RevealText.vue           # Scroll-triggered text animation
│       └── ScrollIndicator.vue      # Scroll-down indicator
└── composables/
    ├── useLenis.js                  # Lenis smooth scroll integration
    ├── useReducedMotion.js          # prefers-reduced-motion detection
    ├── useMousePosition.js          # Real-time mouse tracking
    └── useParticles.js              # Three.js particle system logic
```

## Deployment

### Deploy to Cloudflare Pages

SPA routing is handled automatically via `public/_redirects` (supported natively).

**Via the Dashboard (recommended):**
1. Push your code to a GitHub repository.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select your repository and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

**Via CLI:**
```bash
npx wrangler login
npx wrangler pages deploy dist --project-name=portfolio
```

### Deploy to Netlify

Pre-configured for Netlify with SPA routing via `public/_redirects`.

1. Push your code to a Git repository.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** → **Import an existing project**.
4. Connect your repository — Netlify auto-detects:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

---

> 💡 The `public/_redirects` file handles SPA routing on Cloudflare Pages and Netlify out of the box.
