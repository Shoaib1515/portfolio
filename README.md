# Muhammad Shoaib Asghar — Portfolio

Next.js 16.4 / React 19 portfolio featuring software engineering, applied AI, and cybersecurity projects.

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

The page leads with selected work, then background, skills, experience, credentials, resumes, and contact. A cyan, violet, and amber palette connects software, AI, and security. A transparent monitor-head character over theme-aware backgrounds, glass panels, conceptual project illustrations, and hover effects keep the presentation modern. Motion respects reduced-motion preferences. Mobile navigation is a non-modal disclosure with Escape support. Theme selection persists when browser storage is available; content stays visible without JavaScript.

Projects are maintained in `src/data/projects.js`. The featured projects were checked against their public GitHub READMEs on 2026-10-26. Travels WhatsApp AI Agent replaces AI SOC Analyst in the featured three; SOC Analyst remains in the full collection. All 16 projects have distinct topic-specific SVG illustrations defined in `src/data/projectArtwork.js`. They describe repository capabilities, not independent production audits or performance claims. AI Phishing Guard currently supports manual analysis, not Gmail monitoring. Original projects remain available through filters and “Explore all projects.” No project screenshots were fabricated.

Update `SITE.url` in `src/lib/constants.js` if the deployment domain changes. Metadata, sitemap, and robots use it. The social sharing image is generated locally by Next.js.

## Contact configuration

Copy `.env.example` to `.env.local` and configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, and optionally CONTACT_FROM_EMAIL. Never commit credentials. Gmail app-password display spaces are removed; passwords for other providers retain literal spaces.

The endpoint validates JSON, field types, lengths, and email format; bounds the incoming body to 16 KiB; escapes HTML; and ignores honeypot submissions. A coarse burst limit allows five delivery attempts per minute per server instance. This protects a low-volume portfolio but is shared by visitors and resets on restarts. For multiple instances or sustained abuse, add a shared rate limiter or hosting-edge protection. It is not distributed bot protection.

`npm test` mocks SMTP and tests invalid payloads, missing configuration, HTML escaping, delivery failures, rate-limit enforcement, and quota expiry. No real email is sent by tests. Live SMTP delivery must be checked separately with the deployed configuration.

## Assets

The profile photo, certificate images, three downloadable resumes, and current full-body hero character are in `public/`. Certificate images are presentation assets; external issuer verification links have not been supplied. Project illustrations are conceptual vector artwork, not screenshots of the applications.


## Hero character

The hero shows the complete monitor-head character, including trousers and both boots, from `public/images/hero-monitor-fullbody.webp`. The built-in image tool extended the approved dark-jacket character downward with a relaxed standing pose, matching trousers and boots, cyan/violet/amber lighting, and a transparent background. Its prompt preserved the monitor identity and requested the entire silhouette with uncropped feet.

The body is a transparent image. The head is a genuine Three.js model with a front screen, independently moving eyes, side controls, and rear ventilation. Normal mouse movement controls its gaze. Drag the monitor to rotate through unlimited full 360-degree turns. Releasing a mouse drag immediately resumes cursor-follow, with completed turns normalized to avoid a long rewind. Arrow keys also rotate it, and Home or Escape resets the view. Touch supports direct dragging. Reduced-motion settings disable the interaction.

The model renders on demand and stops drawing when its movement settles. Without WebGL or JavaScript, or after a graphics-context loss, the complete static character is shown instead. Dark and light CSS backgrounds continue to use the existing theme setting.


## Glass styling

Dark and light themes share frosted surface tokens in `src/styles/variables.css`.
The navigation, hero cards, content cards, and form use translucent gradients,
subtle edge highlights, and fixed backdrop blur. Browsers without backdrop-filter
support receive opaque surfaces. Layout, content, artwork, and robot interaction
are preserved. The custom cursor now stops scheduling animation frames after it
settles.

Use Node.js 20.9 or newer, as required by Next.js 16.4.
