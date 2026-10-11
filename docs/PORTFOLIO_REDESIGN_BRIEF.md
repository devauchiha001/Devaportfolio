# Devaraj J — Portfolio Redesign Strategy & Handoff Brief

**Prepared:** 11 October 2026  
**Primary portfolio repo:** https://github.com/devauchiha001/Devaportfolio  
**CareerForge AI live:** https://careerforge-ai.de5.net/  
**CareerForge AI code:** https://github.com/devauchiha001/careerforge-ai-main

## Executive direction

Reposition the site from a neon-themed personal landing page into a product-minded developer portfolio that demonstrates shipped software, decision-making, technical judgement, and outcomes. Keep personality and motion, but let the projects—not decorative effects—earn the attention.

**Creative concept: “Builds with intent.”** A warm off-white canvas, ink-black typography, electric cobalt/indigo accent, restrained lime status highlights, strong editorial type, and product screenshots presented in framed browser/device mockups. An optional dark mode can retain some of the current site's developer personality.

Primary hiring audience: engineering recruiters, product-minded engineering leads, and hiring managers for frontend/full-stack/software development and technical support roles. Primary conversion: project exploration followed by GitHub, LinkedIn, or email contact.

## Current-state audit

The public portfolio in `Devaportfolio` is a hand-built HTML/CSS/JavaScript single-page site. It already has responsive sections, a skip link, reduced-motion CSS, reveal animations, profile imagery, experience, skills and project cards. Avoid a pointless framework rewrite: improve hierarchy, truthfulness, case-study depth, keyboard interactions, content structure, and proof.

Main gaps:
- CareerForge AI is not currently a featured project; Smart Study AI leads instead.
- The portfolio has no dedicated long-form case-study page or research/process evidence.
- Several outcome-like labels and counts need verification before they are used as proof.
- Projects use stylized graphic placeholders rather than product screenshots.
- The current experience/skill claims should be reviewed against source material and actual confidence level.
- SEO fundamentals can be expanded with canonical URL, Open Graph/social preview image, favicon variants, sitemap, robots file, structured data, and meaningful case-study metadata.
- The small navigation interaction, image performance, focus-visible states, contrast, form feedback and analytics need a deliberate acceptance pass.

## Brand direction

### Recommended system: “Editorial Product Lab”
- **Tone:** curious, precise, practical, calm confidence; explain decisions plainly.
- **Palette:** Paper #F7F7F2, Ink #161820, Slate #676B78, Border #E1E3E8, Cobalt #4C56E8, Indigo #6D5EF5, Lime #C9F36A for occasional status accents.
- **Type:** Manrope or Inter for interface/body; Space Grotesk for display; JetBrains Mono for small technical labels.
- **Shape:** 12–20px card radius, thin borders, clean grids, deliberate whitespace.
- **Motion:** brief reveal/hover transitions; no persistent distracting motion. Honour `prefers-reduced-motion`.
- **Logo:** maintain a simple wordmark/monogram based on “DJ”; don't make the identity depend on elaborate 3D effects.

Alternative routes:
1. **Dark Systems Studio:** charcoal, blue-violet and subtle glow; closest to existing identity.
2. **Warm Editorial Engineer:** paper, ink, cobalt, large typography; best for recruiter readability.
3. **Product Console:** compact panels, system status motifs, and dashboard-like project storytelling; good if CareerForge is the strongest work sample.

Recommendation: Warm Editorial Engineer with selective Product Console elements inside technical case studies.

## Sitemap / information architecture

- `/` Home
- `/projects` Selected work index (optional if only 3–4 projects)
- `/projects/careerforge-ai` Flagship case study
- `/projects/smart-study-ai` Secondary case study
- `/experience` Experience and education (can remain a home section for v1)
- `/about` Working principles / background (can remain a home section for v1)
- `/contact` Contact and professional links (can remain a home section for v1)
- Static assets: `/og/portfolio-cover.png`, `/og/careerforge-cover.png`, favicon set, `/robots.txt`, `/sitemap.xml`

For a fast first iteration, use an excellent landing page plus two real case-study routes. Do not add a blog or CMS until there is a genuine publishing cadence.

## Home page content and wireframe outline

