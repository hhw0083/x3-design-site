# X3 Design Homepage Audit

Date: 2026-07-05

## Scope

Surface reviewed: homepage and supporting codebase structure for X3 Design.

Design target: quiet, high-end, modern, minimalist, wabi-sabi leaning interior design studio identity.

Reference principles used:

- gpt-taste
- high-end visual design
- minimalist UI
- redesign existing project without unnecessary rebuild
- image-to-code style visual fidelity from current screenshots
- full-output enforcement

## Captured Evidence

1. `01-desktop-hero.png` - Desktop hero
2. `02-desktop-projects.png` - Desktop projects section
3. `03-desktop-about.png` - Desktop about and next-section rhythm
4. `04-desktop-contact.png` - Desktop contact section
5. `05-mobile-hero.png` - Mobile hero
6. `06-mobile-menu-open.png` - Mobile navigation open

Rejected evidence:

- `01-home-desktop-full.png` and `02-home-mobile-full.png` show fixed-header full-page stitching artifacts, so they should not be used for precise visual critique.

## Step Health

1. Desktop hero: strong visual direction, needs hierarchy restraint and CTA simplification.
2. Desktop projects: good quiet grid, but project metadata still feels placeholder-like.
3. Desktop about: brand concept is strong, but vertical spacing and transition into contact need tuning.
4. Desktop contact: strong contrast, but section anchor/header overlap can feel abrupt.
5. Mobile hero: usable and atmospheric, but first-screen density and next-section bleed need refinement.
6. Mobile menu: functional and clean, but the open panel feels more generic than high-end.

## Strengths

- The core palette is aligned with the brand: warm cream, charcoal, soft beige lines, black glass header.
- The hero image and overlay successfully create a quiet interior-studio tone.
- Removing the Three.js stone helps the site feel calmer and more brand-led.
- The About concept with the vertical logo and 辰 / 山 text is the strongest brand-specific section on the homepage.
- The project grid is restrained and close to an editorial portfolio layout.
- Header glass treatment gives the site a refined physical-material feeling when it is not too opaque.

## UX Risks

- `SectionIntro` currently comments out the Chinese title, so shared section headings can silently disappear. This creates inconsistent information hierarchy.
- Services page still has a top page-title block in the inspected code, while the desired direction was to remove it. This suggests recent edits may not be reconciled.
- Project card metadata uses generic values like `Project · Taiwan` and `TBD`, which weakens the high-end studio impression.
- Homepage hero has two competing CTAs. For a quiet luxury brand, one primary action plus a subtle secondary text link would feel calmer.
- Contact CTA appears both in header and hero/contact sections, but the action language varies (`Contact`, `Start a Conversation`, `Contact Page`), making the journey less intentional.
- Scroll-to-section states can land with the fixed header overlapping previous content or transitional content.

## Accessibility Risks

- The hero depends on white text over a darkened photo. It appears legible in captured states, but contrast should be checked against all responsive crops.
- Mobile menu open state has visible focus outline around the close button, which is good for keyboard visibility, but the panel copy and touch targets should be verified with keyboard navigation.
- Motion reveal effects need reduced-motion confirmation beyond CSS inspection.
- `h6` is used for a prominent contact heading in `src/app/page.tsx`; that is likely semantically too low for the visual hierarchy.
- Mailto form behavior on the Contact page may be surprising because submit opens the user's mail client rather than showing clear in-page confirmation.

## Codebase Risks

- `HeroStoneScene.tsx` remains in the codebase and `three` remains in dependencies, though the scene is not rendered. If the stone will stay hidden, this can become dead code/dependency weight.
- `SectionIntro` accepts `title` and `headingLevel` but does not render the heading because it is commented out.
- `studioProjects.ts` generates placeholder project content from folders. Good for scalability, but unresolved placeholders are now visible on the polished brand site.
- `StudioProjectCard` uses `unoptimized` on images, which may be okay for local image quality, but should be intentional for deployment performance.
- Some page-level headings and back links are inconsistent across Services, About, Projects, and Contact.

## Recommended Plan

### Phase 1 - Brand Polish And Consistency

1. Restore or refactor `SectionIntro` so it consistently renders only the intended eyebrow and Chinese title.
2. Decide section titles for homepage: Projects / About / Contact should be short and stable.
3. Remove or reconcile Services top intro block if the desired final direction is direct service listing.
4. Standardize CTA language:
   - Primary: `View Projects`
   - Contact: `Contact X3 Design` or `Start a Conversation`, choose one.
5. Replace placeholder project metadata:
   - Avoid `Project · Taiwan`
   - Avoid `TBD`
   - Use real type / city / year, or hide unknown values.

### Phase 2 - Visual Quietness

1. Reduce hero title scale slightly on desktop or increase left text containment, so it feels less loud.
2. Make hero secondary CTA less button-like, possibly a text link.
3. Increase the breathing room between About and Contact, or tune the contact anchor so the transition is intentional.
4. Refine mobile first screen so the next-section label does not awkwardly peek at the bottom.
5. Make mobile menu panel feel more material and deliberate: softer backdrop, better spacing, and clear active/link states.

### Phase 3 - Interior Studio Content Quality

1. Rewrite project metadata around interior-design vocabulary:
   - Residential / Taipei
   - Apartment Renovation / Taipei
   - New Build Planning / Hsinchu
2. Add curated `overview` copy for the three visible projects before adding more projects.
3. Keep About homepage conceptual; move practical studio intro to About page.
4. Review Services copy density: the cards currently carry a lot of tags and notes; consider a quieter price/spec treatment.

### Phase 4 - Technical Cleanup

1. If the stone stays hidden, remove unused `HeroStoneScene.tsx`, `three`, and `@types/three`; otherwise gate the scene behind a feature flag.
2. Add `scroll-mt` or section-specific anchor offsets for fixed header navigation.
3. Confirm heading levels across pages: one `h1` per page, section `h2`s, no decorative `h6` for major headings.
4. Run responsive visual QA after changes at 390, 768, 1024, and 1440 widths.
5. Run build/typecheck after implementation.

## Evidence Limits

- This audit used screenshot evidence and static code inspection only.
- It did not perform full keyboard traversal, screen reader testing, network/performance profiling, or color contrast calculation.
- Browser DOM snapshot failed during one mobile-menu capture attempt, so the menu interaction was captured via visible coordinate click.
