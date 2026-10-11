# Portfolio Design System — Devaraj J

**Direction:** Editorial Product Lab  
**Purpose:** Make software projects, technical thinking and contact paths easy to understand. The system pairs an accessible paper-and-ink interface with restrained cobalt accents and dark product-storytelling panels.

## 1. Design principles

1. **Product proof before decoration.** Show real product screens, explain what a feature enables, and link directly to the live app and source.
2. **Readable before clever.** Keep body copy straightforward, section hierarchy predictable, and navigation short.
3. **Evidence over claims.** No invented adoption numbers, skill percentages, usability outcomes or performance scores.
4. **Motion with purpose.** Use motion to clarify state or guide attention, never as a requirement to understand content.
5. **Small-screen first.** Every component must work at narrow mobile widths, with keyboard access and reduced-motion support.

## 2. Colour tokens

| Token | Hex | Use |
|---|---|---|
| Paper | `#F7F7F2` | Main page background |
| Paper secondary | `#EEEEE8` | Alternate bands and supporting areas |
| Ink | `#171920` | Main text and primary controls |
| Muted | `#666B78` | Body copy and secondary labels |
| Subtle | `#8B909A` | Metadata; avoid for small critical text |
| Border | `#DEDFD8` | Dividers, card outlines |
| Cobalt | `#4D55E8` | Links, primary CTA and interactive focus |
| Cobalt dark | `#353FC8` | Hover state for primary CTA |
| Lavender | `#E6E7FF` | Soft accent surface |
| Lime | `#C9F36A` | Occasional positive/status accent only |
| Dark panel | `#1C1E2D` | Technical-storytelling section backgrounds |
| White | `#FFFFFF` | Cards and high-contrast content panels |

Do not use colour as the only way to communicate status. Check exact combinations against WCAG 2.2 AA before release; some subtle/metadata tokens are decorative and must not be used for essential small text.

## 3. Typography

- **Display / headings:** Space Grotesk, 600–700.
- **Body / UI:** Manrope, 400–800.
- **Technical labels / metadata:** DM Mono, 400–500.
- **Hero headline:** responsive 39–72px, line-height around 1.08, tight tracking.
- **Section headings:** responsive 32–51px, line-height 1.13.
- **Body copy:** 12–15px on this compact portfolio; aim for 1.8–1.95 line-height for longer copy. Increase where readability testing shows a need.
- **Labels:** 8–10px mono with modest letter spacing. Decorative labels must not carry unique essential information.

Fonts are loaded from Google Fonts. For privacy or performance-sensitive deployment, consider self-hosting only if the licence and asset strategy are verified.

## 4. Layout and spacing

- Main content maximum width: approximately 1220px.
- Desktop side gutters: 32px; reduce to 18px at mobile.
- Major section vertical padding: approximately 116px desktop, 77px mobile.
- Card padding: 20–49px depending on content depth and viewport.
- Use consistent 8px-ish increments for gaps; use larger 18–45px spacing between major groups.
- Card radius: 9–16px; pill radius reserved for tags and status labels.
- Borders are thin and low contrast; use shadow sparingly to separate a focal product mockup from the page.

## 5. Component patterns

### Navigation
Wordmark at left, anchor navigation, and one compact contact action. At widths below 700px, replace navigation links with a labelled toggle. Keep `aria-expanded` in sync, close after choosing a section or pressing Escape, and preserve visible keyboard focus.

### Buttons
- Primary: cobalt background, white text, directional arrow.
- Secondary: transparent/paper surface with border.
- Contact-light: near-white surface over the lavender CTA band.
- Minimum height: 44px on mobile.
- Hover: translate upward by 2px and darken primary fill; focus: 3px visible outline with offset.

### Project cards
Lead with one flagship project, then show secondary work. Each card includes project role/context, accurate description, relevant stack, and clear live/source/case-study links. Avoid false metrics and fake “live” status badges when deployment has not been checked.

### Product diagrams and screenshots
Current homepage/case study contain explicitly labelled concept illustrations, not screenshots from the deployed application. Replace these with genuine, privacy-safe browser captures before calling them product screenshots. Use seeded/demo accounts and redact names, email addresses, resume text and identifiers.

### Metadata tags
Use small mono text on pale, bordered surfaces. Keep tag content scannable; do not use tags as the only disclosure for AI, provider coverage, or data handling limitations.

## 6. Motion specification

- Scroll reveal: opacity 0→1 and translateY 18px→0, 550ms, cubic-bezier(.2,.75,.25,1).
- CTA hover: transform translateY(-2px), about 220ms.
- Colour/border transitions: about 220ms.
- Use IntersectionObserver and unobserve an item after it enters view.
- Do not animate layout dimensions or run continuous motion in essential content.
- When `prefers-reduced-motion: reduce` is enabled, reveal everything without movement and disable non-essential animation/scroll smoothness.
- Ensure page content is available if JavaScript or IntersectionObserver is unavailable.

## 7. Responsive behavior

- **Desktop:** two-column hero; split featured project; multi-column skill/capability grids.
- **Tablet (≤1000px):** stack hero, reduce columns, preserve comfortable text width.
- **Mobile (≤700px):** stack projects and experience, single-column problem cards, visible navigation toggle, 18px page gutters.
- **Small mobile (≤380px):** reduce heading and mockup sizes, wrap labels, avoid fixed-width cards.
- Verify 320px/360px/390px/768px/1024px/1440px widths and both portrait and landscape orientations. Avoid horizontal overflow.

## 8. Accessibility acceptance criteria

- Semantic header, nav, main, section and footer landmarks.
- One clear H1 per page; headings nested in a meaningful order.
- Skip link visible on keyboard focus.
- All interactive controls keyboard-operable with visible focus.
- Link purpose understandable from text, not only from icon.
- Descriptive alt text for real screenshots; decorative visuals ignored by assistive technology.
- Menu toggle exposes an accurate accessible name and expanded state.
- Contrast checked for all essential text, focus rings and component states.
- Reduced-motion path checked with OS accessibility preference enabled.
- Contact route communicates expected behavior; a mailto action must not pretend to be a submitted form.
- Test manually with keyboard navigation and at least one screen reader before publication.

## 9. Asset and performance guidelines

- Export screenshot sets at consistent desktop and mobile widths.
- Prefer WebP/AVIF for raster screenshots where supported; retain appropriate fallback behavior.
- Declare image dimensions to reduce layout shift.
- Lazy-load below-the-fold images, but prioritize the hero/focal visual.
- Avoid a heavy animation runtime unless an interaction clearly needs it.
- Use safe external link attributes (`rel="noopener noreferrer"` for new tabs).
- Run Lighthouse against the deployed site rather than relying on design intent. Record actual scores and date; proposed score targets belong in the validation brief, not in public claims.

## 10. Related handoff documents

- [Portfolio redesign strategy, sitemap, wireframes, case-study content, validation plan and milestones](PORTFOLIO_REDESIGN_BRIEF.md)
- [CareerForge AI live app](https://careerforge-ai.de5.net/)
- [CareerForge AI source repository](https://github.com/devauchiha001/careerforge-ai-main)