1. **Slim header:** DJ wordmark, Work, About, Experience, Contact, Resume PDF.
2. **Hero:** “I build useful software, from thoughtful interfaces to AI-powered workflows.” One sentence stating the target role; CTAs: “Explore selected work” and “Get in touch.” A professional portrait is optional; project preview should have equal or greater visual weight.
3. **Featured product:** CareerForge AI as a full-width visual case-study card with 2–3 authentic screenshots, short value proposition, stack, and links to Live Demo / Case Study / Source.
4. **Selected work:** CareerForge AI, Smart Study AI, and only other projects that can be accurately described and demonstrated.
5. **How I work:** Understand the user/problem → map the flow → implement → validate → iterate. Label this as the actual process only when it reflects how the project was built.
6. **Experience:** Domino's technical support, Dream Code internship, education; concise and role-relevant.
7. **Skills:** group by Frontend, Backend/data, AI/product integration, tools. Avoid skill bars and invented proficiency percentages.
8. **Contact CTA:** email, LinkedIn, GitHub; accessible, concise and no fake contact form if no backend exists.
9. **Footer:** copyright year, links, location/time zone only if useful.

### Text wireframe

```
[DJ]                         Work  About  Experience  Contact  [Resume]
----------------------------------------------------------------------
I build useful software,
from thoughtful interfaces
to AI-powered workflows.
[Explore work] [Contact me]              [CareerForge product preview]
Software Developer · React · TypeScript · Firebase
----------------------------------------------------------------------
FEATURED WORK / 01
CareerForge AI — a workspace for job-search preparation
[Resume analysis] [Job matching] [Application builder] [Tracking]
[Live demo] [Read case study] [Source code]
----------------------------------------------------------------------
SELECTED WORK                    HOW I APPROACH PROBLEMS
[Smart Study AI card]            Observe → Frame → Build → Validate
[Other verified project]         Clear trade-offs; no invented metrics
----------------------------------------------------------------------
EXPERIENCE & EDUCATION  |  SKILLS BY PRACTICAL USE
----------------------------------------------------------------------
Let's build something useful. [Email] [LinkedIn] [GitHub]
```

## Flagship case study: CareerForge AI

### Story arc

1. **At a glance**
   - Product: CareerForge AI
   - Role: personal project / developer and product designer (describe exact ownership honestly)
   - Status: live demo link supplied by owner; independently verify deployed flows before claiming they work
   - Stack grounded in repository: React 19, TypeScript, Vite, Firebase Authentication, Firebase Realtime Database, Firebase AI Logic/Gemini, pdf.js, Lucide React, Vitest.
   - Links: Live app, source repository, project report.

2. **Problem framing**
   Job seekers often handle resume review, job matching, application writing, job discovery and application tracking across disconnected tools. CareerForge brings those tasks together in one workspace. Clearly distinguish this product rationale from measured user research: do not claim user interviews or validation unless completed.

3. **User journey**
   - Visit landing page → Google sign-in
   - Set a reusable career profile
   - Upload text-based PDF/TXT or paste a resume
   - Review resume checks / extracted skills
   - Paste job description → inspect match estimates and missing skills/keywords
   - Generate/review application drafts
   - Discover related remote listings → save/annotate
   - Track application status from Saved through Applied, Interview, Offer or Rejected

4. **Key design / engineering decisions**
   - Resume PDF text extraction in the browser with pdf.js; scanned image-only PDFs require OCR elsewhere or pasted text.
   - Career profile and artifacts stored under each authenticated user's UID in Realtime Database.
   - Gemini via Firebase AI Logic, with a documented template fallback.
   - Related job sources are currently Jobicy and Himalayas, not an exhaustive job aggregator. Himalayas uses an authenticated Firebase callable due to browser CORS restrictions.
   - Transparent match-weight model in the README/report is a heuristic, not an actual employer ATS score.
   - Six-hour device-local cache reduces repeat feed calls.
   - Include failure states and trade-offs, not just happy-path screens.

5. **Screenshots to capture**
   Use real browser captures at consistent viewport sizes, with test/demo data only:
   - Landing / hero
   - Career dashboard
   - Resume analysis results (redact personal details)
   - Job Match report with matched/missing skills
   - Application draft output
   - Related Jobs with provider attribution
   - Saved Job / Application Tracker
   - Career profile + theme toggle
   Add captions explaining the user goal and the design decision each screenshot illustrates. Do not fabricate UI images or use other people's resume data.

6. **Demo embed**
   Prefer a screenshot/video poster with a clear “Open live app” link over an iframe, because authentication, iframe policies, cross-origin storage, and responsive behavior may make embedding brittle. Use a privacy-safe 30–60-second narrated walkthrough or GIF, with captions and a reduced-motion alternative. If iframe is tested and allowed, lazy-load it and keep a fallback link.

