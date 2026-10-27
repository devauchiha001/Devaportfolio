# Devaraj J — Portfolio

A responsive personal portfolio with a product-led homepage and a detailed CareerForge AI case study.

## Live project links
- CareerForge AI: https://careerforge-ai.de5.net/
- CareerForge AI repository: https://github.com/devauchiha001/careerforge-ai-main
- Smart Study AI: https://smartstudyapp-ca670.web.app/

## Site files
- `index.html` — portfolio homepage and structured metadata
- `style.css` — visual system, responsive layout and homepage styles
- `script.js` — responsive navigation, reveal behavior and current year
- `case-study.html` — CareerForge AI case study
- `case-study.css` — case study layout and components
- `sitemap.xml` / `robots.txt` — basic crawl guidance
- `docs/PORTFOLIO_REDESIGN_BRIEF.md` — strategy, information architecture, wireframe, validation plan and handoff checklist
- `docs/DESIGN_SYSTEM.md` — visual tokens, typography, components, responsive rules, motion and accessibility standards
- `logo.svg` — new vector DJ portfolio monogram used as the site logo and favicon

## Cinematic 3D redesign

The `redesign/cinematic-3d-portfolio` branch introduces a dark navy / electric-blue visual system, a CSS-built 3D orb scene, floating interface panels, pointer parallax, and a density-limited canvas particle field. The hero is built without a heavy 3D runtime dependency, so the core experience remains lightweight and readable.

- `index.html` — updated hero scene; original portfolio copy, contact details, project links and structured data retained.
- `style.css` — cinematic design tokens, 3D scene styling, project surfaces, responsive refinements and reduced-motion fallbacks.
- `script.js` — optional pointer parallax and canvas particles; scene decoration is disabled for reduced-motion and coarse-pointer devices.
- `case-study.html` — dark theme color and updated stylesheet cache key.

### Validation before merge

- Confirm the live and source links for CareerForge AI and Smart Study AI.
- Test the homepage and case study at 320px, 360px, 390px, 768px, 1024px and desktop widths.
- Test keyboard-only navigation, the skip link, menu Escape behavior, and OS reduced-motion preference.
- Run Lighthouse and check GitHub Pages deployment after merging; deployment status is not asserted by this source change.

## Deploy
For a standard GitHub Pages project site, publish the repository root and confirm the site URL in repository settings. If the site is served on a custom domain or a different base path, update the canonical URLs in `index.html` and `case-study.html`, and the locations in `sitemap.xml` and `robots.txt` before publishing.

The root HTML pages link shared styles and scripts. Homepage motion rules are consolidated into `portfolio-design.css`; `ai-assistant.css` stays shared between both pages.

## Before public launch
- Replace the illustrative CareerForge diagrams with genuine, privacy-safe product screenshots.
- Verify the live app, Google sign-in, database rules and job-feed function on the deployed environment.
- Confirm contact information and project descriptions are current.
- Run keyboard/mobile checks and Lighthouse on the actual deployed URL.
- Do not publish user data or unverified product outcome metrics.


## Quick answers widget

- `ai-assistant.css` and `ai-assistant.js` provide the accessible floating assistant widget included on the home and CareerForge case-study pages.
- The widget uses curated, deterministic answers from published portfolio information and is not connected to a live AI provider.
- Next step for true model-generated replies: deploy a server-side endpoint with a private model credential, add rate limits and monitoring, and keep the endpoint URL/configuration separate from any secret.
- The assistant links users to the actual project, case study, GitHub, LinkedIn and email routes. Test mobile layout, keyboard access and each action before launch.


## Cinematic homepage redesign

The homepage uses a responsive asymmetric layout, a near-black base with restrained violet/blue gradients and cyan accents, and compact About, Skills, Project, Contact, Experience, and Approach panels. The redesign stays with the existing static HTML/CSS/JavaScript architecture.

- `portfolio-design.css`: responsive layout and merged homepage motion rules.
- `motion-polish.js`: scroll-aware navigation and accessible skill filters.
- `logo.svg`: portfolio monogram used by the page icon and brand panel.

The portfolio updates are being committed to `main`; complete real-browser/device QA before treating them as production-verified.


## Assets
- The social preview is at `assets/portfolio-social-preview.png` (1200×630 PNG) and is referenced by Open Graph and Twitter metadata.
- TODO: Add your real resume at `assets/Devaraj-J-Resume.pdf`. No placeholder PDF is included.


## Reference-inspired portfolio refresh

The homepage has been redesigned with an airy editorial layout, pill navigation, a fixed translucent header, alternating product panels, role cards, and a label-based custom cursor. The implementation uses vanilla HTML/CSS/JS and no build step.

- `reference-inspired.css` / `reference-inspired.js`: responsive layout, custom cursor, motion reveals and the CareerForge intro placeholder.
- `assets/careerforge-live-screenshot.png` / `assets/smart-study-live-screenshot.png`: real 1200 × 780 browser captures from each public deployed project landing page. Original SVG concept previews remain in `assets/` as editable backup artwork.
- `docs/DESIGN_NOTES.md`: observed reference measurements and implementation notes.
- Add your own real resume as `assets/Devaraj-J-Resume.pdf`; no placeholder PDF is included.
- Replace illustrative project previews with privacy-safe screenshots from your deployed applications when you have them.
