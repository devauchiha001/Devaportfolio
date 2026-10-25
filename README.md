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
- `devaraj-profile.png` — existing profile image
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

The CSS and JavaScript files in the root are linked by the current HTML pages. The parallel `css/` and `js/` folders are legacy/alternate copies and are not referenced by the current pages.

## Before public launch
- Replace the illustrative CareerForge diagrams with genuine, privacy-safe product screenshots.
- Verify the live app, Google sign-in, database rules and job-feed function on the deployed environment.
- Confirm contact information and project descriptions are current.
- Run keyboard/mobile checks and Lighthouse on the actual deployed URL.
- Do not publish user data or unverified product outcome metrics.


## Motion polish review

The `preview/motion-portfolio-polish` branch builds on the existing cinematic redesign without migrating the static HTML/CSS/JavaScript site to a framework.

- Adds a compact motion-polish stylesheet and scroll-aware active-navigation script.
- Keeps essential content visible by default; scroll reveals and hero staggering opt in only when the main script is available.
- Removes the unused `motionPreference` local from `script.js`.
- Refreshes the existing SVG site icon and its cache-busting references.
- Preserves current project links, case-study content, contact actions, assistant widget, and metadata.

### QA status

Static checks performed during review: JavaScript parse checks for `script.js`, `motion-polish.js`, and `ai-assistant.js`; CSS brace-balance checks; duplicate HTML ID and in-page fragment-target checks; and local script/stylesheet reference checks.

Not yet verified in a real browser: responsive rendering, menu and scroll interaction across viewport sizes, console/runtime behavior, keyboard-only interaction, and deployed-site performance. This repository is a static site and the root does not provide an npm production-build or automated test command. No deployment was performed. A resume download action was not added because no resume document is present in the repository.

## Deva AI portfolio assistant

- `ai-assistant.css` and `ai-assistant.js` provide the accessible floating assistant widget included on the home and CareerForge case-study pages.
- The first iteration uses curated, deterministic answers from verified portfolio information; it does not send visitor messages to an AI provider yet.
- Next step for true model-generated replies: deploy a server-side endpoint with a private model credential, add rate limits and monitoring, and keep the endpoint URL/configuration separate from any secret.
- The assistant links users to the actual project, case study, GitHub, LinkedIn and email routes. Test mobile layout, keyboard access and each action before launch.
