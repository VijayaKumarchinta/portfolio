<div align="center">
  <h1>✨ Personal Portfolio</h1>
  <p><strong>Vue 3 · Vite · Tailwind CSS · Three.js</strong></p>

  [![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  [![Deploy Status](https://img.shields.io/github/actions/workflow/status/VijayaKumarchinta/portfolio/deploy.yml?branch=main&style=for-the-badge&logo=github&label=Deploy)](https://github.com/VijayaKumarchinta/portfolio/actions)
  [![Live Demo](https://img.shields.io/badge/LIVE_DEMO-8A2BE2?style=for-the-badge&logo=cloudflare&logoColor=white)](https://vijayakumarchinta-portfolio.pages.dev)

  <p>A modern, dynamic portfolio website showcasing skills, projects, and experience in data analytics and software development.</p>
</div>

<br>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [📸 Sections](#-sections)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🌐 Deployment](#-deployment)
- [📝 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI** | Glassmorphism design with smooth animations, gradient orbs, and particle backgrounds |
| 🖱️ **Interactive Elements** | Magnetic buttons, scroll-triggered text reveals, real-time mouse-tracking effects |
| 📜 **Smooth Scrolling** | Powered by Lenis for fluid, performant scrolling |
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile |
| ♿ **Accessibility** | Respects `prefers-reduced-motion` OS setting |

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen intro with animated particle field |
| **About** | Personal introduction and background |
| **Skills** | Technical proficiencies with glassmorphism cards |
| **Projects** | Highlighted data analytics and software projects |
| **Experience** | Professional background and career timeline |
| **Certifications** | Relevant certifications and credentials |
| **Contact** | Get in touch form and links |
| **Footer** | Social links and attribution |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) |
| **Build Tool** | [Vite](https://vitejs.dev/) v8 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 + glassmorphism utilities |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **3D / Visuals** | [Three.js](https://threejs.org/) for particle field background |
| **Icons** | Custom SVG icons (no icon library dependency) |
| **Fonts** | Cabinet Grotesk + JetBrains Mono via Google Fonts |

---

## 🚀 Getting Started

<details>
<summary><strong>Click to expand setup instructions</strong></summary>

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

Output is written to `dist/`.

### Preview

```bash
npm run preview
```

</details>

---

## 📁 Project Structure

```
src/
├── App.vue                     # Root component
├── main.js                     # App entry point
├── style.css                   # Global styles + Tailwind
├── components/
│   ├── Canvas/
│   │   └── ParticleField.vue   # Three.js particle background
│   ├── Sections/
│   │   ├── Hero.vue            # Intro section
│   │   ├── About.vue           # Personal background
│   │   ├── Skills.vue          # Skills grid
│   │   ├── Projects.vue        # Project showcase
│   │   ├── Experience.vue      # Career timeline
│   │   ├── Certifications.vue  # Certifications
│   │   ├── Contact.vue         # Contact form
│   │   └── Footer.vue          # Footer
│   └── UI/
│       ├── NavBar.vue          # Sticky navigation
│       ├── GlassCard.vue       # Glassmorphism card
│       ├── MagneticButton.vue  # Magnetic hover effect
│       └── RevealText.vue      # Scroll animation
└── composables/
    ├── useLenis.js             # Smooth scroll
    ├── useReducedMotion.js     # Accessibility
    ├── useMousePosition.js     # Mouse tracking
    └── useParticles.js         # Particle system
```

---

## 🌐 Deployment

### Auto-deploy (CI/CD)

Every push to `main` triggers GitHub Actions → Cloudflare Pages:

| Step | Action |
|------|--------|
| 1 | `npm ci` — clean install |
| 2 | `npm run build` — production build |
| 3 | `wrangler pages deploy` — deploy to Pages |

### Manual Deploy

```bash
npx wrangler pages deploy dist --project-name=Vijayakumarchinta-portfolio
```

---

## 📝 License

This project is licensed under the **MIT License**.

---

<div align="center">
  <sub>
    Built by <a href="https://github.com/VijayaKumarchinta">Vijaya Kumar Chinta</a>
    <br>
    💻 <a href="https://github.com/VijayaKumarchinta/VijayaKumarchinta">GitHub Profile</a>
  </sub>
</div>
