# Muhammad Shoaib Asghar — Portfolio (Next.js)

A Next.js + Tailwind CSS + Framer Motion + Three.js portfolio spanning three
domains: Software Engineering, AI, and Cybersecurity.

## Live demo

- Public website: https://portfolio-shoaib22.vercel.app
- GitHub repo: https://github.com/Shoaib1515/portfolio

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll-reveal and layout animations
- **GSAP** — installed and ready for additional timeline animations
- **Three.js** — the floating 3D wireframe shapes in the hero section
- **Nodemailer** — powers the working contact form via a Next.js API route

## Features

- Three color-coded domains (Software / AI / Security) with dedicated
  sections, filterable projects, and filterable certifications
- Real, working contact form (`/api/contact`) that sends email via SMTP
- Dark/light theme toggle
- Full-screen animated mobile navigation menu
- Scroll-progress bar, custom cursor, and 3D hero shapes (all respect
  `prefers-reduced-motion`)
- Downloadable resumes for different roles (Software / Cybersecurity / QA)

## Getting started

1. Install dependencies:

```bash
   npm install
```

2. Run the dev server:

```bash
   npm run dev
```

3. Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Contact form email setup

The contact form posts to `src/app/api/contact/route.js` and sends an email
via SMTP.

1. Create a local environment file:

```bash
   cp .env.example .env.local
```

2. Fill in `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional, defaults to `SMTP_USER`)

3. Restart the dev server and test the Contact section.

## Still worth adding

- Blog posts in `src/data/blog.js` are still placeholders — swap in real
  writing whenever ready
- A few project screenshots in `public/images/projects/` are still pending

## License

This project is personal portfolio code. Feel free to reference the
structure, but please don't republish the content as your own.