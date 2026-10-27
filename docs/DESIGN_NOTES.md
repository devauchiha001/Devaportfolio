# Reference design study — Antigravity-inspired portfolio

**Reference URL:** https://antigravity.google/  
**Checked:** 27 October 2026  
**Purpose:** Document observable design patterns to inform an original implementation. This is not an attempt to clone the source. No Google/Antigravity assets, copy, logos, cursor images, screenshots, or videos are used in this portfolio.

## Desktop visual measurements

The live page was inspected with a remote browser and DOM computed-style sampling. The browser session reported a viewport around **1905 × 993 CSS px** (a nominal desktop capture), so measurements should be read as observed browser values, not design tokens guaranteed at every viewport.

| Element | Observed/computed value |
|---|---|
| Page text color | `rgb(18, 19, 23)` / `#121317` |
| Body font | `"Google Sans Flex", "Google Sans", sans-serif` |
| Body font size / line height | `16px / 24px` |
| Hero h1 | `80px`, weight `450`, line-height `88px`, normal letter-spacing |
| Section h2 | `42px`, weight `450`, line-height `43.68px`, letter-spacing `-0.73px` |
| Fixed header | `92px` high, top `0px`, translucent white `rgba(255,255,255,.85)`; no computed shadow in the sampled state |
| Main content containers | max-width `1792px`; common inner horizontal padding `96px` in the sampled desktop layout |
| Dropdown column gap | `24px` |
| Top-level nav control | pill border radius `9999px`; padding `6px 8px 6px 16px`; text `14.5px`; transition around `0.15s ease-out` |
| Primary button | near-black `rgb(18,19,23)`, white text, pill radius `9999px`, padding `6px 16px`, sampled text `17.5px` |
| Card-like utility surface | `rgb(248,249,252)`, radius `20px`, padding `18px 20px`, no shadow in the sampled state |
| Small context menu items | radius `10px`, padding `8px 12px`, transition `background-color .12s, color .12s` |

The reference also uses substantial vertical gaps between major sections, broad maximum-width containers, simple black-on-white surfaces, and rounded components instead of strongly outlined rectangular UI. The page has a minimal shadow language, with borders and background contrast doing most of the separation.

## Navigation and dropdown behavior

- A fixed header persists at the top while scrolling. The sampled computed style remained at the same height and background in the inspected scroll state.
- Primary menu entries such as Products, Use Cases, and Resources are pill-shaped buttons. They reveal grouped dropdown content; the sampled dropdown panel uses a flex layout with a `24px` gap.
- Menu content is organized into clear groupings; links are rows with generous click area and restrained hover background changes.
- The reference's separate download/primary action is filled near-black with white text.
- The redesign maps this pattern to Work, Skills, Experience, and About dropdown groups, plus a "Let's talk" CTA. Menu summaries remain keyboard-operable native `details/summary` controls.

## Hover, focus and transition notes

- Sampled pill controls use short transitions near `150ms` with ease-out timing.
- Body/content links have a blue hover color in some areas (observed rule: `rgb(21,87,176)`); arrow-style links move their arrow on hover.
- Utility menu options use a soft gray hover background (`rgb(241,243,244)`) and dark text.
- Keyboard focus styles appear in relevant component rules; some arrow links suppress their own outline, so this redesign uses explicit, visible focus rings for all links, buttons, and summaries.
- No reliable site-wide shadow or common card shadow was observed in the sampled states. Surfaces mostly rely on quiet borders and pale fills.
- Timing values can vary by component and state; avoid treating one sampled rule as a site-wide motion specification.

## Scroll motion and parallax

- The page contains a large animated hero particle/canvas layer and uses GSAP-style transform states on hero elements (the sampled logo was translated by a fraction of a pixel and had opacity near `0.98`).
- DOM inspection indicates sections animate as the user moves through the page. The production site's full scroll trigger positions and every easing curve could not be deterministically measured from a single browser capture.
- This portfolio uses an IntersectionObserver reveal: `opacity 0 → 1`, `translateY(22px) → 0`, `680ms`, `cubic-bezier(.2,.75,.25,1)`, triggered at `12%` intersection, then unobserved. Reduced-motion settings show content without movement.
- Project artwork uses sticky positioning on desktop. A low-amplitude scroll parallax is scheduled through one `requestAnimationFrame` per scroll frame: the art is offset by a clamped ±14px based on its center's distance from viewport center (multiplier `0.025`). Hover adds a small lift. The effect is disabled for touch/coarse pointers and reduced-motion preferences, and does not require a heavy animation runtime.

## Custom cursor observations

- The reference DOM contains a `.custom-cursor` with `pointer-events:none`, layered above the page (z-index around `100`), initially hidden with opacity `0` and a scale-zero transform.
- Its content is a white pill with a play-triangle SVG and a text label. Observed labels include **“Play intro”** and **“Watch case”** when the cursor enters hero/video or case-card target regions. The cursor grows into the pill, follows the pointer and contracts/fades when the pointer leaves.
- The reference also contains small blinking text-cursor shapes within terminal-like content. The precise interpolation coefficient and every hover target's threshold were not exposed as stable public measurements; the cursor behavior is therefore documented qualitatively rather than claiming exact source parameters.
- This redesign uses a newly authored inline SVG pointer and an HTML label pill. It uses an animation-frame lerp factor of `0.18` per frame, and shows labels driven by each link's `data-cursor` attribute. The native cursor is never hidden for inputs or editable text. The custom pointer is not enabled for touch/coarse pointers or when `prefers-reduced-motion: reduce` is active.

## Mobile review and adaptation

The live reference was separately opened at **375 × 812 CSS px** in mobile mode. In the sampled responsive state, the fixed header measured **52px high** and full viewport width (**375px**); the collapsed desktop navigation area was replaced by a mobile menu toggle. Opening the mobile menu produced a full-width panel approximately **375 × 497px**, with six stacked primary navigation rows measured at about **79px each**. When a grouped entry was expanded, its dropdown remained in normal flow (static positioning), was about **360px wide** and measured around **308px high** in the sampled state. The hero heading's content box was **343px wide** and **138px high** at this viewport. The browser automation did not return a reliable computed mobile heading font-size or every transition duration; these remain explicitly unmeasured rather than guessed.

## Original design decisions in this portfolio

- **Fonts:** the reference uses Google Sans Flex / Google Sans. These are not copied into the project. The portfolio continues to load the open-source Google Fonts families already in use: Manrope for body/UI, Space Grotesk for display headings, and DM Mono for technical labels.
- **Logo:** existing `logo.svg` DJ mark is retained.
- **Project artwork:** the homepage and CareerForge case study use `assets/careerforge-live-screenshot.png` and `assets/smart-study-live-screenshot.png`, captured from the two public deployed project landing pages in a 1200 × 780 browser viewport. They show public landing-page UI, not a signed-in user's private workspace. The earlier original SVG concept illustrations remain in `assets/careerforge-preview.svg` and `assets/smart-study-preview.svg` as editable backup artwork.
- **Intro:** the “Play intro” action opens a short, looping CSS demo of the documented CareerForge AI workflow. It is a placeholder for a real video, not a video recording.
- **No copied reference assets:** no reference logo, screenshot, animation footage, cursor image, illustration, or marketing copy is embedded or hotlinked.
- **Unmeasured acceptance items:** Lighthouse performance score, exact visual parity at 1440/1024/768/375 px, and screen-reader testing must be verified against the deployed GitHub Pages build; no score is claimed here.
