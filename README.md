# Muhammad Shoaib Asghar — Portfolio (Next.js)

A Next.js + Tailwind CSS + Framer Motion + Three.js portfolio spanning three
domains: Software Engineering, AI, and Cybersecurity.

## Live demo

- Public website: https://portfolio-pi-ivory-95.vercel.app/
- GitHub repo: https://github.com/Shoaib1515/portfolio

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll-reveal and layout animations
- **GSAP** — installed and ready for any additional timeline animations
- **Three.js** — the floating 3D wireframe shapes in the hero section

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Contact form email setup

The contact form now posts to `src/app/api/contact/route.js` and sends an
email using SMTP.

1. Create a local environment file:

  ```bash
  cp .env.example .env.local
  ```

2. Fill these values in `.env.local`:

  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL` (optional, defaults to `SMTP_USER`)

3. Restart the dev server and test the Contact section.

## Real content included

- `src/lib/constants.js`, `src/data/*.js` — populated with your real
  education, experience, skills, projects, and certifications from your
  uploaded resumes
- `public/resume/software-resume.pdf`, `cybersecurity-resume.pdf`,
  `qa-resume.pdf` — your actual resume files, already in place and downloadable

## Still worth adding

- `src/components/Contact/Contact.jsx` — wire the form's `handleSubmit` to a
  real backend (e.g. Formspree, a Next.js API route, or your own server) so
  messages actually reach your inbox
- `public/images/*` — profile photo, hero background, project screenshots,
  and certificate images (currently empty folders — add `.webp` files
  matching the paths referenced in `src/data/*.js`)
- Blog posts in `src/data/blog.js` are still placeholders — swap in your own
  writing whenever you're ready

## Notes

- The mobile navigation menu is a full-screen slide-in panel with a glass
  backdrop, animated hamburger → X icon, and staggered link entrance.
- Dark/light theme toggle is in the navbar (top-right).
- A scroll-progress bar runs along the very top of the page.
- The custom cursor and 3D hero shapes automatically disable themselves for
  touch devices and for users with prefers-reduced-motion enabled.
