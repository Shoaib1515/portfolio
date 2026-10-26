# Muhammad Shoaib Asghar — Portfolio

Next.js 16 / React 19 portfolio featuring software engineering, applied AI, and cybersecurity projects.

- Website: https://portfolio-shoaib22.vercel.app
- GitHub: https://github.com/Shoaib1515
- LinkedIn: https://www.linkedin.com/in/mshoaibasghar/

## Run and verify

```sh
npm install
npm run dev
npm test
npm run lint
npm run build
npm run start
```

## Design and content

The page leads with selected work, then background, skills, experience, credentials, resumes, and contact. A cyan, violet, and amber palette connects software, AI, and security. A custom 3D orbital hero visual, glass panels, conceptual project illustrations, hover effects, and lightweight animation keep the presentation modern. Motion respects reduced-motion preferences. Mobile navigation is a non-modal disclosure with Escape support. Theme selection persists when browser storage is available; content stays visible without JavaScript.

Projects are maintained in `src/data/projects.js`. The featured projects were checked against their public GitHub READMEs on 2026-10-26. Travels WhatsApp AI Agent replaces AI SOC Analyst in the featured three; SOC Analyst remains in the full collection. All 16 projects have distinct topic-specific SVG illustrations defined in `src/data/projectArtwork.js`. They describe repository capabilities, not independent production audits or performance claims. AI Phishing Guard currently supports manual analysis, not Gmail monitoring. Original projects remain available through filters and “Explore all projects.” No project screenshots were fabricated. The unpublished placeholder blog is not rendered.

Update `SITE.url` in `src/lib/constants.js` if the deployment domain changes. Metadata, sitemap, and robots use it. The social sharing image is generated locally by Next.js.

## Contact configuration

Copy `.env.example` to `.env.local` and configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, and optionally CONTACT_FROM_EMAIL. Never commit credentials. Gmail app-password display spaces are removed; passwords for other providers retain literal spaces.

The endpoint validates JSON, field types, lengths, and email format; bounds the incoming body to 16 KiB; escapes HTML; and ignores honeypot submissions. A coarse burst limit allows five delivery attempts per minute per server instance. This protects a low-volume portfolio but is shared by visitors and resets on restarts. For multiple instances or sustained abuse, add a shared rate limiter or hosting-edge protection. It is not distributed bot protection.

`npm test` mocks SMTP and tests invalid payloads, missing configuration, HTML escaping, delivery failures, rate-limit enforcement, and quota expiry. No real email is sent by tests. Live SMTP delivery must be checked separately with the deployed configuration.

## Assets

Existing profile photo, certificate images, and three downloadable resumes remain in `public/`. Certificate images are presentation assets; external issuer verification links have not been supplied. The hero artwork in `public/images/hero-orbit.webp` was generated with the built-in image tool and optimized to WebP. The prompt was: a premium three-band orbital intelligence core, reflective dark metal and glass, cyan/violet/amber studio lighting on midnight navy, no text or UI. Project illustrations are conceptual vector artwork, not screenshots of the applications. Legacy optional visual components remain in source.