7. **Metrics and outcomes**
   Current repo report explicitly says deployed Firebase behavior and live flows have not been independently verified. Do not invent users, time saved, accuracy, conversion lift, or performance scores. Capture a baseline before publishing:
   - Engineering: production build pass, test count/pass rate, Lighthouse scores, Core Web Vitals, bundle size.
   - Product: successful sign-ins, resume analyses completed, match analyses completed, drafts created, saved jobs, tracked applications (aggregate and consent-aware; avoid storing resume content in analytics).
   - Usability: task completion, time to complete 3 core tasks, observed errors, confidence rating.
   - Case-study conversion: click-through to demo, source repository, and contact.
   Any public statistic needs a date range, measurement source, and definition. Where no production analytics exist, say “not yet measured.”

8. **Learnings / next iterations**
   Discuss what source inspection and testing actually revealed: listing coverage is limited to two remote feeds; external provider links and location eligibility need verification; AI drafts require human review; scanned PDFs are unsupported without OCR; live Firebase setup must be checked independently. Add personal lessons only after the owner confirms their reflections.

### Suggested case-study headline and summary

**CareerForge AI — a clearer path from resume to application**

“I built CareerForge AI to bring resume analysis, job-description matching, application drafting, remote-job discovery and application tracking into one workspace. The project combines a React and TypeScript interface with Firebase authentication and data storage, browser-based PDF text extraction, and Gemini-assisted drafting. Its match score is a transparent heuristic rather than a promise of employer ATS performance.”

## Responsive, interaction and accessibility requirements

- Breakpoints: approximately 360–480px mobile, 768px tablet, 1024px compact laptop, 1280px+ desktop; validate real widths rather than only device names.
- Mobile: single-column project sections, 44px minimum touch targets, no clipped navigation, buttons always visible and no horizontal overflow.
- Keyboard: all controls operable without a pointer; obvious focus ring; skip-to-content; meaningful link text; logical heading order.
- Screen readers: semantic landmarks, descriptive image alt text, correct button labels/expanded states, accessible status and error announcements.
- Contrast: meet WCAG 2.2 AA targets for body text and controls. Never rely on lime/cobalt colour alone to communicate state.
- Motion: reduced-motion support and no auto-playing sound.
- Forms: label every field, inline help/error feedback, clear success/failure state; avoid pretending a mailto link is a submitted form.
- Images: WebP/AVIF when supported, responsive `srcset`, explicit dimensions, lazy-load below fold, prioritise the hero image, preserve the portrait if requested.
- Performance: avoid heavy animation libraries until necessary; prefer CSS transforms/opacity, lazy-load case-study media, self-host only when it materially improves speed.

## Frontend / CMS / hosting recommendation

### V1 recommendation
Keep the existing static HTML/CSS/JS portfolio if prioritising speed and zero migration risk, but introduce clean route-like case-study pages using static files. If multiple polished case-study pages, interactive components, or reuse become important, migrate the portfolio (not CareerForge itself) to **Astro + TypeScript + Tailwind or CSS Modules**, with React islands only for interactive demos. Astro is well-suited to a content-rich, mostly static portfolio; a React/Vite implementation is also reasonable if matching your current skills and workflow is the priority.

- **CMS:** none initially; use Markdown/MDX case studies in Git. Consider a Git-based CMS only if non-developers need routine editing.
- **Hosting:** GitHub Pages for plain static output, or Firebase Hosting if staying close to CareerForge's setup. Use an owned domain when available.
- **SEO:** unique title/meta description per route; canonical URL; Open Graph/Twitter metadata; descriptive alt text; sitemap/robots; JSON-LD Person and CreativeWork/SoftwareApplication only for fields that are actually true; Search Console verification.
- **Analytics:** privacy-respecting event analytics (e.g. Plausible or Google Analytics) only after consent/privacy notice decisions. Avoid sending resume text, job descriptions, emails or identifiers to analytics.
- **Monitoring:** Search Console for indexing; Lighthouse CI or PageSpeed checks; periodic broken-link checks.
- **Security:** no Firebase secrets or service account keys in public portfolio; external links should use safe `rel` attributes; don't expose real private user data in screenshots.

## Analytics event plan

