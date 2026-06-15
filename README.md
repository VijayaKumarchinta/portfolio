# Portfolio

A modern, dynamic portfolio website built with Vue 3 and Vite, showcasing my skills, projects, and experience in data analytics and software development.

## Features

- **Modern UI**: Glassmorphism design with smooth animations and transitions.
- **Dynamic Sections**: Built with Vue components for easy maintenance and scalability.
- **Interactive Elements**: Hover effects, particle backgrounds, and scroll animations.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Sections

- **About**: A brief introduction and personal statement.
- **Skills**: A showcase of technical proficiencies and tools.
- **Experience**: Professional background and career timeline.
- **Projects**: Highlighted data analytics and software development projects.

## Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS with Custom Properties
- **Icons**: [Font Awesome](https://fontawesome.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To create a production build:
```bash
npm run build
```

The build output will be stored in the `dist/` directory.

### Preview

To preview the production build locally:
```bash
npm run preview
```

## Deployment

### Deploy to Netlify

This project is pre-configured for Netlify with SPA routing support (`public/_redirects`).

**Option A — Automatic (recommended):**
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** → **Import an existing project**.
4. Connect your repository and Netlify will auto-detect the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

**Option B — CLI (one-command deploy):**
```bash
npx netlify-cli deploy --prod --dir=dist
```

### Deploy to Vercel

1. Push your code to a Git repository.
2. Log in to [Vercel](https://vercel.com/).
3. Click **Add New** → **Project** and import your repository.
4. Vercel will auto-detect Vite and set:
   - **Framework preset:** Vue
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**.

> ⚠️ For SPA client-side routing on Vercel, create a `vercel.json` in the project root:
> ```json
> {
>   "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
> }
> ```

### Deploy to Cloudflare Pages

This project includes a `wrangler.toml` for Cloudflare Pages. SPA routing is handled automatically via the `public/_redirects` file.

**Option A — Dashboard (recommended):**
1. Push your code to a GitHub repository.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select your repository and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

**Option B — CLI (one-command deploy):**
```bash
npx wrangler login
npx wrangler pages deploy dist --project-name=portfolio
```

### Deploy to GitHub Pages

1. Update `vite.config.js` to set the correct base path:
   ```js
   export default defineConfig({
     base: '/repository-name/', // replace with your repo name
     // ...
   })
   ```
2. Build the project: `npm run build`
3. Deploy the `dist` folder using any of these methods:
   - **GitHub Actions** — use the [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) action.
   - **Manual** — push the `dist` folder to the `gh-pages` branch.

---

> 💡 This project is optimized for static hosting. The `_redirects` file handles SPA client-side routing on Netlify and Cloudflare Pages out of the box.
