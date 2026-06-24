# Revanth Gowda Vimala Kempegowda — Portfolio

Personal portfolio website for Revanth Gowda, Senior Data Engineer at Vanguard.

**Live site:** https://rvimalakempegowda.github.io/rvimalakempegowda_portfolio/

---

## Tech Stack

- **React 19** + **Vite 5**
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — scroll animations
- **Formspree** — contact form (no backend)
- **GitHub Actions** — CI/CD deploy to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed top nav with scroll progress bar
│   ├── Hero.jsx            # Landing section with photo
│   ├── About.jsx           # Bio, stats, education, certifications
│   ├── Experience.jsx      # Work history cards
│   ├── Projects.jsx        # Project showcase grid
│   ├── Skills.jsx          # Skills grouped by category
│   ├── Publications.jsx    # IEEE publication
│   ├── Contact.jsx         # Contact form + info
│   └── ScrollToTop.jsx     # Scroll-to-top button
├── data/
│   └── portfolio.js        # All content — edit here to update the site
├── hooks/
│   └── useScrollReveal.js  # Intersection observer for reveal animations
└── assets/
    └── Revanth.JPG         # Profile photo
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/rvimalakempegowda_portfolio/

## Updating Content

All text content lives in `src/data/portfolio.js` — edit that file to update bio, experience, projects, skills, certifications, or publications. No need to touch any component files for content changes.

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:
1. Runs `npm ci && npm run build`
2. Deploys the `dist/` output to the `gh-pages` branch via `peaceiris/actions-gh-pages`

GitHub Pages is configured to serve from the `gh-pages` branch.

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, tagline, photo, social links |
| About | Bio, stats, education (4.0 GPA, E.C. Hall Scholar), certifications |
| Experience | Vanguard · Cognizant · University of Central Oklahoma |
| Projects | 5 data engineering projects |
| Skills | 10 skill categories across cloud, data, AI/GenAI |
| Publications | IEEE ICCCS 2025 paper |
| Contact | Formspree-powered contact form |

---

Built with React + Vite. Deployed on GitHub Pages.