Track only the minimal signals needed to improve the portfolio:
- `hero_work_click`
- `careerforge_demo_click`
- `careerforge_case_study_view`
- `careerforge_source_click`
- `smartstudy_case_study_view`
- `resume_download`
- `contact_click`
Record route/source/variant if useful, but never log personal message contents. Define a primary conversion as a qualified contact click or demo click; review conversion quality, not clicks alone.

## Validation plan

Run 5 moderated sessions with peers, students or early-career job seekers who have not seen the redesign. Give tasks without explaining the interface:
1. Explain what Devaraj does and select a relevant project.
2. Find out what CareerForge AI does and open the demo.
3. Explain one technical/design decision from the case study.
4. Find the source code and contact route.
5. Use the portfolio at mobile width and keyboard-only.

Record first-click success, completion, time-on-task, blockers, confidence (1–5), and direct quotes with consent. Fix severe blockers before visual polish.

## KPIs and initial targets

These are **proposed targets**, not measured results:
- At least 4/5 test participants identify the primary role and flagship project without prompting.
- At least 4/5 find the live demo and repository unaided.
- At least 90% completion for core navigation tasks during testing.
- No critical keyboard/accessibility blockers.
- Lighthouse: aim for Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+; actual results depend on hosting, fonts and media, and should be reported after testing.
- Case-study engagement: measure demo/source click-through and qualified contact clicks after a baseline is available.

## A/B test backlog

Do these only after enough traffic exists; avoid claiming statistical significance with a tiny sample:
- Hero CTA: “Explore my work” vs “View CareerForge AI”
- Feature-led headline vs role-led headline
- Static project mockup vs short subtitled product walkthrough
- One full-width flagship case study vs a balanced project grid
Primary measure: demo/source click-through. Guardrail: contact conversion and bounce/engagement. Change one primary variable at a time.

## Milestones and estimates

For one developer using existing assets:
1. **Audit and content confirmation — 0.5–1 day:** verify project claims, contacts, links and downloadable resume.
2. **Information architecture and low-fi wireframes — 1 day:** mobile + desktop flows for home and case-study page.
3. **Visual system and key screens — 1–2 days:** tokens, typography, components, hero, project cards, case-study layout.
4. **Build — 2–4 days:** responsive home, CareerForge case-study page, Smart Study page, navigation and metadata.
5. **Capture and polish — 1 day:** genuine screenshots, social images, content editing.
6. **Accessibility/performance/SEO pass — 1 day:** keyboard, screen-reader basics, contrast, reduced motion, broken links, Lighthouse.
7. **Usability review and iteration — 1–2 days:** 5 sessions and top-priority fixes.

Estimated execution: **7–12 focused working days** depending on screenshot readiness, copy revision and whether the current static architecture is retained. A Figma prototype is a separate design artifact and must be created in Figma; this Markdown brief itself is implementation guidance, not a Figma file.

## Handoff checklist

- [ ] Sitemap and navigation states approved
- [ ] Desktop, tablet and mobile wireframes
- [ ] Final copy for hero, experience and both case studies
- [ ] Real product screenshots, redacted demo data, captions and image credits
- [ ] Colour/type/spacing tokens and reusable components
- [ ] Hover, focus, active, loading, success and error states
- [ ] Motion durations/easing and reduced-motion behavior
- [ ] Alt text, heading map and keyboard behavior
- [ ] Resume PDF and contact links verified
- [ ] Live app and GitHub repository links verified
- [ ] Page titles, descriptions, canonical/social metadata, favicon, sitemap and robots
- [ ] Analytics events and privacy note configured, if analytics is used
- [ ] Lighthouse and manual accessibility results recorded
- [ ] User testing findings and remaining known limitations documented
- [ ] Deployment, rollback and update instructions written

## Owner inputs to confirm before final publish

1. Which roles should be prioritised: Frontend Developer, Full-Stack Developer, Software Developer, AI-focused developer, or Technical Support?
2. A final public resume PDF and whether to show an email address on the page.
3. Approved product screenshots and a short honest account of what you personally designed/built.
4. Verified live links for each project and the exact repository intended for public source.
5. Any real adoption/performance/testing data, if available. Otherwise publish without numeric product-outcome claims.
6. Whether the visual identity should stay dark/neon or move to the recommended warm editorial direction.

## Repo links

- Portfolio source: https://github.com/devauchiha001/Devaportfolio
- CareerForge AI source: https://github.com/devauchiha001/careerforge-ai-main
- CareerForge AI live app: https://careerforge-ai.de5.net/
