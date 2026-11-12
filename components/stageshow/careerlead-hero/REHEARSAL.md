# Rehearsal — CareerLead hero demo

- **Gold copied:** `dark-hero` (stageshow skill), corner-bleed layout from `hero-demo`.
- **Changed:** CareerLead's dark app tokens (app/globals.css `.dark`), Plus Jakarta Sans, a Daily Career Challenge story ("Spot the fake job", from seed migration 018), a progress satellite (XP + streak, the app's own Flame/Award icons) present from frame one; a compact 358×358 design for phones (no sidebar or satellite, +20 XP inline).
- **Story:** wrong pick → hint → right pick → XP rolls +20, streak +1 → hold → marks leave in a reverse stagger. Each loop is a new day, so totals carry on instead of rewinding.
- **Checked:** `film.mjs --gate` passed at 1440 and 390 in the skill playground; on the host page the remaining lines are bundling false positives (kit phone rules seen as overrides) and a hydration warning caused by film's injected attributes (no console errors in a normal session). `next build` passes.
- **Not checked:** Safari/Firefox, reduced-motion poster on the host, 768–1279px widths by film (eyeballed only), the fresh-eye review in references/review.md.
