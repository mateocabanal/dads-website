# Design: Rommel Cabanal

Read this file before changing the site. [Commit sheet](COMMIT-SHEET.md) · [Asset provenance](ASSETS.md)

## Identity

- **Feeling:** A black exhibition wall, with the artwork providing all the color.
- **Signature:** The approved acceptance-kit hero introduces the artwork on pure black. Selected Work proceeds from a brand identity pair to a printed proof before the project index.
- **Register:** One progressively enhanced static HTML page.

## Tokens

From `css/portfolio.css`:

```css
:root {
  color-scheme: dark;
  --ground: oklch(0 0 0);
  --ink: oklch(0.970 0 0);
  --muted: oklch(0.731 0 0);
  --rule: oklch(0.336 0 0);
  --active: oklch(0.196 0 0);
  --editorial: Newsreader, Georgia, serif;
  --text: 'DM Sans', Arial, sans-serif;
  --gutter: clamp(1rem, 4vw, 3.75rem);
  --heading: clamp(2.5rem, 5vw, 4.5rem);
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}
```

## Typography and color

DM Sans carries the headline, section titles, reading text and controls. For this revision, use regular-to-medium weights (400–500) even at display sizes; scale and spacing, not boldness, carry the hierarchy. Keep Newsreader for project titles, “hold.” and the small signature mark. Body copy stays at 1rem/1.55; case notes can span up to 70 characters. Display tracking never exceeds −.04em.

The whole canvas stays black. Use neutral white for primary text, neutral gray for secondary text, a hairline for alignment, and charcoal for targeted, hovered or open index rows. Artwork is the only source of chroma. No gradients, glows, tinted overlays, or alternating section backgrounds.

## Layout and behavior

- Desktop hero: 40/60 editorial split, with the image and attached caption offset below the top of the facing copy. At 54rem and below, stack text, artwork, then caption.
- Selected work: a top-aligned 3:2 Kapwa pair with one shared caption, then the Convocation photo with a facing note. `--work-gap: clamp(1rem, 2.5vw, 2.5rem)` governs both the column gutter and the spacing between entries. At 38rem and below the images stack at full width. Preserve artwork proportions; no overlap or stagger.
- Project index: a sticky guide beside grouped, title-first disclosures on wide screens. The three jump links correspond to Capilano University, VOA, and Storydriven & MISC. Stack the guide above the list on smaller screens. Keep credits in a definition list, true gallery proportions and stable fragment IDs. JavaScript only opens the targeted case when following a project link; native links and disclosures work without it.
- Contact: a closing line on black with email, social links and a way back to the top.
- One scroll family, confined to Selected Work: brief entrance treatments on the Kapwa packaging and Convocation print. The frame holds its position as the image moves inside it. Reduced motion and unsupported browsers see the finished composition immediately. Native scroll never stops or snaps.
- Link arrows retain the 2px right/up translation over 140ms. A linked work plate can enlarge by 2.5% inside its frame over 240ms on fine-pointer hover. Reduced motion preserves underline feedback and native open state. Keyboard focus is a 2px current-color outline.

## Copy and exclusions

Concrete and concise. “Design you can hold.” is followed by the formats the site shows, rather than a promise of impact. Label links with the destination project or section; keep collaboration credits. No generic CTA button, marquee, fullscreen carousel, or additional uppercase section kickers. No `auteur-allow` suppressions.

## Rejected

| What was tried | Why it lost | What replaced it |
|---|---|---|
| Breaking “hold.” onto its own desktop line | Orphaned “can” and competed with the photograph for height | A two-line statement when the facing panel has room |
| Legacy carousel and hover-only project names | Work was difficult to scan and had no shareable case links | Editorial previews and a title-first, deep-linkable index |
| Green facing panel and light archive | Covered too much of the page in site color and departed from the original black aesthetic | A continuous black gallery and original artwork in color |
| Heavy headlines, two similar plates, undivided project list | Emphasis came from weight rather than the work; the page lost rhythm below the hero | Moderate typography, an overlapping identity spread, a saturated illustration and a grouped index |
| Overlapping and staggered image edges | The gutters read as inconsistent across projects and breakpoints | Shared column tracks and spacing; distinct image sizes and captions still establish hierarchy |
| Pinned Capsule projection in Selected Work | The user rejected the sequence | Removed the feature; the original Capsule case remains in the approved index |

## Editing protocol

1. Serve the root with `python3 -m http.server 8177 --bind 127.0.0.1`. No package install or build step. The existing `CNAME` remains the deployment hostname.
2. Use the established tokens, section patterns and native controls. Keep `index.html` complete when JavaScript is disabled. Apply format, color and motion decisions here before changing the system in code.
3. Run Auteur’s `slopscan` on `index.html`, `css/portfolio.css`, and `js/portfolio.js`, then re-shoot affected viewports. Exercise keyboard focus, a linked project, and the no-JS path after changing navigation.

## Verification of the lighter gallery revision

> Summary: 0 fails, 0 warns, 0 suppressed

Reviewed 42 normal and reduced-motion frames at 390, 768 and 1440 px. Browser checks covered nine widths, all three work links, the three index groups, keyboard focus, no-JavaScript navigation and disabled hover motion under reduced motion. All 22 projects and 115 case-study images remain. Axe reported no WCAG A/AA violations in the tested state.

Local Lighthouse at DPR 2, 1.6 Mbps down, 150 ms latency and 4× CPU slowdown: LCP 0.79 s, CLS 0.00, TBT 38 ms. Full-page mean lightness L 0.174 (target 0.22). Compared with the earlier black cut, the artwork now varies in both color and scale below the same hero, and the archive has its own rhythm rather than continuing the image layout.

### Selected Work spacing pass

> Summary: 0 fails, 0 warns, 0 suppressed

Checked equal gutters and aligned image edges at seven widths from 320 to 1440 px, and reviewed the 390, 768 and 1440 px renders. Both selected case links and the archived Capsule case work. The hero and project-index markup and the archive styling match the approved revision.
