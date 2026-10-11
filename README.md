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

## Deploy
For a standard GitHub Pages project site, publish the repository root and confirm the site URL in repository settings. If the site is served on a custom domain or a different base path, update the canonical URLs in `index.html` and `case-study.html`, and the locations in `sitemap.xml` and `robots.txt` before publishing.

The CSS and JavaScript files in the root are linked by the current HTML pages. The parallel `css/` and `js/` folders are legacy/alternate copies and are not referenced by the current pages.

## Before public launch
- Replace the illustrative CareerForge diagrams with genuine, privacy-safe product screenshots.
- Verify the live app, Google sign-in, database rules and job-feed function on the deployed environment.
- Confirm contact information and project descriptions are current.
- Run keyboard/mobile checks and Lighthouse on the actual deployed URL.
- Do not publish user data or unverified product outcome metrics.
